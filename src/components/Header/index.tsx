'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/tonscologo/tonsco1.png"
              alt="Tonsco International"
              width={150}
              height={100}
              priority
            />
          </Link>
        </div>

        <nav className={`${styles.mainNav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                href="/" 
                className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`} 
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
              <button
                className={`${styles.navLink} ${pathname === '/services' ? styles.active : ''}`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <i className="fas fa-chevron-down"></i>
              </button>
              <div className={`${styles.megaMenu} ${isServicesOpen ? styles.open : ''}`}>
                <div className={styles.megaMenuContent}>
                  <div className={styles.megaMenuSection}>
                    <h3>Pipeline Solutions</h3>
                    <ul>
                      <li>
                        <Link href="/services#pipeline-inspection" onClick={closeMenu}>
                          Pipeline Inspection
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#hot-tapping" onClick={closeMenu}>
                          Hot Tapping & Line Stop
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#flange-management" onClick={closeMenu}>
                          Flange Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.megaMenuSection}>
                    <h3>Testing & Analysis</h3>
                    <ul>
                      <li>
                        <Link href="/services#ndt" onClick={closeMenu}>
                          Non-Destructive Testing (NDT)
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#nitrogen-test" onClick={closeMenu}>
                          Nitrogen Leak Testing
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#integrity" onClick={closeMenu}>
                          Integrity Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.megaMenuSection}>
                    <h3>Construction</h3>
                    <ul>
                      <li>
                        <Link href="/services#construction" onClick={closeMenu}>
                          Construction & Welding
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#electrical" onClick={closeMenu}>
                          Electrical & Instrument
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#maintenance" onClick={closeMenu}>
                          Maintenance Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.megaMenuFeatured}>
                    <div className={styles.featuredCard}>
                      <Image
                        src="/images/Team Briefing and Equipment Inspection.jpg"
                        alt="Pipeline Services"
                        width={350}
                        height={200}
                      />
                      <div className={styles.featuredContent}>
                        <h4>Comprehensive Pipeline Solutions</h4>
                        <p>Industry-leading expertise in pipeline integrity and maintenance</p>
                        <Link href="/services" className="btn-link" onClick={closeMenu}>
                          Explore Services <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link 
                href="/#about" 
                className={`${styles.navLink} ${pathname === '/#about' ? styles.active : ''}`} 
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
          </ul>

          <div className={styles.navCta}>
            <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>
              <i className="fas fa-phone"></i> Contact Us
            </Link>
          </div>
        </nav>

        <button
          className={`${styles.navToggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
