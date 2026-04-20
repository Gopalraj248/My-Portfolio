function About() {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-header">
        <span className="section-num">01 /</span>
        <h2 className="section-title">About</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-grid" data-aos="fade-up">
        <div className="about-text">
          <p>
            I'm <strong>Gopal Rajbhar</strong>, a Junior AI/ML Developer at <strong>Feat Systems</strong>, Mumbai.
            I graduated from <strong>Thakur College of Science & Commerce</strong> and jumped straight into solving
            real-world problems with AI.
          </p>
          <p>
            My work revolves around building <strong>Multilingual OCR engines</strong> that process documents across
            <strong> 10+ languages</strong> — including Hindi, English, and other Indian regional scripts. I also
            architect <strong>AI-powered Voice Calling Agents</strong> — systems that make and receive phone calls,
            hold natural conversations, and complete tasks autonomously using <strong>Whisper STT</strong>,
            <strong> LLMs</strong>, and <strong>Twilio</strong>.
          </p>
          <p>
            I believe in <strong>shipping fast</strong>, <strong>breaking things intentionally</strong>, and
            <strong> learning from production</strong>.
          </p>
        </div>
        <div className="terminal" data-aos="fade-left" data-aos-delay="100">
          <div className="terminal-header">
            <div className="dot dot-r"></div>
            <div className="dot dot-y"></div>
            <div className="dot dot-g"></div>
            <span className="terminal-title">gopal@dev ~</span>
          </div>
          <div className="terminal-body">
            <span className="t-prompt">$</span> <span className="t-cmd">cat profile.json</span><br />
            <span className="t-out">{'{'}</span><br />
            <span className="t-out">&nbsp;&nbsp;"name": </span><span className="t-val">"Gopal Rajbhar"</span><br />
            <span className="t-out">&nbsp;&nbsp;"role": </span><span className="t-val">"Jr. AI/ML Developer"</span><br />
            <span className="t-out">&nbsp;&nbsp;"company": </span><span className="t-val">"Feat Systems"</span><br />
            <span className="t-out">&nbsp;&nbsp;"focus": </span><span className="t-val">["OCR", "Voice AI", "LLMs"]</span><br />
            <span className="t-out">&nbsp;&nbsp;"status": </span><span className="t-val">"Building & Shipping"</span><br />
            <span className="t-out">{'}'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
