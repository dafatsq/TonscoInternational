import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <Image
              src="/tonscologo/tonsco1.png"
              alt="Tonsco International"
              className={styles.footerLogo}
              width={150}
              height={50}
            />
            <p className={styles.footerDescription}>
              Leading provider of pipeline and integrity services for the oil and gas industry.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h3>Services</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/services#pipeline-inspection">Pipeline Inspection</Link>
              </li>
              <li>
                <Link href="/services#hot-tapping">Hot Tapping & Line Stop</Link>
              </li>
              <li>
                <Link href="/services#ndt">Non-Destructive Testing</Link>
              </li>
              <li>
                <Link href="/services#nitrogen-test">Nitrogen Leak Testing</Link>
              </li>
              <li>
                <Link href="/services#flange-management">Flange Management</Link>
              </li>
              <li>
                <Link href="/services#construction">Construction & Welding</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Company</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/#about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Contact Information</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Head Office</strong>
                  <p>
                    Jl. Karang Tengah Raya No.8J 7, RT.7/RW.6<br />
                    Lb. Bulus, Kec. Cilandak<br />
                    Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440
                  </p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-phone"></i>
                <div>
                  <p>+62 021 2923 7053</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <div>
                  <p>sales@tonscoindo.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 Tonsco International. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
