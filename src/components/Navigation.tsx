'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sitePages } from '@/lib/site'

export default function Navigation() {
  const pathname = usePathname()
  return (
    <nav aria-label="Main navigation" className="site-nav">
      {sitePages.map(({ title, path: href }) => (
        <Link key={href} href={href} aria-current={pathname.replace(/\/$/, '') === href.replace(/\/$/, '') ? 'page' : undefined}>
          {title}
        </Link>
      ))}
    </nav>
  )
}
