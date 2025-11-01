import Link from 'next/link'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>Need a Custom Solution?</h2>
          <p>Our team is ready to discuss your specific requirements and provide tailored solutions</p>
          <div className={styles.ctaActions}>
            <a href="tel:+6202129237053" className="btn btn-cta-single">
              <i className="fas fa-phone"></i> Call +62 021 2923 7053
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
