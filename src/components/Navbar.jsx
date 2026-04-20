import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav>
      <div className="nav-logo">GR.</div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>HOME</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }}>ABOUT</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills') }}>SKILLS</a>
        <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience') }}>EXPERIENCE</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects') }}>PROJECTS</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>CONTACT</a>
      </div>
      <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  )
}

export default Navbar
