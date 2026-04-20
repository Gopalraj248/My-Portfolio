import { useEffect } from 'react'

function Hero() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: '#00ff9d' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#00ff9d', opacity: 0.2, width: 1 },
          move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
          modes: { grab: { distance: 200, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
        },
        retina_detect: true
      })
    }
  }, [])

  return (
    <div className="hero" id="home">
      <div id="particles-js" style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}></div>
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-content">
        <div className="hero-tag">AVAILABLE FOR NEW ROLE</div>
        <h1>
          <span className="name">Gopal Rajbhar</span>
          <span className="role">Junior AI/ML Developer</span>
        </h1>
        <p className="hero-desc">
          Building intelligent systems that solve <span>real problems.</span><br />
          Specialized in <span>Multilingual OCR</span> &amp; <span>Voice AI Agents</span> —<br />
          turning raw data into working products.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            VIEW PROJECTS
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            CONTACT ME
          </button>
        </div>
      </div>
      <div className="hero-stats" data-aos="fade-left" data-aos-delay="200">
        <div className="stat-item">
          <div className="stat-num mono">10+</div>
          <div className="stat-label mono">LANGUAGES OCR</div>
        </div>
        <div className="stat-item">
          <div className="stat-num mono">AI</div>
          <div className="stat-label mono">VOICE AGENTS</div>
        </div>
        <div className="stat-item">
          <div className="stat-num mono">∞</div>
          <div className="stat-label mono">CURIOSITY</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
