const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <span className="project-num mono">{project.num}</span>
          <h2 className="modal-title">{project.title}</h2>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className={`tag ${tag.type}`}>{tag.label}</span>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4 className="mono">OVERVIEW</h4>
            <p>{project.overview}</p>
          </div>

          <div className="modal-section">
            <h4 className="mono">TECHNICAL DETAILS</h4>
            <p>{project.desc}</p>
          </div>

          <div className="modal-section">
            <h4 className="mono">CORE FEATURES</h4>
            <ul>
              {project.features.map((feature, i) => (
                <li key={i} className="mono">{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="modal-footer">
          {project.github && (
            <button 
              className="btn-secondary" 
              onClick={() => window.open(project.github, '_blank')}
              style={{ marginRight: '1rem' }}
            >
              [ VIEW_ON_GITHUB ]
            </button>
          )}
          <button className="btn-primary" onClick={onClose}>CLOSE DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
