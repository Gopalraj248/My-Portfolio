import { STATS } from '../constants';
import NeuralBackground from './NeuralBackground';

function Hero() {
  return (
    <div className="hero" id="home">
      <NeuralBackground />
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
        {STATS.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num mono">{stat.num}</div>
            <div className="stat-label mono">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
