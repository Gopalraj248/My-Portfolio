import { useEffect, useState } from 'react';
import { SKILLS } from '../constants';

const SkillRadar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const size = 400;
  const center = size / 2;
  const radius = (size / 2) - 60;
  const numSkills = SKILLS.length;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Calculate coordinates for each skill point
  const getCoordinates = (index, valuePercent) => {
    const angle = (Math.PI * 2 * index) / numSkills - Math.PI / 2;
    const value = (valuePercent / 100) * radius;
    return {
      x: center + value * Math.cos(angle),
      y: center + value * Math.sin(angle)
    };
  };

  // Build the polygon path
  const polygonPoints = SKILLS.map((skill, i) => {
    const val = isVisible ? parseInt(skill.width) : 0;
    const { x, y } = getCoordinates(i, val);
    return `${x},${y}`;
  }).join(' ');

  // Background Web (Circles)
  const webCircles = [0.2, 0.4, 0.6, 0.8, 1].map((p, i) => (
    <circle
      key={i}
      cx={center}
      cy={center}
      r={radius * p}
      fill="none"
      stroke="var(--border)"
      strokeWidth="1"
    />
  ));

  // Axis Lines
  const axisLines = SKILLS.map((_, i) => {
    const { x, y } = getCoordinates(i, 100);
    return (
      <line
        key={i}
        x1={center}
        y1={center}
        x2={x}
        y2={y}
        stroke="var(--border)"
        strokeWidth="1"
      />
    );
  });

  return (
    <div className="radar-container">
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <radialGradient id="radar-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--neon)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--neon)" stopOpacity="0.4" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Web Circles */}
        {webCircles}

        {/* Axis Lines */}
        {axisLines}

        {/* Proficient Polygon */}
        <polygon
          points={polygonPoints}
          fill="url(#radar-grad)"
          stroke="var(--neon)"
          strokeWidth="2"
          filter="url(#glow)"
          style={{ transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />

        {/* Labels */}
        {SKILLS.map((skill, i) => {
          const { x, y } = getCoordinates(i, 115);
          return (
            <text
              key={i}
              x={x}
              y={y}
              fill="var(--muted)"
              fontSize="10"
              fontFamily="Space Mono"
              textAnchor="middle"
              alignmentBaseline="middle"
              className="radar-label"
            >
              {skill.name.split(' ')[0]}
            </text>
          );
        })}

        {/* Scanning Line Overlay */}
        <line
          className="radar-scan"
          x1={center}
          y1={center}
          x2={center}
          y2={center - radius}
          stroke="var(--neon)"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default SkillRadar;
