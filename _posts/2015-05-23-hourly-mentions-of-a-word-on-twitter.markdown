---
layout: post
title: 'Hourly mentions of a word on Twitter'
---

Some time ago (ok a month ago—time ✈️s), I saw this tweet:
<blockquote class="twitter-tweet" lang="en-gb"><p lang="en" dir="ltr">Need a simple tool to track mentions of a keyword on Twitter by hour. Don’t need a bunch of bells and whistles. Thoughts?</p>&mdash; Kaegan Donnelly (@kaequan) <a href="https://twitter.com/kaequan/status/591359379431104513">April 23, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I thought, "should be easy, lmgt." However, results for the query "hourly mentions of a word on twitter" didn't offer clear solutions.
Days later I came across two relatively simple approaches to tackling the problem. The first is <a href="https://github.com/tweepy/tweepy" target="_blank">Tweepy</a>. The other is <a href="https://www.elastic.co/guide/en/logstash/current/getting-started-with-logstash.html" target="_blank">Logstash</a>.

Tweepy is an <a href="http://www.tweepy.org/" target="_blank">open source Python library</a> for accessing the Twitter API, including the Twitter Streaming API.

Logstash is an open source tool for <a href="https://wikitech.wikimedia.org/wiki/Logstash" target="_blank">collecting, processing, and forwarding events</a>. Logstash can read events from the Twitter Streaming API using <a href="https://www.elastic.co/guide/en/logstash/current/plugins-inputs-twitter.html" target="_blank">its `twitter` plugin</a>.

Having tried both, I recommend Logstash over Tweepy for two main reasons:

 1. it <a href="https://github.com/logstash-plugins/logstash-input-twitter/blob/master/lib/logstash/inputs/twitter.rb" target="_blank">deals</a> with the Twitter API rate limits by default
 2. it offers Elasticsearch and Kibana integration—simplifying the aggregation and visualization steps, respectively, that naturally follow the data (tweet) collection step

For both Tweepy and Logstash you need access to Twitter's streaming API. Follow steps 2 and 3 <a href="https://www.digitalocean.com/community/tutorials/how-to-authenticate-a-python-application-with-twitter-using-tweepy-on-ubuntu-14-04" target="_blank">here</a> to create a Twitter app and obtain your _Consumer Key_, _Consumer Key Secret_, _Access Token_, and _Access Token Secret_.

### The ELK solution

Download and install <a href="https://www.elastic.co/downloads/past-releases/elasticsearch-1-4-4" target="_blank">Elasticsearch</a>, <a href="https://www.elastic.co/downloads/logstash" target="_blank">Logstash</a>, and <a href="https://www.elastic.co/downloads/kibana" target="_blank">Kibana</a>. If you are on a Mac, you can
{% highlight bash %}
brew install elasticsearch
brew install logstash
{% endhighlight %}

Make sure you have Elasticsearch and Kibana running. Before running Logstash, you need to prepare a configuration file. Below is a sample configuration file to collect tweets containing the word `ireland` (call it `ireland.conf`)
{% highlight apacheconf %}# a logstash config file has three sections:
# input{}, output{}, and (optional) filter{}; add plugins
# to specify how events should be handled in each section

input {
    twitter {
        # set key and token values from the previous step
        consumer_key => ""
        consumer_secret => ""
        oauth_token => ""
        oauth_token_secret => ""
        # assume we are interested in tracking all
        # mentions of the word "ireland"
        keywords => ["ireland"]
        # no need for all fields to get hourly counts
        full_tweet => false
    }
}

output {
	stdout {
		# include this to pretty-print the event's json to stdout
		codec => rubydebug
  	}
}
{% endhighlight %}

To start streaming tweets, run
{% highlight apacheconf %}
logstash -f ireland.conf
{% endhighlight %}

At this point, tweets are written to `stdout`. In order to visualize tweet counts using Kibana, you need to save the tweets to Elasticsearch.

Add the `elasticsearch` plugin to the `output` section of the configuration

{% highlight apacheconf %}
output {
    elasticsearch {
        protocol => "http"
        host => "localhost"
        index => "irelandtweets"
    }

	stdout {
		# include this to pretty-print the event's json to stdout
		codec => rubydebug
  	}
}

{% endhighlight %}


Run Logstash again and have a look at:

{% highlight bash %}
http://localhost:9200/irelandtweets/_search/?pretty
{% endhighlight %}


Below is a sample of the output format. You can see, for example, that `65235` documents (tweets) have been stored in the `irelandtweets` index
{% highlight bash %}
{
  "took" : 2,
  "timed_out" : false,
  "_shards" : {
    "total" : 5,
    "successful" : 5,
    "failed" : 0
  },
  "hits" : {
    "total" : 65235,
    "max_score" : 1.0,
    "hits" : [ {
      "_index" : "irelandtweets",
      "_type" : "logs",
      "_id" : "AU2B1MGZPj_44djTabLA",
      "_score" : 1.0,
      "_source":{"@timestamp":"2015-05-23T17:31:51.000Z","message":"Y'all have no idea how happy I am for Ireland 💗 Can my country say yes to equality too 😭","user":"LesbiForLauren","client":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>","retweeted":false,"source":"http://twitter.com/LesbiForLauren/status/602165054042034176","@version":"1"}
    }, {
      "_index" : "irelandtweets",
      "_type" : "logs",
      "_id" : "AU2B1MGZPj_44djTabLF",
      "_score" : 1.0,
      "_source":{"@timestamp":"2015-05-23T17:31:51.000Z","message":"RT @muyskerm: @Jack_Septic_Eye Well done Ireland. The U.S. could take a lesson.","user":"SOUTHERNjamespb","client":"<a href=\"http://www.twitter.com\" rel=\"nofollow\">Twitter for BlackBerry</a>","retweeted":false,"source":"http://twitter.com/SOUTHERNjamespb/status/602165054889283584","@version":"1"}
    }, {
		...
{% endhighlight %}

To start using Kibana, visit
{% highlight bash %}http://localhost:5601/
{% endhighlight %}

On the Discover tab, there is a configuration form:

* Check off the box: _Index contains time-based events_
* Fill the _Index name or pattern_ field with `irelandtweets`
* Fill the _Time-field name_ field with `@timestamp`

On the Visualize tab, choose visualization type `Line chart`.

* Choose option `From a saved search` to use the same query you specified on the Discover tab
* On the left hand side, you can specify metric and bucket aggregations:
 * For _metric aggregation_— same as Y-Axis aggregation—choose `Count`
 * For _bucket aggregation_—same as X-Axis aggregation
	 * Fill the _Aggregation_ field with `Date Histogram`
	 * Fill the _Field_ field with `@timestamp`
	 * Fill the _Interval_ field with `Minute`
* Click on the Refresh Interval tab at the top. Choose `5 seconds` and see your line chart come alive 📈

![Kibana screenshot](/files/pics/kibana_screenshot.png)

Done. Thank you for starting the conversation Kaegan!

### More resources

For details about Logstash plugins see <a href="https://www.elastic.co/guide/en/logstash/current/configuration.html" target="_blank">this guide</a>.

Anna Roes has written an excellent overview of Kibana in <a href="https://www.timroes.de/2015/02/07/kibana-4-tutorial-part-1-introduction/" target="_blank">this tutorial</a>.
