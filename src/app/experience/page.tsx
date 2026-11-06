import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import JsonLd from '@/components/JsonLd'
import { pageGraph } from '@/lib/structured-data'
import Ventures from '@/components/Ventures'
import { experience } from '@/lib/experience'
import styles from '../profile.module.css'

const description = 'Joseph Deferio’s experience in backend engineering, search, ML infrastructure, and informatics leadership.'

export const metadata: Metadata = {
  title: 'Experience',
  description,
  openGraph: {
    type: 'website',
    siteName: 'Joseph Deferio',
    locale: 'en_US',
    title: 'Experience | Joseph Deferio',
    description,
    url: '/experience/',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Joseph Deferio — Senior Software Engineer & Founder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Joseph Deferio',
    description,
    images: ['/opengraph-image'],
  },
  alternates: { canonical: '/experience/' },
}

export default function ExperiencePage() {
  return (
    <Layout>
      <JsonLd data={pageGraph('/experience/', 'Experience', 'ProfilePage')} />
      <div className={styles.profile}>
        <header className={styles.pageHeader}><p className={styles.eyebrow}>Career & leadership</p><h1>Experience</h1><p className={styles.summary}>Building data-intensive systems and the teams and practices behind them.</p></header>
        {experience.map((job) => (
          <section key={job.organization} className={styles.job}>
            <div><p className={styles.period}>{job.period}</p><h2>{job.organization}</h2></div>
            <div><h3>{job.role}</h3>{job.previousRole && <p className={styles.period}>{job.previousRole}</p>}<ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
          </section>
        ))}
        <section className={styles.section} aria-labelledby="founder-title"><p className={styles.eyebrow}>Entrepreneurship</p><h2 id="founder-title">Founder roles</h2><Ventures detailed />
        </section>
        <section className={styles.section} aria-labelledby="education-title"><p className={styles.eyebrow}>Education</p><h2 id="education-title">Health sciences & biology</h2><dl className={styles.education}><div><dt>SUNY Health Sciences Center at Brooklyn</dt><dd>M.P.H., Community Health Sciences · 2016</dd></div><div><dt>Northeastern University</dt><dd>Post-baccalaureate, Pre-medicine · 2011</dd></div><div><dt>The George Washington University</dt><dd>B.A., Biological Sciences · 2009</dd></div></dl></section>
      </div>
    </Layout>
  )
}
