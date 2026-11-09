export const personalInfo = {
  name: "Riman Maharjan",
  title: "Software Developer & Engineering Undergrad",
  location: "Khusibu, Kathmandu, Nepal",
  phone: "+977 9840511294",
  emails: [
    "rimanmaharjan7@gmail.com",
    "rimanmaharjan77@gmail.com",
    "080bei015.riman@sagarmatha.edu.np"
  ],
  cvPath: "/Riman_Maharjan_CV.pdf",
  heroPhoto: "/images/me-no-bg.png",
  aboutPhoto: "/images/myphoto.jpg",
  socials: {
    github: "https://github.com/riman7",
    linkedin: "https://www.linkedin.com/in/rimanmaharjan7/",
    x: "https://x.com/RimanMaharjan7",
    instagram: "https://www.instagram.com/riman_maharjan7?mdxt=MWkxN2hzdXdycGRrcw==",
    facebook: "https://www.facebook.com/riman.maharjan7"
  },
  bio: "Undergraduate in Electronics, Communication & Information Engineering at Sagarmatha Engineering College (IOE) and research member of SRDC."
};

export const skillsGrouped = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "C++", "C"]
  },
  {
    category: "Web & Full-Stack",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "SQL", "Tailwind CSS", "Socket.io", "Three.js", "HTML5 & CSS3"]
  },
  {
    category: "Tools & Concepts",
    skills: ["Git", "GitHub", "OOP (Object-Oriented Programming)", "Photoshop", "Canva"]
  },
  {
    category: "Hardware & IoT",
    skills: ["Arduino", "ESP32", "Circuit Analysis"]
  }
];

// Chronological order: SEE -> +2 -> Bachelor
export const educationStages = [
  {
    id: "see",
    period: "2008 - 2021",
    level: "Secondary School (SEE)",
    institution: "Adarsha Yog-Hari Secondary School",
    program: "Secondary Education Examination",
    score: "3.90 GPA",
    note: "Strong academic foundation in science and mathematics."
  },
  {
    id: "plus2",
    period: "2021 - 2023",
    level: "Higher Secondary (+2)",
    institution: "Viswa Niketan Higher Secondary School",
    program: "Science Stream",
    score: "3.77 GPA",
    note: "Focus on Physics, Mathematics, and Computer Science."
  },
  {
    id: "bachelor",
    period: "2024 - Present",
    level: "Bachelor's Degree",
    institution: "Sagarmatha Engineering College (IOE)",
    program: "Electronics, Communication and Information Engineering",
    score: "Undergraduate",
    note: "Active member at SRDC (Sagarmatha Research and Development Centre), collaborating on academic research."
  }
];

export const projects = [
  {
    id: "tricalendar",
    title: "TriCalendar App",
    tagline: "Multi-Calendar Synchronization & Reminder Engine",
    description: "Cross-calendar reminder system that allows auto annual remainder according to Bikram Sambat (BS) and lunar calendar (Tithi) through Java Calculations.",
    skillsDemonstrated: ["Java", "Calendar Algorithms", "React", "SQL", "JavaScript", "HTML5 & CSS3", "OOP Design"],
    linkedSkills: ["Java", "React", "SQL", "JavaScript", "HTML5 & CSS3", "OOP (Object-Oriented Programming)"],
    image: "/images/Tricalendar_preview.jpg",
    imageAspect: "square",
    github: "https://github.com/riman7/TriCalendar",
    apkDownload: "https://github.com/riman7/TriCalendar/releases",
    demo: null,
    featured: true,
    story: "In Nepal and some part of India, cultural festivals, birthdays, and ancestral ceremonies follow Bikram Sambat (solar) or Tithi (lunar) cycles, causing significant date shifting in the standard Gregorian calendar every year. Remembering these dates with standard calendar apps like Google Calendar causes annual date drift. I built TriCalendar to bridge this gap with an algorithmic engine that computes lunar tithi and solar Bikram Sambat dates accurately without requiring constant manual recalculation.",
    architecture: {
      type: "algorithmic-engine",
      diagramImage: "/images/tricalendar_daigram.png",
      note: "Capacitor.js is used to bridge and bundle the web interface into a native Android APK, providing access to native device APIs, background scheduling, and local notifications.",
      // diagram: [
      //   { step: "User Input", detail: "BS/Tithi Recurring Event Trigger" },
      //   { step: "Calendar Converter", detail: "Solar BS ↔ Lunar Tithi ↔ AD Ephemeris Engine" },
      //   { step: "Scheduler & Notifier", detail: "Local AlarmManager & Sync Service" }
      // ]
    },
    techUsed: ["Java", "React", "Capacitor.js", "SQL", "JavaScript", "HTML5 & CSS3", "Android SDK", "Git"]
  },
  {
    id: "livechat",
    title: "Live Chat Application",
    tagline: "Full-Stack Real-Time Messaging Platform",
    description: "Full-stack real-time messaging app with bi-directional WebSocket sync, user authentication, active presence, and persistent threads.",
    skillsDemonstrated: ["Full-Stack Web Architecture", "WebSocket Communication", "MongoDB Schema Design", "RESTful APIs", "Real-Time State Sync"],
    linkedSkills: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JavaScript", "HTML5 & CSS3"],
    images: [
      "/images/live-chat-preview.png",
      "/images/live-chat-login-preview.png"
    ],
    image: "/images/live-chat-preview.png",
    imageAspect: "landscape",
    github: "https://github.com/riman7",
    demo: "https://livechat.riman.com.np",
    featured: true,
    story: "This is the project I made just to lean backend development in MERN stack, so didnt much focused on frontens, so it looks ugly but works. I built this full-stack live chat system to master WebSocket connection lifecycle management, reconnect logic, MongoDB session persistence, and secure tokenized authentication under concurrent socket sessions.",
    architecture: {
      type: "real-time-socket",
      diagram: [
        { step: "Client Layer", detail: "Responsive SPA with Socket.io-client" },
        { step: "Server Layer", detail: "Express REST Endpoints + WebSocket Event Router" },
        { step: "Database Layer", detail: "MongoDB Mongoose Schemas (Users, Rooms, Messages)" }
      ]
    },
    techUsed: ["JavaScript", "Node.js", "Express.js", "Socket.io", "MongoDB", "Tailwind CSS"]
  },
  {
    id: "artgallery",
    title: "Interactive Art Gallery",
    tagline: "3D Virtual Spatial Gallery Experience",
    description: "Virtual 3D exhibition rendered live in WebGL via Three.js, featuring textured architectural interiors and spatial first-person exploration.",
    skillsDemonstrated: ["Three.js", "WebGL Shaders & Lighting", "JavaScript", "HTML5 & CSS3", "Git & GitHub Workflow"],
    linkedSkills: ["Three.js", "JavaScript", "HTML5 & CSS3", "Git", "GitHub"],
    image: "/images/art-gallery-preview.png",
    imageAspect: "landscape",
    github: "https://github.com/riman7",
    demo: "https://artgallery.pratishtha.com.np",
    featured: true,
    story: "This is the project I made for a client who wanted to show her arts in different creative ways. Traditional web galleries present digital art as flat 2D image grids. I designed this 3D exhibition space to recreate the physical sensation of stepping inside the gallery hall, real-time mesh rendering, spot lighting calculations, and first-person spatial controls natively in WebGL.",
    architecture: {
      type: "webgl-pipeline",
      diagram: [
        { step: "3D Scene & Camera", detail: "Perspective Camera + Dynamic Lighting Rig" },
        { step: "Geometry & Materials", detail: "Architectural Meshes + Texture Mapping" },
        { step: "Interaction Engine", detail: "Raycasting Exhibit Collision & Spatial Controls" }
      ]
    },
    techUsed: ["Three.js", "WebGL", "JavaScript (ES6+)", "Vite", "CSS3 3D"]
  }
];

