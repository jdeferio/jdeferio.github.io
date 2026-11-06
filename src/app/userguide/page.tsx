import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import JsonLd from '@/components/JsonLd'
import { pageGraph } from '@/lib/structured-data'
import profileStyles from '../profile.module.css'
import styles from './working.module.css'

const description = 'How Joseph Deferio approaches engineering, collaboration, leadership, and feedback.'

export const metadata: Metadata = {
  title: 'Working with me',
  description,
  openGraph: { type: 'website', siteName: 'Joseph Deferio', locale: 'en_US', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Joseph Deferio — Senior Software Engineer & Founder' }],
    title: 'Working with me | Joseph Deferio',
    description,
    url: '/userguide/',
  },
  twitter: { images: ['/opengraph-image'],
    card: 'summary_large_image',
    title: 'Working with me | Joseph Deferio',
    description,
  },
  alternates: { canonical: '/userguide/' },
}

const principles = [
  {
    id: 'approach',
    title: 'How I approach problems',
    paragraphs: [
      'I’m analytical, curious, and attentive to detail. I like understanding how things work, questioning assumptions, and turning that understanding into something useful.',
      'I care about maintainable systems and sustainable ways of working. I also recognize that the right level of rigor depends on the stakes. I want us to be explicit about tradeoffs: what needs care now, what we can simplify, and what we will need to revisit.',
      'Give me enough context to understand the problem and time to test the assumptions that matter. I’m happy to change direction when the evidence calls for it.',
    ],
  },
  {
    id: 'collaboration',
    title: 'How I collaborate',
    paragraphs: [
      'I communicate directly and appreciate the same in return. Lead with the question or decision, share the relevant context, and make the next step clear. If you have a hypothesis or recommendation, include it. You don’t need a complete solution to raise a problem.',
      'I value questions and disagreement. Understanding why someone sees a problem differently often helps us find a better answer. I try to keep the people affected by a decision informed, even when a smaller group needs to make the call.',
      'For urgent issues, use a channel that gets my attention quickly. For work that needs thought, a written explanation gives me room to investigate and respond usefully. I aim to be clear about ownership, expectations, and when a response is needed.',
    ],
  },
  {
    id: 'leadership',
    title: 'How I lead',
    paragraphs: [
      'I want people to understand the outcome we’re working toward and have room to decide how to get there. My role is to provide context, tools, and support, help remove obstacles, and make expectations clear.',
      'Trust and accountability go together. I value follow-through, early visibility into problems, and honest conversations when a commitment needs to change. Shared checkpoints should help us stay aligned and give people the support they need.',
      'Plans will change. When they do, I want us to explain what changed and why, so the team can make informed decisions about what comes next.',
    ],
  },
  {
    id: 'feedback',
    title: 'How I handle feedback',
    paragraphs: [
      'I prefer feedback early, directly, and with enough detail to understand what happened and its effect. That applies equally to feedback I give and feedback I receive.',
      'I want people to be able to challenge my decisions and tell me when my approach isn’t helping. Listening is part of the job, especially when I’m responsible for a team or a decision.',
      'Not every piece of feedback calls for the same response. I try to understand it, investigate where needed, and agree on practical next steps. Difficult conversations still deserve kindness and respect.',
    ],
  },
]

export default function UserGuidePage() {
  return (
    <Layout title="Working with me">
      <JsonLd data={pageGraph('/userguide/', 'Working with me', 'WebPage')} />
      <div className={styles.working}>
        <header className={profileStyles.pageHeader}>
          <p className={profileStyles.eyebrow}>Collaboration & leadership</p>
          <h1>Working with me</h1>
          <p className={profileStyles.summary}>How I approach problems, work with people, and help teams move forward.</p>
          <p className={styles.introduction}>These are the habits and principles I aim to bring to my work. They’re a starting point for a conversation about how we can work well together.</p>
        </header>
        {principles.map(({ id, title, paragraphs }) => (
          <section key={id} className={styles.section} aria-labelledby={id}>
            <h2 id={id}>{title}</h2>
            <div>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </section>
        ))}
        <section className={styles.section} aria-labelledby="outside-work">
          <h2 id="outside-work">Outside work</h2>
          <div>
            <p>I’m a runner and have completed the New York City Marathon more than once. I like tinkering and making things, and hope to have a workshop of my own one day.</p>
            <p>I’m happiest near the water, or on it. I also speak Portuguese. <span lang="pt-BR">Diga oi!</span></p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
