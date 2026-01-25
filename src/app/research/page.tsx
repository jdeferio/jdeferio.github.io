import React from 'react'
import Layout from '@/components/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research - Joseph Deferio',
  description: 'Research publications and presentations by Joseph Deferio in mental health informatics, data science, and clinical research. Published in JAMIA, BMC Nephrology, and other journals.',
  keywords: ['joseph deferio', 'research', 'publications', 'mental health', 'informatics', 'data science', 'clinical research', 'JAMIA', 'BMC Nephrology', 'depression', 'kidney disease'],
  openGraph: {
    title: 'Research - Joseph Deferio',
    description: 'Research publications and presentations by Joseph Deferio in mental health informatics, data science, and clinical research. Published in JAMIA, BMC Nephrology, and other journals.',
    type: 'website',
    url: 'https://jdeferio.github.io/research',
  },
  twitter: {
    card: 'summary',
    title: 'Research - Joseph Deferio',
    description: 'Research publications and presentations by Joseph Deferio in mental health informatics, data science, and clinical research.',
  },
  alternates: {
    canonical: 'https://jdeferio.github.io/research',
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

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

const PublicationItem = ({ publication }: { publication: Publication }) => (
  <div className="mb-6 pb-4 border-b border-gray-100 last:border-b-0">
    <h3 className="text-lg font-medium text-gray-900 mb-2 leading-tight">
      <em>{publication.title}</em>
    </h3>
    <div className="flex flex-wrap items-center gap-2 mb-2">
      <ExternalLink href={publication.pdfUrl}>
        paper
      </ExternalLink>
    </div>
    <p className="text-gray-700">
      <strong>{publication.journal}</strong>, {publication.date}.
    </p>
  </div>
)

const PresentationItem = ({ presentation }: { presentation: Presentation }) => (
  <div className="mb-6 pb-4 border-b border-gray-100 last:border-b-0">
    <h3 className="text-lg font-medium text-gray-900 mb-2 leading-tight">
      <em>{presentation.title}</em>
    </h3>
    <div className="flex flex-wrap items-center gap-2 mb-2">
      {presentation.links.abstract && (
        <ExternalLink href={presentation.links.abstract}>
          abstract
        </ExternalLink>
      )}
      {presentation.links.website && (
        <ExternalLink href={presentation.links.website}>
          website
        </ExternalLink>
      )}
      {presentation.links.video && (
        <ExternalLink href={presentation.links.video}>
          video
        </ExternalLink>
      )}
      {presentation.links.slides && (
        <ExternalLink href={presentation.links.slides}>
          slides
        </ExternalLink>
      )}
    </div>
    <p className="text-gray-700">
      <strong>{presentation.venue}</strong>
      {presentation.location && `, ${presentation.location}`}.
    </p>
  </div>
)

export default function ResearchPage() {
  return (
    <Layout title="Research">
      <div className="prose max-w-none text-gray-900 prose-a:text-blue-700 prose-a:underline prose-a:underline-offset-2 prose-a:font-medium">
        <h1>Research</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Publications</h2>
          <div className="space-y-4">
            {publications.map((publication, index) => (
              <PublicationItem key={index} publication={publication} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Presentations, Posters, and Abstracts</h2>
          <div className="space-y-4">
            {presentations.map((presentation, index) => (
              <PresentationItem key={index} presentation={presentation} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
