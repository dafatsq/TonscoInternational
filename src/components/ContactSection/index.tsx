import styles from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.contactFormWrapper}>
            <div className="section-header">
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title">Contact Us by Phone</h2>
              <p>Call us directly to discuss your pipeline and integrity service needs. Our team is ready to assist you.</p>
            </div>
            
            <div className={styles.whatsappContact}>
              <div className={styles.whatsappIcon}>
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us Now</h3>
              <p>Speak directly with our team</p>
              <a href="tel:+6202129237053" className="btn btn-primary btn-lg">
                <i className="fas fa-phone"></i> +62 021 2923 7053
              </a>
            </div>
            
            <div className={styles.contactAlternatives}>
              <p><strong>Alternative contact method:</strong></p>
              <p>Email us at <a href="mailto:sales@tonscoindo.com">sales@tonscoindo.com</a></p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className={styles.contactInfoWrapper}>
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Head Office</h3>
              <p>
                Jl. Karang Tengah Raya No.8J 7, RT.7/RW.6<br />
                Lb. Bulus, Kec. Cilandak<br />
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440<br />
                Indonesia
              </p>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>
                <i className="fas fa-warehouse"></i>
              </div>
              <h3>Workshop</h3>
              <p>
                Jl. Raya Jatisari No. 128<br />
                Jatisari, Jatiasih<br />
                Bekasi 17426<br />
                Indonesia
              </p>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>
                <i className="fas fa-phone"></i>
              </div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+6202129237053">+62 021 2923 7053</a>
              </p>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>
                <a href="mailto:sales@tonscoindo.com">sales@tonscoindo.com</a>
              </p>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <h3>Business Hours</h3>
              <p>
                Monday - Friday: 08:00 - 17:00<br />
                Saturday: 08:00 - 12:00<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
