// Nitto Joshi Portfolio Data Structure

export const PERSONAL_INFO = {
  name: "NITTO JOSHI",
  shortName: "NJ.",
  title: "FULL-STACK DEVELOPER • UI/UX DESIGNER • CREATIVE DEVELOPER",
  roles: [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Creative Developer",
    "Content Creator",
    "Videographer",
    "Video Editor"
  ],
  tagline: "I BUILD • SOLVE • CREATE",
  coreIdentity: "SKILLED CREATIVELY.",
  philosophy: "Logical problem-solving: Understand problems, think logically, learn what is necessary, and build solutions.",
  location: "Thrissur, Kerala, India",
  college: "St. Thomas College (Autonomous), Thrissur",
  degree: "B.Sc. Computer Science",
  duration: "2024–2028",
  academics: {
    tenth: "Full A+",
    twelfth: "95.5%",
    collegeDegree: "B.Sc. Computer Science (Expected 2028)"
  },
  socials: [
    { name: "GitHub", url: "https://github.com/#", label: "github.com/nittojoshi", handle: "@nittojoshi" },
    { name: "LinkedIn", url: "https://linkedin.com/in/#", label: "linkedin.com/in/nittojoshi", handle: "nitto-joshi" },
    { name: "Instagram", url: "https://instagram.com/#", label: "instagram.com/nittojoshi", handle: "@nittojoshi" },
    { name: "YouTube", url: "https://youtube.com/@#", label: "youtube.com/@nittojoshi", handle: "@nittojoshi" },
    { name: "Email", url: "mailto:nittojoshi@example.com", label: "nittojoshi@example.com", handle: "nittojoshi@example.com" }
  ],
  interests: [
    { label: "Coding & Logic", icon: "Code", desc: "Logical problem solver who loves challenges." },
    { label: "Robotics", icon: "Bot", desc: "Passionate about robotics, circuits and building ideas." },
    { label: "Videography & Storytelling", icon: "Camera", desc: "Creative in videography, editing, and visual pacing." },
    { label: "Culinary & Exploration", icon: "Soup", desc: "Cooking, exploring, and creating in everyday life." }
  ]
};

