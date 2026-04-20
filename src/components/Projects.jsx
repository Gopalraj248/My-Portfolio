const projects = [
  {
    num: 'PROJECT_01',
    title: 'Multilingual OCR Engine',
    desc: `A production-grade OCR system that extracts text from documents, images, and scanned files across 10+ languages including Hindi, English, and regional Indian scripts. Built for accuracy in real-world noisy conditions — skewed images, low resolution, mixed-script documents.`,
    tags: [
      { label: 'Python', type: 'tag-neon' },
      { label: 'EasyOCR', type: 'tag-neon' },
      { label: 'Tesseract', type: 'tag-neon' },
      { label: 'OpenCV', type: 'tag-blue' },
      { label: 'FastAPI', type: 'tag-blue' },
      { label: 'Deep Learning', type: '' },
      { label: '10+ Languages', type: '' },
    ]
  },
  {
    num: 'PROJECT_02',
    title: 'Multilingual Voice Calling Agent',
    desc: `An autonomous AI voice agent that makes and receives phone calls, holds natural conversations, handles dynamic user inputs, and completes tasks without human intervention. Supports multiple languages — built for real telephony environments with low latency response.`,
    tags: [
      { label: 'Python', type: 'tag-neon' },
      { label: 'Whisper STT', type: 'tag-neon' },
      { label: 'LLM', type: 'tag-neon' },
      { label: 'TTS', type: 'tag-blue' },
      { label: 'Twilio / WebRTC', type: 'tag-blue' },
      { label: 'Voice AI', type: '' },
      { label: 'Multilingual', type: '' },
    ]
  }
]

function Projects() {
  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-header">
        <span className="section-num">03 /</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-list" data-aos="fade-up">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-top">
              <span className="project-num mono">{project.num}</span>
              <span className="project-arrow">↗</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag, j) => (
                <span className={`tag ${tag.type}`} key={j}>{tag.label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
