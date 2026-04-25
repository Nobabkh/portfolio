import { useState, useEffect, useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Bee from './components/Bee'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [beePos, setBeePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const [beeDirection, setBeeDirection] = useState({ x: 1, y: 0 })
  const lastScrollTime = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const now = performance.now()
      if (now - lastScrollTime.current > 10) { // Simple throttle
        setScrollY(window.scrollY)
        lastScrollTime.current = now
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let animationFrameId: number
    let time = 0

    const updateBee = () => {
      time += 0.02
      
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      // Hovering motion parameters
      const ampX = window.innerWidth * 0.2
      const ampY = 30
      
      // Calculate target position (hovering in middle)
      let targetX = centerX + Math.sin(time * 0.5) * ampX
      let targetY = centerY + Math.cos(time * 1.2) * ampY
      
      // Avoidance logic
      const elements = document.querySelectorAll('.glass, .skill-tag, .project-card, .experience-card, .btn')
      const avoidanceStrength = 50
      let offsetX = 0
      let offsetY = 0

      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        const buffer = 40
        
        // Check if bee is near this element
        if (
          targetX > rect.left - buffer &&
          targetX < rect.right + buffer &&
          targetY > rect.top - buffer &&
          targetY < rect.bottom + buffer
        ) {
          // Push bee away from center of rect
          const elCenterX = rect.left + rect.width / 2
          const elCenterY = rect.top + rect.height / 2
          const distBaseX = targetX - elCenterX
          const distBaseY = targetY - elCenterY
          const dist = Math.sqrt(distBaseX * distBaseX + distBaseY * distBaseY) || 1
          
          offsetX += (distBaseX / dist) * avoidanceStrength
          offsetY += (distBaseY / dist) * avoidanceStrength
        }
      })

      const finalX = targetX + offsetX
      const finalY = targetY + offsetY

      setBeePos({ x: finalX, y: finalY })
      
      // Update direction for rotation
      const dx = finalX - (centerX + Math.sin((time - 0.02) * 0.5) * ampX)
      const dy = finalY - (centerY + Math.cos((time - 0.02) * 1.2) * ampY)
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        setBeeDirection({ x: dx, y: dy })
      }

      animationFrameId = requestAnimationFrame(updateBee)
    }

    animationFrameId = requestAnimationFrame(updateBee)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="app">
      <Bee position={beePos} direction={beeDirection} />
      <Hero scrollY={scrollY} />
      <About scrollY={scrollY} />
      <Skills scrollY={scrollY} />
      <Projects scrollY={scrollY} />
      <Experience scrollY={scrollY} />
      <Contact scrollY={scrollY} />
    </div>
  )
}

export default App
