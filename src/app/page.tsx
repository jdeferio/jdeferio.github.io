import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import JsonLd from '@/components/JsonLd'
import { pageGraph } from '@/lib/structured-data'
import Ventures from '@/components/Ventures'
import PersonalAside from '@/components/PersonalAside'
import styles from './profile.module.css'

const description = 'Senior Software Engineer at adMarketplace, co-founder of Caridi Concierge, and founder of Onça Labs. Backend systems, search, and ML infrastructure.'

export const metadata: Metadata = {
  title: { absolute: 'Joseph Deferio | Senior Software Engineer & Founder' },
  openGraph: { type: 'website', siteName: 'Joseph Deferio', locale: 'en_US', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Joseph Deferio — Senior Software Engineer & Founder' }], title: 'Joseph Deferio | Senior Software Engineer & Founder', description, url: '/' },
  description,
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph Deferio | Senior Software Engineer & Founder',
    description,
    images: ['/opengraph-image'],
  },
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <Layout>
      <JsonLd data={pageGraph('/', 'Joseph Deferio', 'ProfilePage')} />
      <div className={styles.profile}>
        <section className={styles.hero} aria-labelledby="profile-title">
          <p className={styles.eyebrow}>New York · Software engineering & leadership</p>
          <h1 id="profile-title">Joseph Deferio</h1>
          <p className={styles.headline}>Deep technical work.<br />Broad ownership.</p>
          <p className={styles.summary}>I build data-intensive backend systems, lead initiatives across teams, and mentor engineers. My work spans search, ML infrastructure, and low-latency serving platforms.</p>
          <p className={styles.current}>Senior Software Engineer at <a href="https://www.admarketplace.com">adMarketplace</a></p>
          <div className={styles.actions}><Link href="/experience/">Experience</Link><a href="mailto:j.deferio@gmail.com">Get in touch</a></div>
        </section>

        <section className={`${styles.section} ${styles.engineering}`} aria-labelledby="impact-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>Engineering at adMarketplace</p><h2 id="impact-title">Systems. Decisions. Outcomes.</h2></div>
          <div className={styles.impactGrid}>
            <article><p className={styles.metric}>100M+</p><h3>Documents in search</h3><p>Led the transition from lexical to semantic retrieval across a large document catalog.</p></article>
            <article><p className={styles.metric}>Weeks → days</p><h3>Experimentation cycles</h3><p>Architected an ad-serving experimentation platform supporting more than 30 experiments.</p></article>
            <article><p className={styles.metric}>6×</p><h3>Client conversion spend</h3><p>Increased client conversion spend through an earlier search redesign.</p></article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.founders}`} aria-labelledby="ventures-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>Alongside my engineering career</p><h2 id="ventures-title">Founder roles</h2></div>
          <Ventures />
          <p className={styles.ventureMore}><Link href="/experience/#founder-title">More about my work as a founder</Link></p>
        </section>

        <section className={`${styles.section} ${styles.background}`} aria-labelledby="background-title">
          <div><p className={styles.eyebrow}>A foundation in informatics</p><h2 id="background-title">Engineering informed by research and team leadership.</h2></div>
          <div><p>Before adMarketplace, I built data services at Mercury Healthcare, grew the Informatics team at Covera Health from one to five, and led clinical informatics projects at Weill Cornell Medicine.</p><p>That background shapes how I approach data integrity, privacy, and the decisions systems support.</p><Link href="/research/">Research & publications</Link></div>
        </section>

        <PersonalAside />

        <section className={styles.contact} aria-labelledby="contact-title"><p className={styles.eyebrow}>Connect</p><h2 id="contact-title">Let’s talk engineering.</h2><a href="mailto:j.deferio@gmail.com">j.deferio@gmail.com</a></section>
      </div>
    </Layout>
  )
}
