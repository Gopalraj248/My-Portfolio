import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ConfidenceHUD from './components/ConfidenceHUD'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  useEffect(() => {
    if (isLoading) return;
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.3 })

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isLoading])

  return (
    <>
      {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      <div className={`main-content ${isLoading ? 'hidden' : 'visible'}`}>
        {!isLoading && <ConfidenceHUD activeSection={activeSection} />}
        <div className="cursor-follow" id="cursor"></div>
        <Navbar />
        <Hero />
        <About />
        <Skills setHoveredSkill={setHoveredSkill} />
        <Experience />
        <Projects hoveredSkill={hoveredSkill} />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
