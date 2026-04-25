import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'

interface ContactProps {
  scrollY: number
}

const Contact: React.FC<ContactProps> = ({ scrollY }) => {
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

  const parallaxOffset = (scrollY - window.innerHeight * 5) * 0.3

  const contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'nobab.khan.nirob@gmail.com',
      href: 'mailto:nobab.khan.nirob@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/nobab',
      href: 'https://linkedin.com/in/nobab',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/NobabKh',
      href: 'https://github.com/NobabKh',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+880 1766-632383',
      href: 'tel:+8801766632383',
    },
  ]

  return (
    <section
      id="contact"
      className="contact-section parallax-section"
      ref={sectionRef}
    >
      <div
        className="contact-content parallax-content section"
        style={{ '--parallax-offset': `${-parallaxOffset}px` } as React.CSSProperties}
      >
        <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-wrapper">
            <div className="contact-text">
              <p className="contact-intro">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="contact-info">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="contact-item"
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="contact-icon">{contact.icon}</span>
                    <div className="contact-details">
                      <span className="contact-label">{contact.label}</span>
                      <span className="contact-value">{contact.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-visual">
              <div className="floating-badges">
                <div className="badge" style={{ animationDelay: '0s' }}>
                  🚀
                </div>
                <div className="badge" style={{ animationDelay: '0.5s' }}>
                  💡
                </div>
                <div className="badge" style={{ animationDelay: '1s' }}>
                  🎯
                </div>
                <div className="badge" style={{ animationDelay: '1.5s' }}>
                  ⚡
                </div>
                <div className="badge" style={{ animationDelay: '2s' }}>
                  🌟
                </div>
              </div>
            </div>
          </div>
          <div className="contact-footer">
            <p>
              Built with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
            <p className="footer-note">
              © 2025 Nobab Khan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
