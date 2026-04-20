const skills = [
  { name: 'Python', level: 'CORE LANGUAGE', fill: 'fill-neon', width: '95%' },
  { name: 'Machine Learning', level: 'SKLEARN · XGBOOST', fill: 'fill-neon', width: '85%' },
  { name: 'Deep Learning', level: 'PYTORCH · TENSORFLOW', fill: 'fill-blue', width: '80%' },
  { name: 'OCR Systems', level: 'TESSERACT · EASYOCR', fill: 'fill-blue', width: '90%' },
  { name: 'NLP / LLMs', level: 'TRANSFORMERS · OPENAI', fill: 'fill-purple', width: '85%' },
  { name: 'Voice AI', level: 'WHISPER · TTS · TWILIO', fill: 'fill-purple', width: '80%' },
  { name: 'Data Analysis', level: 'PANDAS · NUMPY', fill: 'fill-neon', width: '90%' },
  { name: 'MLOps / Deploy', level: 'FASTAPI · DOCKER · GIT', fill: 'fill-blue', width: '70%' },
]

function Skills() {
  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-header">
        <span className="section-num">02 /</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line"></div>
      </div>
      <div className="skills-grid" data-aos="fade-up">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level mono">{skill.level}</div>
            <div className="skill-bar">
              <div className={`skill-fill ${skill.fill}`} style={{ width: skill.width }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
