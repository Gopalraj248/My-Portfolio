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
    title: 'Smart-Face-Attendance-System',
    overview: 'Automated attendance system using real-time facial recognition for schools and offices.',
    desc: `Integrated facial recognition system built with OpenCV and Dlib. It captures live video feed, detects faces, and matches them against a pre-trained database to log attendance automatically. Features a secure local database and analytics dashboard.`,
    relatedSkills: ['Python', 'Machine Learning', 'Deep Learning', 'Data Analysis'],
    tags: [
      { label: 'Python', type: 'tag-neon' },
      { label: 'OpenCV', type: 'tag-neon' },
      { label: 'Dlib', type: 'tag-blue' },
      { label: 'Face Recognition', type: 'tag-blue' },
    ],
    features: [
      'Real-time multiple face detection',
      'Automated attendance logging',
      'Secure data storage',
      'Analytics dashboard for occupancy'
    ]
  },
  {
    num: 'PROJECT_02',
    title: 'RT-DETR Object Detection',
    overview: 'High-speed object detection using the state-of-the-art RT-DETR transformer model.',
    desc: `Implementation of Real-Time DEtection TRansformer (RT-DETR). Unlike traditional detectors, it uses a transformer architecture to achieve high accuracy and real-time speeds by eliminating the need for NMS. Optimized for rapid inference.`,
    relatedSkills: ['Python', 'Deep Learning', 'Machine Learning', 'MLOps / Deploy'],
    tags: [
      { label: 'Python', type: 'tag-neon' },
      { label: 'PyTorch', type: 'tag-neon' },
      { label: 'RT-DETR', type: 'tag-blue' },
      { label: 'Transformers', type: 'tag-blue' },
    ],
    features: [
      'End-to-end detection transformer',
      'Real-time inference speed',
      'SOTA accuracy in COCO dataset',
      'NMS-free processing pipeline'
    ]
  },
  {
    num: 'PROJECT_03',
    title: 'Mistral-OCR App',
    overview: 'Intelligent document understanding and extraction using Mistral AI vision-language models.',
    desc: `A powerful application leveraging Mistral's OCR API to extract text, tables, and mathematical expressions from complex PDFs and images. Built with Streamlit for a seamless user experience in document processing.`,
    relatedSkills: ['Python', 'NLP / LLMs', 'OCR Systems', 'MLOps / Deploy'],
    tags: [
      { label: 'Python', type: 'tag-neon' },
      { label: 'Mistral AI', type: 'tag-neon' },
      { label: 'LLM', type: 'tag-blue' },
      { label: 'Streamlit', type: 'tag-blue' },
    ],
    features: [
      'Complex document understanding',
      'Structured Markdown/JSON output',
      'Support for math and table extraction',
      'High accuracy LLM-based OCR'
    ]
  },
  {
    num: 'PROJECT_04',
    title: 'Tesseract OCR Project',
    overview: 'Flexible OCR implementation using Google\'s Tesseract engine with advanced preprocessing.',
    desc: `A comprehensive wrapper for Tesseract OCR that handles various document formats. Includes image preprocessing pipelines like skew correction and denoising using OpenCV to maximize extraction quality for scanned files.`,
    relatedSkills: ['Python', 'OCR Systems', 'Data Analysis', 'MLOps / Deploy'],
    tags: [
      { label: 'Python', type: 'tag-neon' },
      { label: 'Tesseract', type: 'tag-neon' },
      { label: 'OpenCV', type: 'tag-blue' },
      { label: 'Image Processing', type: 'tag-blue' },
    ],
    features: [
      'Support for 100+ languages',
      'Image denoising and Binarization',
      'Skew detection and correction',
      'Batch processing for multi-page PDF/Images'
    ]
  }
];

export const EXPERIENCE = [
  {
    title: 'Junior AI/ML Developer',
    company: 'Feat Systems, Mumbai',
    period: 'Present',
    description: 'Building production-grade intelligent systems. Specialized in Multilingual OCR engines and autonomous Voice AI calling agents using Whisper, LLMs, and Twilio.',
    tags: ['Applied AI', 'OCR', 'Voice AI', 'Production']
  },
  {
    title: 'Education',
    company: 'Thakur College of Science & Commerce',
    period: '',
    description: 'Gained a strong foundation in computer science, statistics, and mathematics. Developed an early passion for machine learning and practical AI applications.',
    tags: []
  }
];
