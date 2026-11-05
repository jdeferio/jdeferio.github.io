import React from 'react'
import Layout from '@/components/Layout'
import { Metadata } from 'next'
import profileStyles from '../profile.module.css'
import styles from './research.module.css'
import JsonLd from '@/components/JsonLd'
import { pageGraph } from '@/lib/structured-data'
import { absoluteUrl, PERSON_ID } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research publications and presentations by Joseph Deferio in mental health informatics, data science, and clinical research. Published in JAMIA, BMC Nephrology, and other journals.',
  keywords: ['joseph deferio', 'research', 'publications', 'mental health', 'informatics', 'data science', 'clinical research', 'JAMIA', 'BMC Nephrology', 'depression', 'kidney disease'],
  openGraph: { images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Joseph Deferio — Senior Software Engineer & Founder' }],
    title: 'Research',
    description: 'Research publications and presentations by Joseph Deferio in mental health informatics, data science, and clinical research. Published in JAMIA, BMC Nephrology, and other journals.',
    type: 'website',
    url: '/research/',
  },
  twitter: { images: ['/opengraph-image'],
    card: 'summary_large_image',
    title: 'Research',
    description: 'Research publications and presentations by Joseph Deferio in mental health informatics, data science, and clinical research.',
  },
  alternates: {
    canonical: '/research/',
  },
}

interface Publication {
  title: string
  journal: string
  date: string
  pdfUrl: string
}

interface Presentation {
  title: string
  venue: string
  date: string
  location: string
  links: {
    abstract?: string
    website?: string
    video?: string
    slides?: string
  }
}

const publications: Publication[] = [
  {
    title: 'Social Determinants of Health in Mental Health Care and Research: A Case for Greater Inclusion',
    journal: 'Journal of American Medical Informatics Association (JAMIA)',
    date: 'April 2019',
    pdfUrl: '/files/ocz049.pdf'
  },
  {
    title: 'Ascertaining depression severity by extracting patient health questionnaire-9 (PHQ-9) scores from clinical notes',
    journal: 'AMIA Conference Paper',
    date: 'December 2018',
    pdfUrl: '/files/2976699.pdf'
  },
  {
    title: 'Association Networks in a Matched Case-Control Design – Co-occurrence Patterns of Preexisting Chronic Medical Conditions in Patients with Major Depression versus their Matched Controls',
    journal: 'Journal of Biomedical Informatics',
    date: 'September 2018',
    pdfUrl: '/files/1-s2.0-S1532046418301941-main.pdf'
  },
  {
    title: 'Using EHRs to characterize prescription patterns: focus on antidepressants in non-psychiatric outpatient settings',
    journal: 'JAMIA Open',
    date: 'August 2018',
    pdfUrl: '/files/ooy037.pdf'
  },
  {
    title: 'Understanding the research landscape of major depressive disorder via literature mining: an entity-level analysis of PubMed data from 1948-2017',
    journal: 'JAMIA Open',
    date: 'April 2018',
    pdfUrl: '/files/ooy001.pdf'
  },
  {
    title: 'Risk Factors for depression among civilians after the 9/11 World Trade Center terrorist attacks: a systematic review and meta-analysis',
    journal: 'PLOS Currents Disasters',
    date: 'March 2018',
    pdfUrl: '/files/Risk Factors for Depression Among Civilians After the 9_11 World Trade Center Terrorist Attacks_ A Systematic Review and Meta-Analysis – PLOS Currents Disasters.pdf'
  },
  {
    title: 'Association of restless legs syndrome and mortality in end-stage renal disease: an analysis of the United States Renal Data System (USRDS)',
    journal: 'BMC Nephrology',
    date: 'July 2017',
    pdfUrl: '/files/s12882-017-0660-0.pdf'
  },
  {
    title: 'Cross-sectional examination of metabolites and metabolic phenotypes in uremia',
    journal: 'BMC Nephrology',
    date: 'July 2015',
    pdfUrl: '/files/12882_2015_Article_100.pdf'
  },
  {
    title: 'Prognosis of acute kidney injury and hepatorenal syndrome in patients with cirrhosis: a prospective cohort study',
    journal: 'International Journal of Nephrology',
    date: 'July 2015',
    pdfUrl: '/files/IJN2015-108139.pdf'
  },
  {
    title: 'Brief communication: The effects of parenteral amino acid therapy on protein carbamylation in maintenance hemodialysis patients',
    journal: 'Journal of Renal Nutrition',
    date: 'March 2015',
    pdfUrl: '/files/611.full.pdf'
  },
  {
    title: 'Nutritional vitamin D supplementation in dialysis: A randomized trial',
    journal: 'Clinical Journal of the American Society of Nephrology',
    date: 'March 2015',
    pdfUrl: '/files/611.full.pdf'
  },
  {
    title: 'A plasma long-chain acylcarnitine predicts cardiovascular mortality in incident dialysis patients',
    journal: 'Journal of the American Heart Association',
    date: 'December 2013',
    pdfUrl: '/files/jah3-2-e000542.pdf'
  },
  {
    title: 'Carbamylation of serum albumin and erythropoietin resistance in end stage kidney disease',
    journal: 'Clinical Journal of the American Society of Nephrology',
    date: 'August 2013',
    pdfUrl: '/files/1927.full.pdf'
  }
]

