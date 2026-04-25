import React from 'react'
import './Bee.css'

interface BeeProps {
  position: { x: number; y: number }
  direction: { x: number; y: number }
}

const Bee: React.FC<BeeProps> = ({ position, direction }) => {
  const rotation = Math.atan2(direction.y, direction.x) * (180 / Math.PI)

  return (
    <div
      className="bee"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${rotation}deg)`,
        left: 0,
        top: 0
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Legs - adding some detail for realism */}
        <path d="M40 60 L35 75" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 62 L50 78" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 60 L65 75" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
        
        {/* Abdomen (back part) */}
        <ellipse cx="40" cy="50" rx="30" ry="22" fill="#F59E0B" />
        <ellipse cx="40" cy="50" rx="30" ry="22" fill="url(#abdomenGradient)" />
        
        {/* Thorax (middle part) */}
        <circle cx="65" cy="50" r="18" fill="#1F2937" />
        <circle cx="65" cy="50" r="18" fill="url(#thoraxGradient)" />

        {/* Stripes on Abdomen */}
        <path d="M25 35 Q20 50 25 65" stroke="#1F2937" strokeWidth="6" fill="none" />
        <path d="M38 30 Q33 50 38 70" stroke="#1F2937" strokeWidth="7" fill="none" />
        <path d="M52 32 Q47 50 52 68" stroke="#1F2937" strokeWidth="6" fill="none" />

        {/* Head */}
        <circle cx="82" cy="50" r="12" fill="#1F2937" />

        {/* Eyes (Compound eyes look) */}
        <ellipse cx="86" cy="44" rx="4" ry="6" fill="#000" />
        <ellipse cx="86" cy="56" rx="4" ry="6" fill="#000" />
        <circle cx="88" cy="42" r="1.5" fill="white" fillOpacity="0.6" />

        {/* Antennae */}
        <path d="M85 42 Q90 30 95 25" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M85 58 Q90 70 95 75" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Wings - Large, transparent, with veins */}
        <g className="wing-group">
          <ellipse
            cx="55"
            cy="30"
            rx="25"
            ry="12"
            fill="rgba(255, 255, 255, 0.4)"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="0.5"
            className="wing left-wing"
          />
          <path d="M55 30 L40 20 M55 30 L70 20" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" className="wing left-wing" />
          
          <ellipse
            cx="55"
            cy="70"
            rx="25"
            ry="12"
            fill="rgba(255, 255, 255, 0.4)"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="0.5"
            className="wing right-wing"
          />
          <path d="M55 70 L40 80 M55 70 L70 80" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" className="wing right-wing" />
        </g>

        {/* Stinger */}
        <path d="M10 50 L2 50" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />

        {/* Gradients for depth */}
        <defs>
          <radialGradient id="abdomenGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </radialGradient>
          <radialGradient id="thoraxGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4B5563" />
            <stop offset="100%" stopColor="#1F2937" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Bee