export const PROJECTS_DATA = [
  {
    id: "sgs-app",
    featured: true,
    number: "01",
    title: "SGS APP",
    subtitle: "Geo-fence Attendance Application",
    category: "Full-Stack & Mobile",
    type: "Client / Practical Project",
    status: "ONGOING",
    role: "App Developer & Logic Builder",
    tech: ["Kotlin", "FastAPI", "API", "Geofencing", "PostgreSQL"],
    problem: "Manual attendance marking in large organizations and teams is slow, error-prone, and prone to proxy records.",
    solution: "Engineered an automated location-aware attendance platform using strict geofencing algorithms and lightweight FastAPI endpoints, verifying real-time coordinates seamlessly on device check-ins.",
    highlight: "GEOFENCING AUTOMATION LOGIC",
    whatBuilt: "Engineered the cross-platform application UI, client-side geofencing trigger pipeline, and backend sync logic.",
    metrics: "Automated real-time boundary verification under 300ms.",
    tags: ["Mobile", "Geofence", "Automation", "FastAPI", "Kotlin"]
  },
  {
    id: "chem-lab",
    featured: false,
    number: "02",
    title: "Chemistry Laboratory Management",
    subtitle: "Reagent, Glassware & Inventory System",
    category: "Web & Systems",
    type: "College / Client Project",
    status: "COMPLETED",
    role: "Lead Full-Stack Developer",
    tech: ["PHP / Python", "MySQL", "JavaScript", "HTML/CSS"],
    problem: "Tracking chemical reagents, hazard levels, shelf life, and glass equipment across lab sessions was chaotic with paper ledgers.",
    solution: "Developed a comprehensive digital inventory and requisition management system with access control, stock auditing, and instant chemical lookup.",
    highlight: "DATABASE & WORKFLOW DESIGN",
    whatBuilt: "Full relational database schema, administrative portal, student request workflows, and chemical stock tracking.",
    tags: ["Web Dev", "Database", "System Design", "Management Workflow"]
  },
  {
    id: "timetable-creator",
    featured: false,
    number: "03",
    title: "Automatic Timetable Creator",
    subtitle: "Constraint-Based Academic Scheduling Engine",
    category: "Logic & Automation",
    type: "College Project",
    status: "COMPLETED",
    role: "Algorithm & Logic Architect",
    tech: ["Python", "JavaScript", "Constraint Optimization", "Web UI"],
    problem: "Faculty schedules, lab clashes, room capacities, and course credits made manual timetable creation take weeks with frequent conflicts.",
    solution: "Designed an automated scheduling engine that processes complex faculty constraints, room availability, and subject allocations to produce conflict-free weekly timetables in seconds.",
    highlight: "ALGORITHMIC SCHEDULING",
    whatBuilt: "Constraint satisfaction engine, interactive drag-and-adjust interface, and exportable grid matrices.",
    tags: ["Logic", "Automation", "Scheduling", "Problem Solving"]
  },
  {
    id: "treasure-hunt",
    featured: false,
    number: "04",
    title: "Virtual Treasure Hunt",
    subtitle: "Interactive Multi-Stage Puzzle Arena",
    category: "Creative & Interactive",
    type: "College Project",
    status: "COMPLETED",
    role: "Game Logic & Web Developer",
    tech: ["React", "JavaScript", "CSS Animation", "State Engine"],
    problem: "Engaging hundreds of students concurrently during college tech festivals with an immersive digital adventure.",
    solution: "Created an interactive web-based puzzle game with dynamic stage progression, cryptographic clues, animated interactions, and live leaderboard updates.",
    highlight: "GAME LOGIC & INTERACTION",
    whatBuilt: "Front-end gameplay engine, interactive cipher interfaces, and session state tracking.",
    tags: ["Web Dev", "Game Logic", "Interaction", "Puzzles"]
  },
  {
    id: "timeslot-booking",
    featured: false,
    number: "05",
    title: "Time Slot Booking Website",
    subtitle: "Frictionless Scheduling & Capacity Planner",
    category: "UI/UX & Web",
    type: "Practical Project",
    status: "COMPLETED",
    role: "UI/UX Designer & Web Developer",
    tech: ["HTML/CSS", "JavaScript", "Backend API", "UI/UX"],
    problem: "Overbooking and lack of real-time slot visibility caused scheduling bottlenecks.",
    solution: "Designed a clean, ultra-responsive appointment interface with live availability indicators and instant confirmation flows.",
    highlight: "INTUITIVE SCHEDULING UI",
    whatBuilt: "Visual calendar picker, responsive slot allocation logic, and confirmation messaging.",
    tags: ["UI/UX", "Scheduling", "Web Development"]
  },
  {
    id: "ccd-website",
    featured: false,
    number: "06",
    title: "CCD Website Development",
    subtitle: "Institutional Portal & Showcase",
    category: "Web & Systems",
    type: "College Project",
    status: "COMPLETED",
    role: "Front-End Developer",
    tech: ["HTML5", "Vanilla CSS", "JavaScript", "Responsive Design"],
    problem: "Need for a clean, accessible digital presence to showcase departmental initiatives and resources.",
    solution: "Built a responsive, fast-loading modern web portal emphasizing clarity, semantic markup, and seamless navigation.",
    highlight: "CLEAN INSTITUTIONAL WEB",
    whatBuilt: "Complete responsive layout, typography system, and structured resource directory.",
    tags: ["College Project", "Web Development", "Responsive Design"]
  },
  {
    id: "sip-ads",
    featured: false,
    number: "07",
    title: "SIP Ads Website",
    subtitle: "Promotional Platform & Campaign Hub",
    category: "Creative & Web",
    type: "Practical Work",
    status: "COMPLETED",
    role: "Web Developer",
    tech: ["Web Development", "Interactive UI", "CSS Motion"],
    problem: "Showcasing advertisement concepts and interactive marketing campaigns effectively.",
    solution: "Crafted an eye-catching campaign landing page with smooth visual transitions and structured content sections.",
    highlight: "PRACTICAL WEB DEVELOPMENT",
    whatBuilt: "Interactive media galleries, campaign showcase grids, and visual identity styling.",
    tags: ["Web Development", "Practical Work", "Advertising Hub"]
  }
];