const presentations: Presentation[] = [
  {
    title: 'Using electronic health records and machine learning to predict incident psychiatric hospitalization',
    venue: 'Biological Psychiatry, Symposium, V87I9 Supplement',
    date: 'May 2020',
    location: '',
    links: {
      abstract: '/files/1-s2.0-S0006322320303085.pdf',
      website: 'https://www.biologicalpsychiatryjournal.com/article/S0006-3223(20)30308-5/abstract'
    }
  },
  {
    title: 'Collecting individual level social determinants of health to inform patient-centered outcomes research in mental health',
    venue: '2019 Annual Symposium, American Medical Informatics Association',
    date: '2019',
    location: 'Washington DC',
    links: {
      abstract: '/files/Collecting Individual-Level Social Determinants of Health to Inform Patient-Centered Research in Mental Health.pdf',
      website: 'https://www.amia.org/amia2019/oral-presentations'
    }
  },
  {
    title: 'Mining sequential patterns of antidepressant drug changes from EHR data',
    venue: '2018 Annual Summit on Translational Bioinformatics, American Medical Informatics Association',
    date: '2018',
    location: 'San Francisco, CA',
    links: {
      website: 'https://www.amia.org/2018-informatics-summit'
    }
  },
  {
    title: 'Matched pair network analysis of chronic condition predisposing to depression',
    venue: '2018 Annual Summit on Clinical Research Informatics, American Medical Informatics Association',
    date: '2018',
    location: 'San Francisco, CA',
    links: {
      website: 'https://www.amia.org/2018-informatics-summit'
    }
  },
  {
    title: 'Using EHRs to characterize prescription patterns: focus on antidepressants in non-psychiatric outpatient settings',
    venue: '2018 Mental Health Services Research, National Institutes of Mental Health',
    date: '2018',
    location: 'Rockville, MD',
    links: {
      website: 'https://www.nimh.nih.gov/news/events/2018/nimh-mental-health-services-research-conference-mhsr-2018.shtml',
      video: 'https://www.youtube.com/watch?v=3joK-Ocvm7c&feature=youtu.be&t=3670',
      slides: '/files/MHSR18_Deferio.pdf'
    }
  },
  {
    title: 'Methods for integrating EHRs, social determinants of health, and built environment data for patient-centered research',
    venue: '2018 Annual Symposium, American Medical Informatics Association',
    date: '2018',
    location: 'San Francisco, CA',
    links: {
      website: 'https://symposium2018.zerista.com/event/member/507839',
      video: 'https://www.youtube.com/watch?v=2MiFB8iC8ZQ&feature=youtu.be',
      slides: '/files/AMIA18_Deferio2.pdf'
    }
  },
  {
    title: 'Assessing gender differences in mental health utilization of patients diagnosed with depression',
    venue: '2018 Annual Symposium, American Medical Informatics Association',
    date: '2018',
    location: 'San Francisco, CA',
    links: {
      website: 'https://symposium2018.zerista.com/event/member/509475'
    }
  },
  {
    title: 'Improving risk prediction for depression via elastic net regression-results from Korean National Health Insurance Services data',
    venue: '2016 Annual Symposium, American Medical Informatics Association',
    date: '2016',
    location: 'Chicago, IL',
    links: {
      website: 'https://www.amia.org/amia2016'
    }
  },
  {
    title: 'Acute kidney injury and mortality in cirrhosis–is MELD score enough?',
    venue: '2014 Kidney Week, American Society of Nephrology',
    date: '2014',
    location: 'Philadelphia, PA',
    links: {
      website: 'https://www.asn-online.org/education/kidneyweek/2014/'
    }
  },
  {
    title: 'Predictors of circulating cathelicidin during acute infection in hemodialysis patients',
    venue: '2014 Kidney Week, American Society of Nephrology',
    date: '2014',
    location: 'Philadelphia, PA',
    links: {
      website: 'https://www.asn-online.org/education/kidneyweek/2014/'
    }
  },
  {
    title: 'Cross-sectional examination of metabolites and metabolic phenotypes in uremia',
    venue: '2014 Kidney Week, American Society of Nephrology',
    date: '2014',
    location: 'Philadelphia, PA',
    links: {
      website: 'https://www.asn-online.org/education/kidneyweek/2014/'
    }
  },
  {
    title: 'A plasma long-chain acylcarnitine predicts cardiovascular mortality in incident dialysis patients',
    venue: '2013 Kidney Week, American Society of Nephrology',
    date: '2013',
    location: 'Atlanta, GA',
    links: {
      website: 'https://www.asn-online.org/education/kidneyweek/2013/'
    }
  },
  {
    title: 'The effects of parenteral amino acid therapy on protein carbamylation in end-stage kidney disease',
    venue: '2013 Kidney Week, American Society of Nephrology',
    date: '2013',
    location: 'Atlanta, GA',
    links: {
      website: 'https://www.asn-online.org/education/kidneyweek/2013/'
    }
  },
  {
    title: 'The DIVINE trial: dialysis infection and vitamin d in New England',
    venue: '2013 Kidney Week, American Society of Nephrology',
    date: '2013',
    location: 'Atlanta, GA',
    links: {
      website: 'https://www.asn-online.org/education/kidneyweek/2013/'
    }
  },
  {
    title: 'Protein carbamylation, erythropoietin resistance, and mortality in end-stage kidney disease',
    venue: '2012 Kidney Week, American Society of Nephrology',
    date: '2012',
    location: 'San Diego, CA',
    links: {
      website: 'https://www.asn-online.org/education/kidneyweek/2012/'
    }
  }
]

