'use client'

import { useEffect } from 'react'
import { SITE_URL } from '@/lib/site'

type AnalyticsWindow = Window & { dataLayer?: unknown[] }

export default function Analytics({ containerId }: { containerId: string }) {

  useEffect(() => {
    const publicHost = new URL(SITE_URL).hostname
    if (!/^GTM-[A-Z0-9]+$/.test(containerId)) return
    if (![publicHost, `www.${publicHost}`].includes(window.location.hostname)) return
    if (document.getElementById('google-tag-manager')) return

    const analyticsWindow = window as AnalyticsWindow
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || []
    analyticsWindow.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

    const script = document.createElement('script')
    script.id = 'google-tag-manager'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`
    document.head.appendChild(script)
  }, [containerId])

  return null
}
