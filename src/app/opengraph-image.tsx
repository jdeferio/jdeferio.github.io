import { ImageResponse } from 'next/og'

export const alt = 'Joseph Deferio — Senior Software Engineer & Founder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', padding: '56px 64px', background: '#f7f8fa', color: '#172c42', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid #172c42', paddingBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 56, background: '#172c42', color: '#f7f8fa', fontSize: 28, fontWeight: 700, marginRight: 20 }}>JD</div>
        <div style={{ display: 'flex', fontSize: 22 }}>Software engineering & leadership</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 82, fontWeight: 700, letterSpacing: '-4px', marginBottom: 16 }}>Joseph Deferio</div>
        <div style={{ display: 'flex', fontSize: 30, color: '#254f89' }}>Senior Software Engineer at adMarketplace</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', background: '#e8eef6', padding: '24px 28px', fontSize: 24 }}>
        <div style={{ display: 'flex', marginBottom: 8 }}>Co-founder, Caridi Concierge · Founder, Onça Labs</div>
        <div style={{ display: 'flex', fontSize: 19, color: '#5f6b78' }}>josephdeferio.com</div>
      </div>
    </div>,
    size,
  )
}