const ResearchLink = ({ href, label, title }: { href: string; label: string; title: string }) => (
  <a href={href} aria-label={`${label}: ${title}`}>
    {label}
  </a>
)

const PublicationItem = ({ publication, id }: { publication: Publication; id: string }) => (
  <li id={id} className={styles.entry}>
    <article>
      <p className={styles.date}>{publication.date}</p>
      <h4>{publication.title}</h4>
      <p className={styles.venue}>{publication.journal}</p>
      <div className={styles.links}><ResearchLink href={publication.pdfUrl} label="Read paper (PDF)" title={publication.title} /></div>
    </article>
  </li>
)

const PresentationItem = ({ presentation, id }: { presentation: Presentation; id: string }) => (
  <li id={id} className={styles.entry}>
    <article>
      <p className={styles.date}>{presentation.date}</p>
      <h4>{presentation.title}</h4>
      <p className={styles.venue}>{presentation.venue}{presentation.location && ` · ${presentation.location}`}</p>
      <div className={styles.links}>
        {presentation.links.abstract && <ResearchLink href={presentation.links.abstract} label="Abstract (PDF)" title={presentation.title} />}
        {presentation.links.website && <ResearchLink href={presentation.links.website} label="Event / journal" title={presentation.title} />}
        {presentation.links.video && <ResearchLink href={presentation.links.video} label="Watch recording" title={presentation.title} />}
        {presentation.links.slides && <ResearchLink href={presentation.links.slides} label="View slides" title={presentation.title} />}
      </div>
    </article>
  </li>
)

