export const STATS = [
  { num: '10+', label: 'LANGUAGES OCR' },
  { num: 'AI', label: 'VOICE AGENTS' },
  { num: '∞', label: 'CURIOSITY' }
];

export const SKILLS = [
  { name: 'Python', level: 'CORE LANGUAGE', fill: 'fill-neon', width: '95%' },
  { name: 'Machine Learning', level: 'SKLEARN · XGBOOST', fill: 'fill-neon', width: '85%' },
  { name: 'Deep Learning', level: 'PYTORCH · TENSORFLOW', fill: 'fill-blue', width: '80%' },
  { name: 'OCR Systems', level: 'TESSERACT · EASYOCR', fill: 'fill-blue', width: '90%' },
  { name: 'NLP / LLMs', level: 'TRANSFORMERS · OPENAI', fill: 'fill-purple', width: '85%' },
  { name: 'Voice AI', level: 'WHISPER · TTS · TWILIO', fill: 'fill-purple', width: '80%' },
  { name: 'Data Analysis', level: 'PANDAS · NUMPY', fill: 'fill-neon', width: '90%' },
  { name: 'MLOps / Deploy', level: 'FASTAPI · DOCKER · GIT', fill: 'fill-blue', width: '70%' },
];

export const PROJECTS = [
  {
    num: 'PROJECT_01',
    title: 'Multilingual OCR Engine',
    overview: 'A production-grade OCR system that extracts text from documents, images, and scanned files across 10+ languages.',
    desc: `Detailed architecture involving EasyOCR and Tesseract for multilingual support. Optimized for noisy conditions like skewed images and low resolution. Built with FastAPI for high-performance inference.`,
    relatedSkills: ['Python', 'Machine Learning', 'Deep Learning', 'OCR Systems', 'Data Analysis', 'MLOps / Deploy'],
    tags: [
      { label: 'Python', type: 'tag-neon' },
      { label: 'EasyOCR', type: 'tag-neon' },
      { label: 'Tesseract', type: 'tag-neon' },
      { label: 'OpenCV', type: 'tag-blue' },
      { label: 'FastAPI', type: 'tag-blue' },
    ],
    features: [
      'Support for 10+ Indian regional languages',
      'Skew correction and image preprocessing',
      'Mixed-script document detection',
      'API deployment for real-time extraction'
    ]
  },
  {
    num: 'PROJECT_02',
    title: 'Multilingual Voice calling Agent',
    overview: 'An autonomous AI voice agent that makes and receives phone calls, holds natural conversations.',
    desc: `Built using Whisper for STT and high-quality TTS engines. Integrated with Twilio/WebRTC for telephony. Handles dynamic user inputs and completes tasks without human intervention with low latency.`,
    relatedSkills: ['Python', 'Machine Learning', 'NLP / LLMs', 'Voice AI', 'MLOps / Deploy'],
    tags: [
      { label: 'Python', type: 'tag-neon' },
      { label: 'Whisper STT', type: 'tag-neon' },
      { label: 'LLM', type: 'tag-neon' },
      { label: 'TTS', type: 'tag-blue' },
      { label: 'Twilio / WebRTC', type: 'tag-blue' },
    ],
    features: [
      'Low-latency voice interaction',
      'Support for multiple languages',
      'Dynamic intent recognition',
      'Autonomous task completion'
    ]
  }
];

export const EXPERIENCE = [
  {
    title: 'Junior AI/ML Developer',
    company: 'Feat Systems, Mumbai',
    period: 'Present',
    description: 'Building production-grade intelligent systems. Specialized in Multilingual OCR engines across 10+ languages and autonomous Voice AI calling agents using Whisper, LLMs, and Twilio.',
    tags: ['Applied AI', 'Production']
  },
  {
    title: 'Education',
    company: 'Thakur College of Science & Commerce',
    period: '',
    description: 'Gained a strong foundation in computer science, statistics, and mathematics. Developed an early passion for machine learning and practical AI applications.',
    tags: []
  }
];
