import Link from 'next/link'
import Navigation from './Navigation'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <Link className="site-name" href="/">Joseph Deferio<span>Software engineering & leadership</span></Link>
        <Navigation />
      </header>
      <main id="main-content" className="site-main">{children}</main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Joseph Deferio</span>
        <div><a href="https://github.com/jdeferio">GitHub</a><a href="https://linkedin.com/in/joseph-j-deferio">LinkedIn</a></div>
      </footer>
    </div>
  )
}