export const EXPERIENCE_DATA = [
  {
    category: "Internships & Practical Work",
    items: [
      {
        title: "SGS App Developer",
        role: "App Developer & Logic Builder",
        type: "Practical Project",
        desc: "Engineered automated geofencing check-in workflows, mobile user interface, and resilient API communication with FastAPI.",
        tags: ["Kotlin", "FastAPI", "Geofencing", "Logic"]
      },
      {
        title: "Chemistry Laboratory Management Website",
        role: "Full-Stack Developer",
        type: "Client / Department Project",
        desc: "Designed and implemented full-stack laboratory inventory system, chemical asset tracking, and role-based administrative dashboards.",
        tags: ["Web Dev", "Database", "System Design"]
      },
      {
        title: "College Automatic Timetable Scheduler",
        role: "Algorithm & System Builder",
        type: "College Systems",
        desc: "Developed algorithmic logic to resolve multi-variable faculty, room, and syllabus constraints into conflict-free schedule matrices.",
        tags: ["Python", "Algorithms", "Automation"]
      },
      {
        title: "SIP Ads Website",
        role: "Web Developer",
        type: "Practical Work",
        desc: "Built modern web layout and campaign presentation interfaces with emphasis on responsive performance.",
        tags: ["Web Development", "Front-End"]
      },
      {
        title: "CosmoBooks Social Media Content Creator",
        role: "Content Creator & Video Editor",
        type: "Part-time / Practical",
        desc: "Conceptualized, filmed, and edited engaging social media video content, driving community reach and brand storytelling.",
        tags: ["Videography", "Video Editing", "Content Creation"]
      },
      {
        title: "Solar Panel Installation & Field Tech",
        role: "Field Technical Specialist",
        type: "Hardware & Practical",
        desc: "Hands-on electrical wiring, structural mounting, inverter configuration, and physical system commissioning.",
        tags: ["Hardware", "Clean Energy", "Hands-on"]
      },
      {
        title: "CCTV Installation & Network Setup",
        role: "Systems Specialist",
        type: "Hardware & Security",
        desc: "Configured multi-channel IP/analog camera installations, DVR/NVR network routing, and security monitoring setups.",
        tags: ["Networking", "Hardware", "Security Systems"]
      }
    ]
  },
  {
    category: "Freelance & Client Solutions",
    items: [
      {
        title: "Freelance Website Development",
        role: "Independent Creative Developer",
        type: "Freelance",
        desc: "Designing and coding tailored websites, bespoke landing pages, and web applications for clients with focus on clean aesthetics and fast load times.",
        tags: ["Full-Stack", "UI/UX", "Creative Dev"]
      },
      {
        title: "Video Editing & Content Creation",
        role: "Visual Creator & Editor",
        type: "Freelance / Part-time",
        desc: "Crafting polished video edits, pacing, color grading, sound design, and promotional media for online creators and brands.",
        tags: ["Premiere / FCP", "Motion Design", "Visual Storytelling"]
      }
    ]
  },
  {
    category: "Hackathons & Technical Arenas",
    items: [
      {
        title: "Jyothi Engineering College Hackathon",
        role: "Participant & Rapid Prototyper",
        type: "Competitive Hackathon",
        desc: "Engineered working software prototype within 24-hour sprint addressing real-world problem statements through rapid development.",
        tags: ["Rapid Prototyping", "Team Collaboration", "Problem Solving"]
      },
      {
        title: "Rajagiri Hackathon",
        role: "Technical Innovator",
        type: "Competitive Hackathon",
        desc: "Brainstormed, architected, and built technical solutions against competitive collegiate developer teams.",
        tags: ["System Architecture", "Hackathon", "Coding"]
      },
      {
        title: "State & Collegiate Tech Challenges",
        role: "Competitor",
        type: "Competitive Events",
        desc: "Regular competitor across inter-college coding, debugging, and innovation marathons.",
        tags: ["Algorithms", "Debugging", "Sprint"]
      }
    ]
  }
];

export const COMPETITIONS_DATA = [
  {
    category: "Robotics Podiums",
    accent: "teal",
    items: [
      { name: "Line Follower Robot", badge: "1st Place Winner", desc: "Autonomous PID-tuned robot built from scratch navigating high-speed tracks." },
      { name: "RC Car Racing", badge: "1st Place Winner", desc: "High-torque, responsive remote-controlled chassis engineering and precision maneuvering." },
      { name: "Robo Maze", badge: "1st Place Winner", desc: "Autonomous maze solver utilizing ultrasonic sensor mapping and logical backtracking." },
      { name: "Robotics Competitions", badge: "Multiple 1st Places", desc: "Demonstrated superior mechanical build quality, sensor calibration, and embedded code logic." }
    ]
  },
  {
    category: "Computer Science & Problem Solving",
    accent: "dark",
    items: [
      { name: "Technical Quiz", badge: "1st Place Winner", desc: "Deep knowledge of core CS theory, operating systems, networking, and algorithms." },
      { name: "Competitive Coding", badge: "Podium Finish", desc: "Speed programming and algorithmic problem decomposition under strict time constraints." },
      { name: "Debugging Marathons", badge: "1st Place Winner", desc: "Rapid code tracing, syntax/logic defect hunting, and optimization in multi-language environments." },
      { name: "Ideathon & Innovation", badge: "Top Contender", desc: "Presenting viable technological solutions for community and infrastructural problems." }
    ]
  },
  {
    category: "Special Honors",
    accent: "gold",
    items: [
      {
        name: "Social Commitment Award",
        badge: "Honored Recipient",
        desc: "Awarded for exceptional academic and community performance in 12th Grade (95.5%)."
      },
      {
        name: "Academic Excellence",
        badge: "Full A+ & 95.5%",
        desc: "Full A+ in 10th Grade and 95.5% in 12th Grade, reflecting rigorous logical discipline."
      }
    ]
  }
];

