import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'

interface HeroProps {
  scrollY: number
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const parallaxOffset = scrollY * 0.5

  return (
    <section className="hero-section parallax-section" ref={heroRef}>
      <div
        className="hero-content parallax-content"
        style={{ '--parallax-offset': `${-parallaxOffset}px` } as React.CSSProperties}
      >
        <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            <span className="gradient-text">Hi, I'm</span>
            <br />
            <span className="name-text">Nobab Khan</span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Software Engineer & AI Enthusiast
          </p>
          <div className="hero-description">
            <p>
              Building innovative solutions with AI, cloud infrastructure, and
              modern web technologies
            </p>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-element" style={{ animationDelay: '0s' }}>
              🤖
            </div>
            <div className="floating-element" style={{ animationDelay: '0.5s' }}>
              ⚡
            </div>
            <div className="floating-element" style={{ animationDelay: '1s' }}>
              🚀
            </div>
            <div className="floating-element" style={{ animationDelay: '1.5s' }}>
              💻
            </div>
            <div className="floating-element" style={{ animationDelay: '2s' }}>
              🎯
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <p>Scroll to explore</p>
      </div>
    </section>
  )
}

export default Hero
