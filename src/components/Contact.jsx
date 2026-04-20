function Contact() {
  return (
    <section id="contact" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-header">
        <span className="section-num">04 /</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line"></div>
      </div>
      <div className="contact-inner" data-aos="zoom-in">
        <div className="contact-glow"></div>
        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-title">Let's build something <span>real.</span></p>
            <p className="contact-sub">
              Open to AI/ML Developer roles, freelance projects, and collaborations.<br />
              If you have an interesting problem — let's talk.
            </p>
            <div className="contact-links" style={{ marginBottom: '2rem' }}>
              <a href="mailto:rajbhargopal203@gmail.com" className="contact-link">
                <div className="contact-link-dot"></div>EMAIL
              </a>
              <a href="https://www.linkedin.com/in/gopal-rajbhar-285145246" className="contact-link" target="_blank" rel="noreferrer">
                <div className="contact-link-dot"></div>LINKEDIN
              </a>
              <a href="https://github.com/Gopal-2001" className="contact-link" target="_blank" rel="noreferrer">
                <div className="contact-link-dot"></div>GITHUB
              </a>
              <a href="tel:+917977937805" className="contact-link">
                <div className="contact-link-dot"></div>PHONE
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form className="contact-form" action="https://formspree.io/f/maqabapr" method="POST">
              <div className="input-group">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="input-group">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input-group">
                <textarea name="message" rows="5" placeholder="Your Message..." required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