export const achievements = {
  srdc: {
    title: "SRDC Research Team Member",
    institution: "Sagarmatha Research and Development Centre (SRDC)",
    organization: "Sagarmatha Engineering College (IOE)",
    description: "Collaborating with college faculty mentors and peer research members on technical documentation, computational prototyping, and academic research in applied electronics and intelligent software architectures."
  },
  hackathons: {
    featured: {
      title: "Best Thematic Project Winner",
      event: "Taranga: The Wave of Technology 2026",
      organization: "Purwanchal Campus (ERC), Dharan",
      badge: "Winner — Best Thematic Project",
      category: "Hardware Hackathon",
      detailsTitle: "Won Best Thematic Project Title",
      team: ["Me", "Sufal KC", "Yushant Adhikari", "Khagendra P. Agwasti"],
      theme: "Health for all",
      project: "Head-movement controlled WheelChair for person with disability or patient in hospital who are unable to walk on their own using Computer Vision",
      github: "https://github.com/riman7/head-movement-controlled-wheelchair",
      image: "/images/Dharan Hackathon.png"
    },
    others: [
      {
        id: "kathford",
        title: "Runner Up",
        event: "Kathfest 3.0",
        organization: "Kathford International College",
        badge: "Runner Up (2nd Place)",
        category: "Hackathon",
        project: "Public Transport App",
        projectDetail: "Supports multiple bus taking features including walk path showing and transit routing.",
        team: ["Me", "Sufal KC", "Yushant Adhikari", "Khagendra P. Agwasti"],
        theme: "silver",
        images: [
          "/images/Kathford Hackathon 2.jpg",
          "/images/Kathford hackathon.jpg"
        ],
        image: "/images/Kathford Hackathon 2.jpg"
      },
      {
        id: "participations",
        title: "Hackathon Participations",
        event: "Various Hackathons",
        organization: "Tourism Ministry • IOE • SEC",
        badge: "Participant",
        category: "Software & Innovation",
        participationsList: [
          {
            name: "Bagmati Tourism Hackathon",
            organizer: "Ministry of Culture and Tourism, Nepal",
            image: "/images/Bagmati_tourism.jpg"
          },
          {
            name: "KEC Software Hackathon 2025",
            organizer: "Kantipur Engineering College (IOE)",
            image: "/images/KEC Hackathon.jpeg"
          },
          {
            name: "Sagarmatha HACKX 2083",
            organizer: "Sagarmatha Engineering College",
            image: "/images/Sagarmatha_hackx.jpg"
          }
        ],
        images: [
          "/images/Bagmati_tourism.jpg",
          "/images/KEC Hackathon.jpeg",
          "/images/Sagarmatha_hackx.jpg"
        ],
        image: "/images/Bagmati_tourism.jpg"
      }
    ]
  }
};

export const languagesAndHobbies = {
  languages: ["English", "Nepali", "Newari (Nepal Bhasa)", "Hindi"],
  hobbies: ["Coding", "Listening to Music", "Chess", "Football"]
};
