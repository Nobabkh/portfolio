import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'

interface ProjectsProps {
  scrollY: number
}

const Projects: React.FC<ProjectsProps> = ({ scrollY }) => {
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

  const parallaxOffset = (scrollY - window.innerHeight * 3) * 0.3

  const projects = [
    {
      title: 'Taraa AI Agent & RAG System',
      description:
        'Advanced AI agents with RAG implementation, background workers, and MCP tools integration',
      tags: ['Python', 'RAG', 'MCP', 'LangChain', 'Vector DB'],
      icon: '🧠',
      status: 'Active',
    },
    {
      title: 'Taraa AI',
      description:
        'AI-powered applications platform with LLM integrations and streaming responses',
      tags: ['Node.js', 'PostgreSQL', 'Redis', 'AI/ML'],
      icon: '🤖',
      status: 'Active',
    },
    {
      title: 'Websparks.ai',
      description:
        'AI-powered web development platform with automated component generation',
      tags: ['Python', 'React', 'OpenAI', 'FastAPI'],
      icon: '🌐',
      status: 'Launched',
    },
    {
      title: 'Digital Signature System',
      description:
        'Enterprise document management with cryptographic signatures',
      tags: ['Python', 'OpenSSL', 'React', 'Vite'],
      icon: '🔐',
      status: 'Production',
    },
    {
      title: 'Enterprise ERP',
      description:
        'Multi-module ERP system with role-based access control',
      tags: ['Python', 'FastAPI', 'React', 'Docker'],
      icon: '🏢',
      status: 'Production',
    },
    {
      title: 'Transport Management',
      description:
        'Automated fare collection system with embedded hardware',
      tags: ['Python', 'React', 'Embedded', 'IoT'],
      icon: '🚌',
      status: 'Deployed',
    },
    {
      title: 'ProviderClient',
      description:
        'Service provider client application with real-time communication and integration capabilities',
      tags: ['React', 'TypeScript', 'Node.js', 'WebSockets'],
      icon: '🔌',
      status: 'Active',
    },
    {
      title: 'Howlops',
      description:
        'Advanced workflow automation and orchestration system with AI-powered decision making',
      tags: ['Python', 'FastAPI', 'AI/ML', 'Automation'],
      icon: '⚡',
      status: 'Active',
    },
  ]

  return (
    <section id="projects" className="projects-section parallax-section" ref={sectionRef}>
      <div
        className="projects-content parallax-content"
        style={{ '--parallax-offset': `${-parallaxOffset}px` } as React.CSSProperties}
      >
        <div className={`projects-container ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-header">
                  <span className="project-icon">{project.icon}</span>
                  <span className={`project-status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
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

export default Projects
