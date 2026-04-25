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
  const [beePosition, setBeePosition] = useState({ x: 100, y: 100 })
  const [beeDirection, setBeeDirection] = useState({ x: 1, y: 1 })
  const textElements = useRef<HTMLElement[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Collect all text elements for collision detection
    textElements.current = Array.from(
      document.querySelectorAll('h1, h2, h3, p, span, a, li')
    )

    const animateBee = () => {
      setBeePosition((prev) => {
        let newX = prev.x + beeDirection.x * 2
        let newY = prev.y + beeDirection.y * 2
        let newDirectionX = beeDirection.x
        let newDirectionY = beeDirection.y

        const beeElement = document.querySelector('.bee')
        if (!beeElement) return prev

        const beeRect = {
          x: newX,
          y: newY,
          width: 40,
          height: 40,
        }

        // Check window boundaries
        const maxX = window.innerWidth - 50
        const maxY = window.innerHeight - 50

        if (newX <= 0 || newX >= maxX) {
          newDirectionX = -newDirectionX
          newX = Math.max(0, Math.min(newX, maxX))
        }
        if (newY <= 0 || newY >= maxY) {
          newDirectionY = -newDirectionY
          newY = Math.max(0, Math.min(newY, maxY))
        }

        // Check collision with text elements
        for (const element of textElements.current) {
          const rect = element.getBoundingClientRect()
          if (isColliding(beeRect, rect)) {
            // Calculate avoidance direction
            const beeCenterX = beeRect.x + beeRect.width / 2
            const beeCenterY = beeRect.y + beeRect.height / 2
            const rectCenterX = rect.left + rect.width / 2
            const rectCenterY = rect.top + rect.height / 2

            const dx = beeCenterX - rectCenterX
            const dy = beeCenterY - rectCenterY

            // Move bee away from the obstacle
            const magnitude = Math.sqrt(dx * dx + dy * dy)
            if (magnitude > 0) {
              newDirectionX = (dx / magnitude)
              newDirectionY = (dy / magnitude)
            }
          }
        }

        setBeeDirection({ x: newDirectionX, y: newDirectionY })
        return { x: newX, y: newY }
      })
    }

    const interval = setInterval(animateBee, 16) // ~60fps
    return () => clearInterval(interval)
  }, [beeDirection])

  const isColliding = (beeRect: any, textRect: DOMRect) => {
    return (
      beeRect.x < textRect.right &&
      beeRect.x + beeRect.width > textRect.left &&
      beeRect.y < textRect.bottom &&
      beeRect.y + beeRect.height > textRect.top
    )
  }

  return (
    <div className="app">
      <Bee position={beePosition} direction={beeDirection} />
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
