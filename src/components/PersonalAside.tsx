'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/profile.module.css'

export default function PersonalAside() {
  const [greeting, setGreeting] = useState(false)

  return (
    <aside className={styles.personal} aria-labelledby="personal-title">
      <div>
        <p className={styles.eyebrow} id="personal-title">Away from the keyboard</p>
        <p>Being a dad, running, and getting back to Brazil with family every year.</p>
        <Link href="/userguide/#outside-work">A little more about me <span aria-hidden="true">↗</span></Link>
      </div>
      <div className={styles.capybaraCorner}>
        <p id="capybara-greeting" className={styles.capybaraGreeting} aria-live="polite">
          {greeting && <span lang="pt-BR">Oi! Tudo bem?</span>}
        </p>
        <button
          type="button"
          className={styles.capybara}
          aria-label={greeting ? 'Say goodbye to the capybara' : 'Say hello to the capybara'}
          aria-pressed={greeting}
          aria-describedby={greeting ? 'capybara-greeting' : undefined}
          onClick={() => setGreeting(!greeting)}
        >
          <Image src="/images/capybara.svg" width={112} height={112} alt="" unoptimized />
        </button>
      </div>
    </aside>
  )
}
