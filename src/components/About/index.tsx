import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">Leading Provider of Pipeline Integrity Solutions</h2>
        </div>
        
        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            <p className={styles.leadText}>
              Tonsco International is a premier provider of comprehensive pipeline and integrity services for the oil and gas industry.
            </p>
            
            <p>
              With years of experience and a commitment to excellence, we deliver innovative solutions that ensure the safety, reliability, and efficiency of critical infrastructure across Indonesia and the region.
            </p>
            
            <p>
              Our team of highly skilled professionals combines technical expertise with industry-leading technology to provide services that meet the most demanding requirements of our clients.
            </p>
            
            <div className={styles.aboutStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>20+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>200+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLabel}>Clients Served</div>
              </div>
            </div>
          </div>
          
          <div className={styles.aboutFeatures}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Safety First</h3>
              <p>Uncompromising commitment to safety standards and best practices in every project</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Certified Excellence</h3>
              <p>Industry certifications and accreditations ensuring quality and compliance</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Advanced Technology</h3>
              <p>State-of-the-art equipment and innovative methodologies for superior results</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Team</h3>
              <p>Highly trained professionals with extensive industry experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
