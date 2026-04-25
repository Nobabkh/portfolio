import React, { useEffect, useRef, useState } from 'react'
import './Experience.css'

interface ExperienceProps {
  scrollY: number
}

const Experience: React.FC<ExperienceProps> = ({ scrollY }) => {
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

  const parallaxOffset = (scrollY - window.innerHeight * 4) * 0.3

  const experiences = [
    {
      company: 'Fiber@Home Ltd.',
      role: 'Software Engineer (Taraa AI)',
      period: 'Oct 2025 - Present',
      description:
        'Building AI-powered applications with full-stack development and LLM integrations',
      highlights: [
        'AI/LLM integrations with streaming responses',
        'Scalable backend architecture',
        'Secure authentication (JWT, RBAC)',
        'Event-driven pipelines',
      ],
    },
    {
      company: 'Contessa Solutions',
      role: 'Software Engineer',
      period: 'Jan 2024 - Sep 2025',
      description:
        'Led development of AI-powered platforms and enterprise systems',
      highlights: [
        'Websparks.ai AI platform',
        'Digital signature document management',
        'Drawing board application',
        'CI/CD pipeline automation',
      ],
    },
    {
      company: 'TechKnowGram',
      role: 'Software Engineer',
      period: 'May 2023 - Dec 2023',
      description: 'Developed microservices-based ERP solutions',
      highlights: [
        'Multi-module ERP system',
        'Offline-capable mobile app',
        'E-commerce aggregation',
        'Cloud deployment',
      ],
    },
    {
      company: 'HS Engineering',
      role: 'Junior Software Engineer',
      period: 'Jan 2021 - Dec 2022',
      description: 'IoT device control and VPN infrastructure',
      highlights: [
        'IoT device control services',
        'Secure VPN infrastructure',
        'Cloud server management',
      ],
    },
  ]

  return (
    <section className="experience-section parallax-section" ref={sectionRef}>
      <div
        className="experience-content parallax-content section"
        style={{ '--parallax-offset': `${-parallaxOffset}px` } as React.CSSProperties}
      >
        <div className={`experience-container ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="experience-marker"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="company-name">{exp.company}</h3>
                      <p className="role-title">{exp.role}</p>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <ul className="experience-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
