import { useState, useEffect } from 'react';

const Loader = ({ finishLoading }) => {
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);
  
  const messages = [
    'Initializing AI Kernel...',
    'Loading Multilingual OCR Models...',
    'Establishing Voice Agent Handlers...',
    'Mounting Deep Learning Frameworks...',
    'System Ready.',
  ];

  useEffect(() => {
    let currentMsgIndex = 0;
    let currentCharIndex = 0;
    let interval;

    const typeEffect = () => {
      if (currentMsgIndex < messages.length) {
        const currentFullMsg = messages[currentMsgIndex];
        if (currentCharIndex <= currentFullMsg.length) {
          setText(prev => (currentCharIndex === 0 ? '> ' : prev) + currentFullMsg[currentCharIndex - 1]);
          currentCharIndex++;
          interval = setTimeout(typeEffect, 30);
        } else {
          setText(prev => prev + '\n');
          currentMsgIndex++;
          currentCharIndex = 0;
          interval = setTimeout(typeEffect, 200);
        }
      } else {
        setCompleted(true);
        setTimeout(finishLoading, 800);
      }
    };

    typeEffect();
    return () => clearTimeout(interval);
  }, []);

  return (
    <div className={`loader-container ${completed ? 'fade-out' : ''}`}>
      <div className="loader-terminal">
        <div className="terminal-header">
          <div className="dot dot-r"></div>
          <div className="dot dot-y"></div>
          <div className="dot dot-g"></div>
          <span className="terminal-title">system@boot ~</span>
        </div>
        <div className="terminal-body mono">
          <pre>{text}<span className="blink">_</span></pre>
        </div>
      </div>
      <div className="loader-progress-track">
        <div className="loader-progress-bar"></div>
      </div>
    </div>
  );
};

export default Loader;
