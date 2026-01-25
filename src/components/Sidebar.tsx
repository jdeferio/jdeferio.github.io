'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationItem {
  title: string
  href: string
}

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const navigationItems: NavigationItem[] = [
  { title: 'Bio', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Research', href: '/research' },
  { title: 'User Guide', href: '/userguide' },
]

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Sidebar overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-30 h-full w-64 transform bg-gray-900 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="p-6">
            <h2 className="text-xl font-semibold">Joseph Deferio</h2>
            <p className="mt-2 text-sm text-gray-300">
              Data Engineer & Researcher
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 ${
                        isActive
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      onClick={() => {
                        // Close sidebar on mobile when navigating
                        if (window.innerWidth < 1024) {
                          onToggle()
                        }
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}