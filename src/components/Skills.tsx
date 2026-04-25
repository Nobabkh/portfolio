import React, { useEffect, useRef, useState } from 'react'
import './Skills.css'

interface SkillsProps {
  scrollY: number
}

const Skills: React.FC<SkillsProps> = ({ scrollY }) => {
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

  const parallaxOffset = (scrollY - window.innerHeight * 2) * 0.3

  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'C++'],
    },
    {
      title: 'Frameworks',
      icon: '⚡',
      skills: ['React', 'Next.js', 'FastAPI', 'Django', 'Node.js', 'Spring Boot'],
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      title: 'AI & Data',
      icon: '🤖',
      skills: ['TensorFlow', 'PyTorch', 'Transformers', 'PostgreSQL', 'MongoDB'],
    },
  ]

  return (
    <section className="skills-section parallax-section" ref={sectionRef}>
      <div
        className="skills-content parallax-content"
        style={{ '--parallax-offset': `${-parallaxOffset}px` } as React.CSSProperties}
      >
        <div className={`skills-container ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="skill-category"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
