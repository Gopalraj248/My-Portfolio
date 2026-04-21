import { useEffect, useRef, useState } from 'react';
import { SKILLS as ORIGINAL_SKILLS } from '../constants';
import SkillRadar from './SkillRadar';

function Skills({ setHoveredSkill }) {
  const [skills, setSkills] = useState(ORIGINAL_SKILLS);
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    skillRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const resetSkills = () => {
    setSkills(ORIGINAL_SKILLS);
  };

  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
          <span className="section-num">02 /</span>
          <h2 className="section-title">Brain Scan</h2>
        </div>
        <button className="reset-btn mono" onClick={resetSkills}>[ RESET_SYSTEM ]</button>
        <div className="section-line"></div>
      </div>
      
      <div className="skills-container">
        <div className="skills-visual" data-aos="zoom-in">
          <SkillRadar 
            skills={skills} 
            setSkills={setSkills} 
            setHoveredSkill={setHoveredSkill} 
          />
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div 
              className="skill-card" 
              key={i} 
              data-aos="fade-left" 
              data-aos-delay={i * 50}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level mono">{parseInt(skill.width)}% PROFICIENCY</div>
              <div className="skill-bar" ref={el => skillRefs.current[i] = el}>
                <div 
                  className={`skill-fill ${skill.fill}`} 
                  style={{ '--width': skill.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
