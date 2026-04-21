import { useState, useEffect } from 'react';

const ConfidenceHUD = ({ activeSection }) => {
  const [glitchText, setGlitchText] = useState('');
  
  const hudData = {
    home: { msg: "Neural Network Online. Monitoring...", confidence: "0.998" },
    about: { msg: "Identity Profile: Gopal Rajbhar. Verified.", confidence: "0.985" },
    skills: { msg: "Mapping Cognitive Matrix... Domains Detected.", confidence: "0.972" },
    experience: { msg: "Parsing Career Timeline... Data Extracted.", confidence: "0.964" },
    projects: { msg: "Analyzing Deployed Intelligence... High Impact.", confidence: "0.999" },
    contact: { msg: "Awaiting Uplink... Establishing Secure Protocol.", confidence: "0.950" }
  };

  const current = hudData[activeSection] || hudData.home;

  useEffect(() => {
    const chars = 'ABCDEF0123456789X-Y-Z';
    const interval = setInterval(() => {
      let result = '';
      for (let i = 0; i < 12; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setGlitchText(result);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="confidence-hud" data-aos="fade-left">
      <div className="hud-line">
        <span className="hud-label">ANALYSIS:</span>
        <span className="hud-value">{current.msg}</span>
      </div>
      <div className="hud-line">
        <span className="hud-label">CONFIDENCE:</span>
        <span className="hud-confidence">{current.confidence}</span>
      </div>
      <div className="hud-line">
        <span className="hud-label">METADATA:</span>
        <span className="hud-value mono">{glitchText}</span>
      </div>
      <div className="hud-scanner"></div>
    </div>
  );
};

export default ConfidenceHUD;
