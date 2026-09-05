import type { ElementType } from 'react'
import type { Partner } from '../types'
import styles from './PartnerStrip.module.css'

export function PartnerStrip({ partners }: { partners: Partner[] }) {
  return (
    <div className={styles.grid}>
      {partners.map((partner) => {
        const Tag: ElementType = partner.url ? 'a' : 'div'
        const linkProps = partner.url ? { href: partner.url, target: '_blank', rel: 'noreferrer' } : {}

        return (
          <Tag key={partner.id} className={styles.row} {...linkProps}>
            <span className={styles.logoBox}>
              {partner.logo ? (
                <img src={partner.logo} alt="" loading="lazy" className={styles.logoImg} />
              ) : (
                <span className={styles.placeholder} />
              )}
            </span>
            <span className={styles.name}>{partner.name}</span>
          </Tag>
        )
      })}
    </div>
  )
}
