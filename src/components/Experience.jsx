import { EXPERIENCE } from '../constants';

function Experience() {
  return (
    <section id="experience" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-header">
        <span className="section-num">04 /</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>
      <div className="timeline" data-aos="fade-up">
        {EXPERIENCE.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-subtitle">{item.company} {item.period && `(${item.period})`}</div>
              <p className="timeline-text">{item.description}</p>
              {item.tags.length > 0 && (
                <div className="project-tags" style={{ marginTop: '1rem' }}>
                  {item.tags.map((tag, j) => (
                    <span key={j} className="tag tag-neon">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
