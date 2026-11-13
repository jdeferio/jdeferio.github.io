import { absoluteUrl, PERSON_ID, SITE_URL, WEBSITE_ID } from './site'
import { ventures } from './ventures'

export const identityGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person', '@id': PERSON_ID,
      name: 'Joseph Deferio', url: absoluteUrl('/'), image: absoluteUrl('/images/jdeferio.jpg'),
      jobTitle: 'Lead Software Engineer',
      worksFor: { '@type': 'Organization', name: 'adMarketplace', url: 'https://www.admarketplace.com' },
      affiliation: ventures.map(({ url }) => ({ '@id': `${url}/#organization` })),
      alumniOf: ['SUNY Downstate Health Sciences University', 'Northeastern University', 'The George Washington University'].map((name) => ({ '@type': 'CollegeOrUniversity', name })),
      sameAs: ['https://github.com/jdeferio', 'https://linkedin.com/in/joseph-j-deferio'],
      knowsAbout: ['Software Engineering', 'Data Engineering', 'Semantic Search', 'Machine Learning Infrastructure', 'Health Informatics', 'Clinical Research'],
    },
    { '@type': 'WebSite', '@id': WEBSITE_ID, url: `${SITE_URL}/`, name: 'Joseph Deferio', publisher: { '@id': PERSON_ID }, inLanguage: 'en' },
    ...ventures.map(({ name, url, contribution }) => ({
      '@type': 'Organization', '@id': `${url}/#organization`, name, url,
      founder: { '@id': PERSON_ID }, description: contribution,
    })),
  ],
}

export function pageGraph(path: string, name: string, type = 'WebPage') {
  const url = absoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url, name,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    ...(type === 'ProfilePage' ? { mainEntity: { '@id': PERSON_ID } } : {}),
  }
}
