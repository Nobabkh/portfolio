import React, { useEffect, useRef, useState } from 'react'
import './About.css'

interface AboutProps {
  scrollY: number
}

const About: React.FC<AboutProps> = ({ scrollY }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const parallaxOffset = (scrollY - window.innerHeight) * 0.3

  return (
    <section className="about-section parallax-section" ref={sectionRef}>
      <div
        className="about-content parallax-content section"
        style={{ '--parallax-offset': `${-parallaxOffset}px` } as React.CSSProperties}
      >
        <div className={`about-container ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p className="about-intro">
                I'm a <strong>Software Engineer</strong> with 5+ years of
                experience building full-stack applications, AI-powered systems,
                and enterprise solutions.
              </p>
              <p className="about-description">
                Currently working at <strong>Fiber@Home Ltd.</strong> on{' '}
                <strong>Taraa AI</strong> — developing backend systems, AI/LLM
                integrations, and scalable architecture. My passion lies in
                creating innovative solutions that combine cutting-edge AI
                technologies with robust engineering practices.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎯</span>
                  <div>
                    <h3>Focus</h3>
                    <p>AI/ML, Distributed Systems, Cloud Infrastructure</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🏆</span>
                  <div>
                    <h3>Achievements</h3>
                    <p>ICPC Contestant, HackerRank Certified</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">📍</span>
                  <div>
                    <h3>Location</h3>
                    <p>Mirpur, Dhaka, Bangladesh (GMT+6)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">11</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Companies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">40+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
