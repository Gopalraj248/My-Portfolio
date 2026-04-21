import { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectModal from './ProjectModal';

function Projects({ hoveredSkill }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-header">
        <span className="section-num">03 /</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-list" data-aos="fade-up">
        {PROJECTS.map((project, i) => {
          const isHighlighted = hoveredSkill && project.relatedSkills?.includes(hoveredSkill);
          return (
            <div 
              className={`project-card ${isHighlighted ? 'highlighted' : ''}`} 
              key={i} 
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-top">
                <span className="project-num mono">{project.num}</span>
                <span className="project-arrow">↗</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.overview}</p>
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span className={`tag ${tag.type}`} key={j}>{tag.label}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}

export default Projects
