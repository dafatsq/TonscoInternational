import styles from './MapSection.module.css'

export default function MapSection() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.7135102888852!2d106.78162320925881!3d-6.302034309195732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee2fc133435f%3A0x6f4b9777b36c6c45!2sTonsco%20International.%20PT!5e0!3m2!1sen!2sid!4v1761898486831!5m2!1sen!2sid"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}
