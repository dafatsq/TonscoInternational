import styles from './WhyChoose.module.css'

const reasons = [
  {
    icon: 'fa-award',
    title: 'Certified Expertise',
    description: 'International certifications and accreditations ensuring compliance with global standards'
  },
  {
    icon: 'fa-tools',
    title: 'Advanced Equipment',
    description: 'State-of-the-art technology and equipment for superior service delivery'
  },
  {
    icon: 'fa-users-cog',
    title: 'Experienced Team',
    description: 'Highly trained professionals with decades of combined industry experience'
  },
  {
    icon: 'fa-shield-alt',
    title: 'Safety First',
    description: 'Uncompromising commitment to safety with zero incident track record'
  }
]

export default function WhyChoose() {
  return (
    <section className={styles.whyChoose}>
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">Why Choose Tonsco</span>
          <h2 className="section-title">Industry-Leading Excellence</h2>
        </div>
        
        <div className={styles.whyGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <i className={`fas ${reason.icon}`}></i>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
