import { ventures } from '@/lib/ventures'
import styles from '@/app/profile.module.css'

export default function Ventures({ detailed = false }: { detailed?: boolean }) {
  return ventures.map((venture) => (
    <article key={venture.url} className={styles.venture}>
      <div>
        <h3><a href={venture.url}>{venture.name}</a></h3>
        <p className={styles.ventureRole}>{venture.role}</p>
        <p className={styles.ventureContribution}>{venture.contribution}</p>
        {detailed && venture.details.map((detail) => (
          <p key={detail} className={styles.ventureContribution}>
            {(() => {
              const product = venture.products.find(({ name }) => detail.startsWith(name))
              return product ? <><a href={product.url}>{product.name}</a>{detail.slice(product.name.length)}</> : detail
            })()}
          </p>
        ))}
      </div>
      <a className={styles.ventureDomain} href={venture.url}>{venture.domain} <span aria-hidden="true">↗</span></a>
    </article>
  ))
}
