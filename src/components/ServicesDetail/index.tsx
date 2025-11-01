import Image from 'next/image'
import Link from 'next/link'
import styles from './ServicesDetail.module.css'

const services = [
  {
    id: 'pipeline-inspection',
    badge: 'Pipeline Solutions',
    title: 'Pipeline Inspection',
    lead: 'Advanced inspection technologies ensuring the integrity and safety of your pipeline infrastructure.',
    image: '/images/Workers Extracting Pipeline Pig Using Chain Hoist.jpg',
    features: [
      {
        title: 'Pigging Services',
        description: 'Comprehensive cleaning, gauging, and batching operations for optimal pipeline performance'
      },
      {
        title: 'Intelligent Inspection (ILI)',
        description: 'Advanced inline inspection using magnetic flux leakage and ultrasonic technologies'
      },
      {
        title: 'Hydrotesting',
        description: 'Pressure testing services to verify pipeline integrity and compliance with safety standards'
      }
    ]
  },
  {
    id: 'hot-tapping',
    badge: 'Pipeline Solutions',
    title: 'Hot Tapping & Line Stop',
    lead: 'Safe and efficient pipeline connections and maintenance without system shutdown.',
    image: '/images/Workers Tightening Pipeline Flange Connection.jpg',
    features: [
      {
        title: 'Hot Tapping Operations',
        description: 'Connect new branches to existing pipelines under full operating pressure'
      },
      {
        title: 'Line Stopping Services',
        description: 'Temporary or permanent pipeline isolation for maintenance and modifications'
      },
      {
        title: 'Zero Downtime Solutions',
        description: 'Maintain continuous operations while performing critical pipeline work'
      }
    ]
  },
  {
    id: 'ndt',
    badge: 'Testing & Analysis',
    title: 'Non-Destructive Testing (NDT)',
    lead: 'Comprehensive testing services to detect defects without damaging your assets.',
    image: '/images/Workers Inspecting Pipeline Connection.jpg',
    features: [
      {
        title: 'Ultrasonic Testing (UT)',
        description: 'High-frequency sound wave inspection for internal defects and thickness measurement'
      },
      {
        title: 'Magnetic Particle / Dye Penetrant Testing (MT/PT)',
        description: 'Surface crack detection and discontinuity identification'
      },
      {
        title: 'Radiographic Testing (RT)',
        description: 'X-ray and gamma-ray inspection for internal structure analysis'
      },
      {
        title: 'Visual Inspection (VI)',
        description: 'Detailed visual examination with advanced optical equipment'
      }
    ]
  },
  {
    id: 'nitrogen-test',
    badge: 'Testing & Analysis',
    title: 'Nitrogen Leak Testing',
    lead: 'Reliable leak detection and pressure testing using nitrogen gas.',
    image: '/images/Worker Inspecting and Securing Hose Connection.jpg',
    features: [
      {
        title: 'Pressure Testing',
        description: 'Comprehensive pressure testing for new and existing systems'
      },
      {
        title: 'Leak Detection',
        description: 'Precise identification of leaks in pipelines and vessels'
      },
      {
        title: 'System Purging',
        description: 'Safe and effective removal of unwanted gases and contaminants'
      }
    ]
  },
  {
    id: 'flange-management',
    badge: 'Pipeline Solutions',
    title: 'Flange Management',
    lead: 'Professional flange installation, maintenance, and integrity management services.',
    image: '/images/Workers Operating Valves and Inspecting Pipeline System.jpg',
    features: [
      {
        title: 'Flange Installation',
        description: 'Expert installation ensuring proper alignment and sealing'
      },
      {
        title: 'Torque & Tension Services',
        description: 'Precise bolt tensioning and torque application for leak-free connections'
      },
      {
        title: 'Flange Facing & Repair',
        description: 'On-site machining and repair of damaged flange faces'
      }
    ]
  },
  {
    id: 'construction',
    badge: 'Construction',
    title: 'Construction & Welding Chamber',
    lead: 'Complete construction, fabrication, and welding services for industrial facilities.',
    image: '/images/Workers Performing Equipment Maintenance on Platform.jpg',
    features: [
      {
        title: 'Pipeline Construction',
        description: 'End-to-end pipeline construction from design to commissioning'
      },
      {
        title: 'Certified Welding',
        description: 'ASME and API certified welding services for critical applications'
      },
      {
        title: 'Fabrication Services',
        description: 'Custom fabrication of structural steel and piping components'
      },
      {
        title: 'Welding Chamber Operations',
        description: 'Specialized welding in controlled environments for quality assurance'
      }
    ]
  },
  {
    id: 'electrical',
    badge: 'Construction',
    title: 'Electrical & Instrument',
    lead: 'Comprehensive electrical and instrumentation services for oil and gas facilities.',
    image: '/images/Technician Inspecting Pipeline Tool on Offshore Platform.jpg',
    features: [
      {
        title: 'Electrical Installation',
        description: 'Complete electrical system design, installation, and commissioning'
      },
      {
        title: 'Instrumentation Services',
        description: 'Installation and calibration of process control instruments'
      },
      {
        title: 'Control Systems',
        description: 'SCADA, DCS, and PLC system implementation and maintenance'
      },
      {
        title: 'Maintenance & Troubleshooting',
        description: 'Preventive maintenance and rapid response troubleshooting services'
      }
    ]
  }
]

export default function ServicesDetail() {
  return (
    <section className={styles.servicesDetail}>
      <div className="container">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`${styles.serviceDetailCard} ${index % 2 === 1 ? styles.reverse : ''}`}
            id={service.id}
          >
            <div className={styles.serviceDetailMedia}>
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={450}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.serviceDetailContent}>
              <div className={styles.serviceBadge}>{service.badge}</div>
              <h2>{service.title}</h2>
              <p className={styles.lead}>{service.lead}</p>
              
              <div className={styles.serviceFeatures}>
                {service.features.map((feature, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <i className="fas fa-check-circle"></i>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="tel:+6202129237053" className="btn btn-primary">
                <i className="fas fa-phone"></i> Request a Quote
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
