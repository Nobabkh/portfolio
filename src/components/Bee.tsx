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
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bee body */}
        <ellipse cx="50" cy="50" rx="25" ry="18" fill="#F59E0B" />
        <ellipse cx="50" cy="50" rx="25" ry="18" fill="url(#beeGradient)" />

        {/* Bee stripes */}
        <path d="M35 40 L35 60" stroke="#1F2937" strokeWidth="3" />
        <path d="M45 38 L45 62" stroke="#1F2937" strokeWidth="3" />
        <path d="M55 38 L55 62" stroke="#1F2937" strokeWidth="3" />
        <path d="M65 40 L65 60" stroke="#1F2937" strokeWidth="3" />

        {/* Bee head */}
        <circle cx="75" cy="50" r="10" fill="#1F2937" />

        {/* Bee eye */}
        <circle cx="78" cy="47" r="2" fill="white" />

        {/* Bee antenna */}
        <path d="M75 40 Q80 30 85 25" stroke="#1F2937" strokeWidth="2" fill="none" />
        <path d="M75 40 Q70 30 65 25" stroke="#1F2937" strokeWidth="2" fill="none" />

        {/* Bee wing (left) */}
        <ellipse
          cx="45"
          cy="35"
          rx="15"
          ry="8"
          fill="rgba(255, 255, 255, 0.6)"
          stroke="#E5E7EB"
          strokeWidth="1"
          className="wing left-wing"
        />

        {/* Bee wing (right) */}
        <ellipse
          cx="45"
          cy="65"
          rx="15"
          ry="8"
          fill="rgba(255, 255, 255, 0.6)"
          stroke="#E5E7EB"
          strokeWidth="1"
          className="wing right-wing"
        />

        {/* Bee stinger */}
        <path d="M25 50 L15 50" stroke="#1F2937" strokeWidth="2" />

        {/* Gradient */}
        <defs>
          <linearGradient id="beeGradient" x1="25%" y1="0%" x2="75%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Bee
