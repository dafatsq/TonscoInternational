import Link from 'next/link'
import Image from 'next/image'
import styles from './ServicesOverview.module.css'

const services = [
  {
    id: 'pipeline-inspection',
    title: 'Pipeline Inspection',
    description: 'Advanced pigging services, intelligent inspection, and comprehensive hydrotesting solutions',
    image: '/images/Workers Inspecting and Cleaning Pipeline Receiver.jpg',
  },
  {
    id: 'hot-tapping',
    title: 'Hot Tapping & Line Stop',
    description: 'Safe and efficient pipeline connections without shutting down operations',
    image: '/images/Workers Tightening Pipeline Flange Connection.jpg',
  },
  {
    id: 'ndt',
    title: 'Non-Destructive Testing',
    description: 'Comprehensive NDT services including UT, PT/MT, RT, and more',
    image: '/images/Workers Inspecting Pipeline Connection.jpg',
  },
  {
    id: 'construction',
    title: 'Construction & Welding',
    description: 'Expert construction, welding chamber, and fabrication services',
    image: '/images/Workers Performing Equipment Maintenance on Platform.jpg',
  },
  {
    id: 'nitrogen-testing',
    title: 'Nitrogen Leak Test',
    description: 'Safe and reliable pressure testing using nitrogen for leak detection',
    image: '/images/Workers Operating Valves and Inspecting Pipeline System.jpg',
  },
  {
    id: 'flange-management',
    title: 'Flange Management',
    description: 'Professional bolt tightening, torqueing, and hydraulic tensioning services',
    image: '/images/Worker Inspecting and Securing Hose Connection.jpg',
  },
  {
    id: 'electrical',
    title: 'Electrical & Instrument',
    description: 'Complete electrical installation, instrumentation, and calibration services',
    image: '/images/Technician Inspecting Pipeline Tool on Offshore Platform.jpg',
  },
]

export default function ServicesOverview() {
  return (
    <section className={styles.servicesOverview}>
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Comprehensive Service Solutions</h2>
          <p className="section-description">
            From pipeline inspection to construction and maintenance, we provide end-to-end solutions for your critical infrastructure needs
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={`/services#${service.id}`} className={styles.serviceLink}>
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-cta">
          <Link href="/services" className="btn btn-primary btn-lg">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
