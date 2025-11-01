import Image from 'next/image'
import styles from './PageHero.module.css'

interface PageHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      <div className={styles.heroBackground}>
        <Image
          src={backgroundImage}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.heroOverlay}></div>
      </div>
      <div className={styles.heroContent}>
        <div className="container">
          <h1 className={styles.pageTitle}>{title}</h1>
          <p className={styles.pageSubtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
