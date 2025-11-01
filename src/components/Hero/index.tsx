'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src="/images/Team Conducting Field Maintenance and Inspection Work.png"
          alt="Offshore Pipeline Services"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.heroOverlay}></div>
      </div>
      <div className={styles.heroContent}>
        <div className="container">
          <div className={styles.heroLogo}>
            <Image
              src="/tonscologo/tonsco1.png"
              alt="Tonsco International"
              width={180}
              height={180}
              className={styles.logoImage}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <h1 className={`${styles.heroTitle} animate-fade-in`}>
            Pipeline & Integrity Services Excellence
          </h1>
          <p className={`${styles.heroSubtitle} animate-fade-in-delay`}>
            Delivering world-class solutions for the oil and gas industry across Indonesia and beyond
          </p>
          <div className={`${styles.heroActions} animate-fade-in-delay-2`}>
            <Link href="/services" className="btn btn-primary btn-lg">
              Our Services
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroScroll}>
        <a href="#about" className={styles.scrollIndicator}>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  )
}
