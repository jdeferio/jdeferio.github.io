'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { title: 'Overview', href: '/' },
  { title: 'Experience', href: '/experience' },
  { title: 'Research', href: '/research' },
  { title: 'Working with me', href: '/userguide' },
]

export default function Navigation() {
  const pathname = usePathname()
  return (
    <nav aria-label="Main navigation" className="site-nav">
      {items.map(({ title, href }) => (
        <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>
          {title}
        </Link>
      ))}
    </nav>
  )
}
