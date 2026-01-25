import React from 'react'
import Layout from '@/components/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Joseph Deferio',
  description: 'Software development projects by Joseph Deferio, including healthSystem and PsychPredict - data engineering and health informatics solutions.',
  keywords: ['joseph deferio', 'projects', 'software development', 'health informatics', 'data engineering', 'healthSystem', 'PsychPredict', 'python', 'postgresql'],
  openGraph: {
    title: 'Projects - Joseph Deferio',
    description: 'Software development projects by Joseph Deferio, including healthSystem and PsychPredict - data engineering and health informatics solutions.',
    type: 'website',
    url: 'https://jdeferio.github.io/projects',
  },
  twitter: {
    card: 'summary',
    title: 'Projects - Joseph Deferio',
    description: 'Software development projects by Joseph Deferio, including healthSystem and PsychPredict - data engineering and health informatics solutions.',
  },
  alternates: {
    canonical: 'https://jdeferio.github.io/projects',
  },
}

interface ProjectLink {
  name: string
  url: string
}

interface Project {
  name: string
  status: 'active' | 'hold' | 'completed'
  description: string
  inProgressFeatures?: ProjectLink[]
  testing?: string
  plannedFeatures?: string[]
  techStack: string[]
}

const projects: Project[] = [
  {
    name: 'healthSystem',
    status: 'hold',
    description: 'The purpose of this project is to design and build a lightweight and easily modifiable health data system. This design will be modular to promote customization, and avoid large monolithic repositories. Intended features are to include a database schema, ETL tools, DICOM imaging database, and automation services.',
    inProgressFeatures: [
      {
        name: 'healthdbModels',
        url: 'https://github.com/jdeferio/healthdbModels'
      },
      {
        name: 'healthdbETL',
        url: 'https://github.com/jdeferio/healthdbETL'
      }
    ],
    testing: 'healthdbModels and healthdbETL are being tested with synthetically generated patient data using the Synthea package.',
    plannedFeatures: [
      'Lightweight Orthanc Dicom Server for advanced image storage and sharing. This service will run in a Docker container and tie into the HealthDB model.',
      'Incorporation of HL7 and FHIR standards for interoperability and data exchange. (HL7apy, FHIRclient)',
      'Task automation using Apache Airflow'
    ],
    techStack: ['Python', 'PostgreSQL']
  },
  {
    name: 'PsychPredict',
    status: 'hold',
    description: 'This project was designed to predict incident psychiatric hospitalizations using data sourced from an electronic medical record at Weill Cornell Medicine. The project incorporates SQL queries, transformations, and common machine-learning algorithms.',
    techStack: ['Python', 'PostgreSQL']
  }
]

const StatusBadge = ({ status }: { status: Project['status'] }) => {
  const statusConfig = {
    active: { color: 'text-green-600', bg: 'bg-green-100', text: 'active' },
    hold: { color: 'text-yellow-600', bg: 'bg-yellow-100', text: 'hold' },
    completed: { color: 'text-blue-600', bg: 'bg-blue-100', text: 'completed' }
  }

  const config = statusConfig[status]

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
      {config.text}
    </span>
  )
}

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export default function ProjectsPage() {
  return (
    <Layout title="Projects">
      <div className="prose max-w-none text-gray-900 prose-a:text-blue-700 prose-a:underline prose-a:underline-offset-2 prose-a:font-medium">
        <h1>Projects</h1>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900 m-0">{project.name}</h3>
                <StatusBadge status={project.status} />
              </div>
              
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              {project.inProgressFeatures && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">In-progress Features:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {project.inProgressFeatures.map((feature, idx) => (
                      <li key={idx}>
                        <ExternalLink href={feature.url}>{feature.name}</ExternalLink>
                        {feature.name === 'healthdbModels' && ': Framework to construct a simple, customizable health database (HealthDB).'}
                        {feature.name === 'healthdbETL' && ': ETL and Database Interaction Tools for HealthDB'}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.testing && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Testing:</h4>
                  <p className="text-gray-700">
                    {project.testing.includes('Synthea') ? (
                      <>
                        healthdbModels and healthdbETL are being tested with synthetically generated patient data using the{' '}
                        <ExternalLink href="https://synthetichealth.github.io/synthea/#about-landing">Synthea</ExternalLink> package.
                      </>
                    ) : (
                      project.testing
                    )}
                  </p>
                </div>
              )}
              
              {project.plannedFeatures && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 italic">Planned Features:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {project.plannedFeatures.map((feature, idx) => (
                      <li key={idx} className="text-gray-700">
                        {idx === 0 && (
                          <>
                            Lightweight <ExternalLink href="https://www.orthanc-server.com">Orthanc Dicom Server</ExternalLink> for advanced image storage and sharing. This service will run in a <ExternalLink href="https://www.docker.com">Docker</ExternalLink> container and tie into the HealthDB model.
                          </>
                        )}
                        {idx === 1 && (
                          <>
                            Incorporation of <ExternalLink href="https://www.hl7.org/about/index.cfm?ref=common">HL7</ExternalLink> and <ExternalLink href="https://www.hl7.org/fhir/">FHIR</ExternalLink> standards for interoperability and data exchange. (<ExternalLink href="https://pypi.org/project/hl7apy/">HL7apy</ExternalLink>, <ExternalLink href="https://github.com/smart-on-fhir/client-py">FHIRclient</ExternalLink>)
                          </>
                        )}
                        {idx === 2 && (
                          <>
                            Task automation using <ExternalLink href="https://airflow.apache.org">Apache Airflow</ExternalLink>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="inline-flex items-center rounded-md border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 transition-colors hover:border-gray-300 hover:bg-gray-200">
                      <ExternalLink href={tech === 'Python' ? 'https://www.python.org' : 'https://www.postgresql.org'}>
                        {tech}
                      </ExternalLink>
                    </span>
                  ))}
                </div>
              </div>
              
              {project.name === 'PsychPredict' && (
                <div className="mt-4">
                  <p className="text-gray-700">
                    This project was designed to{' '}
                    <ExternalLink href="https://github.com/jdeferio/psych_predict">predict incident psychiatric hospitalizations</ExternalLink>{' '}
                    using data sourced from an electronic medical record at{' '}
                    <ExternalLink href="https://phs.weill.cornell.edu/">Weill Cornell Medicine</ExternalLink>.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
