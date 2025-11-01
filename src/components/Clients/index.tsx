'use client'

import { useRef, useEffect, useState } from 'react'
import styles from './Clients.module.css'

const clientLogos = [
  'pertaminaphe.png',
  'Petronas.png',
  'Medco.png',
  'total.png',
  'chevron.png',
  'talismanenergy.png',
  'premiereoil.png',
]

export default function Clients() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const marqueeContentRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollTimeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const marquee = marqueeRef.current
    const content = marqueeContentRef.current
    if (!marquee || !content) return

    // Pause animation on interaction
    const pauseAnimation = () => {
      setIsPaused(true)
      if (content) {
        content.style.animationPlayState = 'paused'
      }
    }

    // Resume animation after delay
    const resumeAnimation = () => {
      clearTimeout(autoScrollTimeout.current)
      autoScrollTimeout.current = setTimeout(() => {
        setIsPaused(false)
        if (content) {
          content.style.animationPlayState = 'running'
        }
      }, 2000) // Resume after 2 seconds of no interaction
    }

    // Mouse events
    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true)
      setStartX(e.pageX - marquee.offsetLeft)
      setScrollLeft(marquee.scrollLeft)
      pauseAnimation()
    }

    const handleMouseLeave = () => {
      setIsDragging(false)
      resumeAnimation()
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      resumeAnimation()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - marquee.offsetLeft
      const walk = (x - startX) * 2 // Scroll speed multiplier
      marquee.scrollLeft = scrollLeft - walk
    }

    // Touch events
    const handleTouchStart = (e: TouchEvent) => {
      setIsDragging(true)
      setStartX(e.touches[0].pageX - marquee.offsetLeft)
      setScrollLeft(marquee.scrollLeft)
      pauseAnimation()
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
      resumeAnimation()
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      const x = e.touches[0].pageX - marquee.offsetLeft
      const walk = (x - startX) * 2
      marquee.scrollLeft = scrollLeft - walk
    }

    // Infinite scroll loop
    const handleScroll = () => {
      const maxScroll = content.scrollWidth / 2
      
      if (marquee.scrollLeft >= maxScroll) {
        marquee.scrollLeft = 0
      } else if (marquee.scrollLeft <= 0) {
        marquee.scrollLeft = maxScroll
      }
    }

    // Hover pause
    const handleMouseEnter = () => {
      pauseAnimation()
    }

    const handleMouseLeaveHover = () => {
      resumeAnimation()
    }

    // Add event listeners
    marquee.addEventListener('mousedown', handleMouseDown)
    marquee.addEventListener('mouseleave', handleMouseLeave)
    marquee.addEventListener('mouseup', handleMouseUp)
    marquee.addEventListener('mousemove', handleMouseMove)
    marquee.addEventListener('touchstart', handleTouchStart, { passive: true })
    marquee.addEventListener('touchend', handleTouchEnd)
    marquee.addEventListener('touchmove', handleTouchMove, { passive: true })
    marquee.addEventListener('scroll', handleScroll)
    marquee.addEventListener('mouseenter', handleMouseEnter)
    marquee.addEventListener('mouseleave', handleMouseLeaveHover)

    return () => {
      clearTimeout(autoScrollTimeout.current)
      marquee.removeEventListener('mousedown', handleMouseDown)
      marquee.removeEventListener('mouseleave', handleMouseLeave)
      marquee.removeEventListener('mouseup', handleMouseUp)
      marquee.removeEventListener('mousemove', handleMouseMove)
      marquee.removeEventListener('touchstart', handleTouchStart)
      marquee.removeEventListener('touchend', handleTouchEnd)
      marquee.removeEventListener('touchmove', handleTouchMove)
      marquee.removeEventListener('scroll', handleScroll)
      marquee.removeEventListener('mouseenter', handleMouseEnter)
      marquee.removeEventListener('mouseleave', handleMouseLeaveHover)
    }
  }, [isDragging, startX, scrollLeft])
  
  return (
    <section className={styles.clients}>
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">Our Partners</span>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
        </div>
        
        <div 
          className={`${styles.clientsMarquee} ${isDragging ? styles.dragging : ''}`} 
          ref={marqueeRef}
        >
          <div 
            className={`${styles.marqueeContent} ${isPaused ? styles.paused : ''}`}
            ref={marqueeContentRef}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className={styles.clientLogo}>
                <img
                  src={`/partnerlogo/${logo}`}
                  alt={`Partner ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
