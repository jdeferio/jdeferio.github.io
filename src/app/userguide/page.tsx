import React from 'react'
import Layout from '@/components/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Guide - Joseph Deferio',
  description: 'Personal working style guide and communication preferences for Joseph Deferio - data engineer and researcher. Learn about collaboration, feedback, and work environment values.',
  keywords: ['joseph deferio', 'user guide', 'working style', 'communication', 'collaboration', 'feedback', 'leadership', 'data engineering'],
  openGraph: {
    title: 'User Guide - Joseph Deferio',
    description: 'Personal working style guide and communication preferences for Joseph Deferio - data engineer and researcher.',
    type: 'website',
    url: 'https://jdeferio.github.io/userguide',
  },
  twitter: {
    card: 'summary',
    title: 'User Guide - Joseph Deferio',
    description: 'Personal working style guide and communication preferences for Joseph Deferio - data engineer and researcher.',
  },
  alternates: {
    canonical: 'https://jdeferio.github.io/userguide',
  },
}

export default function UserGuidePage() {
  return (
    <Layout title="User Guide">
      <div className="prose max-w-none">
        <h1>User Guide</h1>
        
        <div className="space-y-8">
          {/* My Style Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 underline">My style</h3>
            <p className="text-gray-700">
              analytical, curious, process & detail oriented, enthusiastic builder
            </p>
          </section>

          {/* Environment Values Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 underline">On environment values</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Organization and sustainability over speed and instant gratification</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    I value environments that promote organization and sustainability. Far too often, issues tend to pile up when these values are sacrificed (see: technical debt, rework, bug fixes, etc.)
                  </li>
                  <li>
                    "Measure twice, cut once" is an old proverb that still rings true. There is a time and place for everything, but let's try to maintain a set of principles for everyday work.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Question-asking and feedback delivery</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    Opportunities to enter into the feedback loop and asking "why?" questions allow for continuous learning and growth. It also opens up valuable opportunities for refinement, which are gained from different perspectives weighing in. Let's keep asking questions.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Transparency and inclusiveness</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    Inclusiveness and transparency are important to keeping teams well-informed and working towards a unified goal. There are times when it's better to inform smaller groups so that decisions can be made faster, but overall I believe in not keeping people in the dark for too long.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Communication Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 underline">On Communication</h3>
            
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Hierarchy of communication (most→ least urgent): Call→ Text→ Email→Slack.</li>
                <li>When sending emails, clearly state expectations/questions. Open-ended communication or FYIs might not get a response. I will try to do the same with my outgoing correspondence</li>
                <li>Be specific about what's needed and who is going to do it</li>
                <li>Be efficient, hit the major points early</li>
                <li>During creative and problem-solving conversations, the following framework helps when asking questions:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>ask the question</li>
                    <li>add your hypothesis</li>
                    <li>propose a solution (if possible)</li>
                  </ul>
                </li>
                <li>Give me time to verify the issues and potential outcomes. This will allow me propose appropriate solutions</li>
                <li>My communication style is typically straight and to the point. Please don't interpret this as me being cold or careless. It helps me work efficiently and focus on what needs to get done.</li>
              </ul>
            </div>
          </section>

          {/* Feedback Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 underline">On Feedback</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Feedback is a gift.</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    It should be welcomed, but not every bit of feedback requires action. Some feedback will be brilliant and its merits obvious, some will be hard to accept but warrants investigation, and some will not suit you.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Upward feedback is valuable.</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    I believe that feedback should be shared upward, despite the fact that it may seem uncomfortable. Leaders should strive be open to feedback, which helps to develop a resilient, connected, and compassionate organization.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Deliver feedback directly, and early.</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    Whether feedback is directed towards me, or from me to a member of my team, I believe in the power or direct and early communication.
                  </li>
                  <li>
                    If we can work through it, let's jointly come up with action steps for improvement.
                  </li>
                  <li>
                    If resolution is not possible, its best to be open and honest, and deliver feedback with kindness and grace.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Things I Could Do Without Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 underline">Things that I could do without</h3>
            
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Failing to follow through with communicated expectations.</li>
                <li>Micro-managing. Full stop.
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Trust is an important element in any professional environment. If you feel the need to constantly check-in on your direct reports, we are probably not a good fit.</li>
                    <li>As a leader, I aim to give my reports the tools for success and trust that they'll be able to deliver.</li>
                  </ul>
                </li>
                <li>Last minute changes to an established plan without an explanation.</li>
              </ul>
            </div>
          </section>

          {/* What I'm Working On Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 underline">What I'm working on</h3>
            
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Responding to calendar invites. Historically I have acted under the assumption that the other party knows I'll be joining (unless I explicitly decline). I am working to be more explicit in my actions and keep my calendar invites up to date.</li>
                <li>I have a lot of pride in my work and maintain high expectations in all that I do.</li>
                <li>Understanding that there are times when speed trumps structure and planning. I truly value a measured approach to building, however, there are sometimes circumstances in which this is not possible - and that is ok.</li>
              </ul>
            </div>
          </section>

          {/* Personal Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 underline">Personal</h3>
            
            <div className="space-y-4">
              <ul className="list-none space-y-2 text-gray-700">
                <li>👟 I am an avid runner and have completed the NYC Marathon more than once</li>
                <li>🛠 I love to tinker and hope to have my own workshop some day. A place where I can design and build</li>
                <li>🏄‍♂️ I prefer to be by the water, or even better, on it</li>
                <li>🇧🇷 Eu falo Português. Diga oi!</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}