function groupByYear<T extends { date: string }>(items: T[]) {
  const years = [...new Set(items.map((item) => item.date.slice(-4)))].sort((a, b) => Number(b) - Number(a))
  return years.map((year) => ({ year, items: items.filter((item) => item.date.endsWith(year)) }))
}

const researchGraph = {
  ...pageGraph('/research/', 'Research & publications', 'CollectionPage'),
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: publications.length + presentations.length,
    itemListElement: [
      ...publications.map((publication, index) => ({
        '@type': 'ListItem', position: index + 1,
        item: {
          '@type': 'ScholarlyArticle',
          '@id': absoluteUrl(`/research/#publication-${index + 1}`),
          name: publication.title,
          author: { '@id': PERSON_ID },
          isPartOf: { '@type': 'Periodical', name: publication.journal },
          encoding: { '@type': 'MediaObject', contentUrl: absoluteUrl(publication.pdfUrl), encodingFormat: 'application/pdf' },
        },
      })),
      ...presentations.map((presentation, index) => ({
        '@type': 'ListItem', position: publications.length + index + 1,
        item: {
          '@type': 'CreativeWork',
          '@id': absoluteUrl(`/research/#presentation-${index + 1}`),
          name: presentation.title,
          author: { '@id': PERSON_ID },
          description: [presentation.venue, presentation.date, presentation.location].filter(Boolean).join(' · '),
          ...(presentation.links.abstract ? { encoding: { '@type': 'MediaObject', contentUrl: absoluteUrl(presentation.links.abstract), encodingFormat: 'application/pdf' } } : {}),
        },
      })),
    ],
  },
}

export default function ResearchPage() {
  return (
    <Layout title="Research">
      <JsonLd data={researchGraph} />
      <div className={styles.research}>
        <header className={profileStyles.pageHeader}>
          <p className={profileStyles.eyebrow}>Research archive · 2012–2020</p>
          <h1>Research & publications</h1>
          <p className={profileStyles.summary}>Published work in health informatics, mental health, and clinical research.</p>
          <nav className={styles.jumpLinks} aria-label="Research sections"><a href="#publications">Publications <span>{publications.length}</span></a><a href="#presentations">Presentations & abstracts <span>{presentations.length}</span></a></nav>
        </header>
        <section id="publications" className={styles.collection} aria-labelledby="publications-title">
          <div className={styles.collectionHeading}><h2 id="publications-title">Publications</h2><p>{publications.length} papers · 2013–2019</p></div>
          {groupByYear(publications).map(({ year, items }) => (
            <section key={year} className={styles.yearGroup} aria-labelledby={`papers-${year}`}>
              <h3 id={`papers-${year}`}>{year}</h3>
              <ul>{items.map((publication) => <PublicationItem key={publication.title} publication={publication} id={`publication-${publications.indexOf(publication) + 1}`} />)}</ul>
            </section>
          ))}
        </section>
        <section id="presentations" className={styles.collection} aria-labelledby="presentations-title">
          <div className={styles.collectionHeading}><h2 id="presentations-title">Presentations & abstracts</h2><p>Conference papers, posters, and talks · 2012–2020</p></div>
          {groupByYear(presentations).map(({ year, items }) => (
            <section key={year} className={styles.yearGroup} aria-labelledby={`talks-${year}`}>
              <h3 id={`talks-${year}`}>{year}</h3>
              <ul>{items.map((presentation) => <PresentationItem key={presentation.title} presentation={presentation} id={`presentation-${presentations.indexOf(presentation) + 1}`} />)}</ul>
            </section>
          ))}
        </section>
      </div>
    </Layout>
  )
}
