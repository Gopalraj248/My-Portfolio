import { useEffect, useState } from 'react';
import { SKILLS } from '../constants';

const SkillRadar = ({ skills, setSkills, setHoveredSkill }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState(null);
  
  const size = 400;
  const center = size / 2;
  const radius = (size / 2) - 60;
  const numSkills = skills.length;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const getCoordinates = (index, valuePercent) => {
    const angle = (Math.PI * 2 * index) / numSkills - Math.PI / 2;
    const value = (valuePercent / 100) * radius;
    return {
      x: center + value * Math.cos(angle),
      y: center + value * Math.sin(angle)
    };
  };

  const handleMouseMove = (e) => {
    if (draggingIndex === null) return;
    
    const svg = e.currentTarget;
    const CTM = svg.getScreenCTM();
    if (!CTM) return;
    
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const cursor = pt.matrixTransform(CTM.inverse());

    const dx = cursor.x - center;
    const dy = cursor.y - center;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const newValue = Math.min(100, Math.max(10, (distance / radius) * 100));
    
    const newSkills = [...skills];
    newSkills[draggingIndex] = {
      ...newSkills[draggingIndex],
      width: `${Math.round(newValue)}%`
    };
    setSkills(newSkills);
  };

  const polygonPoints = skills.map((skill, i) => {
    const val = isVisible ? parseInt(skill.width) : 0;
    const { x, y } = getCoordinates(i, val);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="radar-container">
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${size} ${size}`}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setDraggingIndex(null)}
        onMouseLeave={() => setDraggingIndex(null)}
        style={{ cursor: draggingIndex !== null ? 'grabbing' : 'default' }}
      >
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
        {[0.2, 0.4, 0.6, 0.8, 1].map((p, i) => (
          <circle key={i} cx={center} cy={center} r={radius * p} fill="none" stroke="var(--border)" strokeWidth="1" />
        ))}

        {/* Axis Lines */}
        {skills.map((_, i) => {
          const { x, y } = getCoordinates(i, 100);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="var(--border)" strokeWidth="1" />;
        })}

        {/* Proficient Polygon */}
        <polygon
          points={polygonPoints}
          fill="url(#radar-grad)"
          stroke="var(--neon)"
          strokeWidth="2"
          filter="url(#glow)"
          style={{ transition: draggingIndex !== null ? 'none' : 'all 0.5s ease-out' }}
        />

        {/* Labels & Interactive Handles */}
        {skills.map((skill, i) => {
          const val = parseInt(skill.width);
          const pos = getCoordinates(i, val);
          const labelPos = getCoordinates(i, 115);
          
          return (
            <g key={i}>
              <text
                x={labelPos.x}
                y={labelPos.y}
                fill="var(--muted)"
                fontSize="10"
                fontFamily="Space Mono"
                textAnchor="middle"
                alignmentBaseline="middle"
                className="radar-label"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredSkill?.(skill.name)}
                onMouseLeave={() => setHoveredSkill?.(null)}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {skill.name.split(' ')[0]}
              </text>
              
              {/* Draggable Vertex Handle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r="6"
                fill="var(--neon)"
                className="radar-handle"
                style={{ 
                  cursor: 'grab', 
                  opacity: draggingIndex === i ? 1 : 0.4,
                  transition: draggingIndex !== null ? 'none' : 'all 0.5s ease-out'
                }}
                onMouseDown={() => setDraggingIndex(i)}
              />
            </g>
          );
        })}

        <line className="radar-scan" x1={center} y1={center} x2={center} y2={center - radius} stroke="var(--neon)" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  );
};

export default SkillRadar;
