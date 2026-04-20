function Experience() {
  return (
    <section id="experience" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-header">
        <span className="section-num">02.5 /</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>
      <div className="timeline" data-aos="fade-up">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">Junior AI/ML Developer</h3>
            <div className="timeline-subtitle">Feat Systems, Mumbai (Present)</div>
            <p className="timeline-text">
              Building production-grade intelligent systems. Specialized in Multilingual OCR engines across 10+ languages
              and autonomous Voice AI calling agents using Whisper, LLMs, and Twilio.
            </p>
            <div className="project-tags" style={{ marginTop: '1rem' }}>
              <span className="tag tag-neon">Applied AI</span>
              <span className="tag tag-blue">Production</span>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">Education</h3>
            <div className="timeline-subtitle">Thakur College of Science &amp; Commerce</div>
            <p className="timeline-text">
              Gained a strong foundation in computer science, statistics, and mathematics.
              Developed an early passion for machine learning and practical AI applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