export const SKILLS_DATA = {
  development: [
    { name: "Python", category: "Backend / Logic", level: "Core" },
    { name: "Kotlin", category: "Mobile / Android", level: "Core" },
    { name: "JavaScript", category: "Full-Stack Logic", level: "Core" },
    { name: "React", category: "Modern UI / SPA", level: "Core" },
    { name: "FastAPI", category: "High-Performance APIs", level: "Core" },
    { name: "Flask", category: "Microservices", level: "Proficient" },
    { name: "HTML5 / CSS3", category: "Semantic & Responsive", level: "Core" },
    { name: "Next.js", category: "SSR & Web Apps", level: "Proficient" },
    { name: "Flutter", category: "Cross-Platform", level: "Proficient" },
    { name: "Java", category: "OOP & Systems", level: "Proficient" },
    { name: "C / C++", category: "Embedded & Logic", level: "Proficient" },
    { name: "PHP", category: "Server Scripts", level: "Proficient" },
    { name: "Docker", category: "Containerization", level: "Proficient" },
    { name: "Bash", category: "Scripting & Automation", level: "Proficient" }
  ],
  database: [
    { name: "MySQL", category: "Relational DB", level: "Core" },
    { name: "PostgreSQL", category: "Relational DB", level: "Core" },
    { name: "SQLite", category: "Embedded DB", level: "Core" },
    { name: "SQL", category: "Query Optimization", level: "Core" }
  ],
  creative: [
    { name: "UI/UX Design", category: "Interface Architecture", level: "Core" },
    { name: "Videography", category: "Cinematography & Framing", level: "Core" },
    { name: "Video Editing", category: "Pacing & Storytelling", level: "Core" },
    { name: "Motion Design", category: "Interaction & Timing", level: "Core" },
    { name: "Photoshop", category: "Image Manipulation", level: "Proficient" },
    { name: "Blender", category: "3D Modeling Basics", level: "Proficient" },
    { name: "Canva", category: "Visual Layouts", level: "Proficient" }
  ],
  tools: [
    { name: "Git & GitHub", category: "Version Control", level: "Core" },
    { name: "REST APIs", category: "Integration", level: "Core" },
    { name: "Firebase", category: "BaaS & Realtime", level: "Proficient" },
    { name: "AI Tools", category: "Assisted Workflows", level: "Core" },
    { name: "Database Tech", category: "Data Modeling", level: "Core" },
    { name: "Geofencing", category: "Location Logic", level: "Core" }
  ]
};

export const SERVICES_DATA = [
  {
    tier: "DIGITAL",
    title: "Web · Apps · APIs · Systems",
    desc: "Architecting robust web systems, intuitive mobile apps, and high-throughput APIs built with clean code and resilient databases.",
    capabilities: [
      "Full-Stack Web Applications",
      "Mobile App Development (Kotlin / Flutter)",
      "FastAPI & Flask REST Microservices",
      "Database Architecture & SQL Optimization",
      "System Automation & Workflow Engines"
    ]
  },
  {
    tier: "CREATIVE",
    title: "UI/UX · Video · Content · Motion",
    desc: "Bridging technical precision with strong editorial aesthetics, cinematic video pacing, and engaging visual media.",
    capabilities: [
      "Editorial & High-Impact UI/UX Design",
      "Cinematic Videography & Pacing",
      "Post-Production & Video Editing",
      "Interactive Motion & Micro-Interactions",
      "Social Media Content Strategy"
    ]
  },
  {
    tier: "EXPERIMENTAL",
    title: "Robotics · Automation · AI · New Ideas",
    desc: "Exploring the boundary where code meets physical hardware, sensor logic, autonomous robotics, and applied intelligence.",
    capabilities: [
      "Autonomous Line & Maze Robotics",
      "Sensor Integration & Hardware Logic",
      "Geofence & Location-Based Systems",
      "Algorithmic Problem Solving & Solvers",
      "Rapid Prototype Development"
    ]
  }
];

export const CERTIFICATIONS_DATA = [
  {
    title: "Internship & Practical Certificates",
    category: "Industry & Projects",
    status: "Verified Records"
  },
  {
    title: "Robotics Competition Winner Certificates",
    category: "1st Place Awards",
    status: "Verified Records"
  },
  {
    title: "Technical & Coding Podiums",
    category: "Hackathons & Debugging",
    status: "Verified Records"
  },
  {
    title: "Academic & Social Commitment Honors",
    category: "Institution Recognitions",
    status: "Verified Records"
  }
];
