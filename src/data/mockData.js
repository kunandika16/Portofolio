// Mock data for portfolio
export const personalInfo = {
  name: "Cut Geubrina Rizky",
  title: "Frontend & Mobile Developer",
  tagline: "Building seamless digital experiences with React, Flutter & modern web technologies",
  location: "Bandung, Indonesia",
  email: "cutgeubrinarizky7@gmail.com",
  phone: "+62 81269227680",
  linkedin: "linkedin.com/in/cutgeubrina",
  github: "github.com/cutgeubrina",
  bio: "Software Developer at PT Pos Indonesia specializing in front-end & mobile development. I deliver maintainable features, responsive UIs, and measurable performance improvements with strong collaboration and a bias to ship. With experience in React, Flutter, and Laravel, I transform complex requirements into intuitive user experiences.",
  resumeUrl: "/CV DEVELOPER - Cut Geubrina Rizky.pdf"
};

export const skills = {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "Dart", level: 85 },
    { name: "Python", level: 75 },
    { name: "PHP", level: 80 }
  ],
  frameworks: [
    { name: "React", icon: "⚛️" },
    { name: "Flutter", icon: "📱" },
    { name: "Next.js", icon: "▲" },
    { name: "Laravel", icon: "🔺" },
    { name: "React Native", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Material UI", icon: "💎" },
    { name: "Ant Design", icon: "🐜" },
    { name: "CodeIgniter", icon: "🔥" }
  ],
  tools: [
    { name: "Git", icon: "🔀" },
    { name: "Docker", icon: "🐳" },
    { name: "Figma", icon: "🎨" },
    { name: "Android Studio", icon: "🤖" },
    { name: "XCode", icon: "🍎" },
    { name: "VS Code", icon: "💻" }
  ]
};

export const projects = [
  // Internal Projects
  {
    id: 1,
    title: "Livie - Super App for Employees",
    category: "mobile",
    type: "internal",
    platform: "iOS & Android",
    description: "Comprehensive internal super app serving thousands of PT Pos Indonesia employees nationwide. Features advanced attendance tracking with GPS verification, integrated HR services including leave management and payroll access, real-time notifications, and location-based check-in/out functionality. Built with Flutter for cross-platform consistency and continuously maintained with regular feature updates and performance optimizations to enhance employee productivity and streamline internal processes.",
    technologies: ["Flutter", "Dart", "Google Maps API", "REST API", "Firebase"],
    features: [
      "Check-in/out attendance system",
      "HR service modules",
      "Location-based tracking",
      "Continuous maintenance & updates",
      "Real-time notifications"
    ],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    status: "Live - Continuous Maintenance",
    year: "2024",
    color: "#FF6B9D",
    client: "PT Pos Indonesia"
  },
  {
    id: 3,
    title: "JobMaster - Career Evaluation System",
    category: "web",
    type: "internal",
    platform: "Web",
    description: "Advanced career evaluation and job management platform designed for PT Pos Indonesia's HR operations. Features a sophisticated role-based system supporting Admin, User, Super Admin, and Admin Champion roles with distinct permissions and workflows. Includes interactive dashboards for performance tracking, comprehensive job profile management, automated evaluation workflows, organizational structure visualization, and detailed analytics. Built with React and Vite for optimal performance, utilizing Material UI for consistent user experience across all user roles.",
    technologies: ["React", "Vite", "Material UI", "REST API", "JavaScript"],
    features: [
      "Multi-role system (Admin, User, Super Admin, Admin Champion)",
      "Interactive dashboard",
      "Job profile management",
      "Evaluation workflows",
      "Org structure visualization"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    status: "Live - Continuous Updates",
    year: "2025",
    color: "#D89BB5",
    client: "PT Pos Indonesia"
  },
  {
    id: 5,
    title: "SIMTKK - Workforce Management",
    category: "web",
    type: "internal",
    platform: "Web",
    description: "Robust contract workforce management system developed with native PHP to handle PT Pos Indonesia's extensive hiring needs. Manages complete lifecycle of contract positions from vacancy creation to candidate selection. Features comprehensive vacancy management with detailed job descriptions, multi-stage application tracking system, administrative review workflows, regional data integration for nationwide operations, and contract management capabilities. Optimized for high-volume operations with efficient database queries and streamlined administrative processes.",
    technologies: ["PHP Native", "MySQL", "JavaScript", "Bootstrap", "REST API"],
    features: [
      "Vacancy management system",
      "Application tracking workflow",
      "Admin review dashboard",
      "Regional data integration",
      "Contract management"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    status: "Live - Continuous Maintenance",
    year: "2024",
    color: "#FF6B9D",
    client: "PT Pos Indonesia"
  },
  {
    id: 6,
    title: "Recruitment Portal - Pos Indonesia",
    category: "web",
    type: "internal",
    platform: "Web",
    description: "Sophisticated dual-interface recruitment platform serving PT Pos Indonesia's nationwide hiring operations. Public-facing interface provides seamless job search and application experience with intuitive multi-step forms, document upload capabilities, and real-time application tracking. Administrative interface offers comprehensive candidate management, application review workflows, interview scheduling, and detailed reporting. Built with React and Material UI to ensure consistent user experience across both interfaces, supporting high-volume recruitment campaigns and reducing application drop-off rates through optimized user journeys.",
    technologies: ["React", "Vite", "Material UI", "Form Validation", "REST API"],
    features: [
      "Public job application interface",
      "Admin management dashboard",
      "Multi-step application form",
      "Email notifications",
      "Document upload & tracking"
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    status: "Live - Continuous Updates",
    year: "2024",
    color: "#00D9FF",
    client: "PT Pos Indonesia"
  },
  {
    id: 7,
    title: "SiPendi - Early Retirement System",
    category: "web",
    type: "internal",
    platform: "Web",
    description: "Sophisticated early retirement management system designed to streamline PT Pos Indonesia's employee retirement processes. Features comprehensive multi-role architecture supporting Admin, User, Super Admin, Counselor, and Admin Regional with tailored interfaces and permissions. Includes intelligent multi-step form wizards for retirement applications, automated document management with PDF generation, workflow automation for approval processes, and regional administration capabilities. Built with React and Material UI to provide intuitive user experience while handling complex retirement calculations, document verification, and multi-level approval workflows.",
    technologies: ["React", "Material UI", "Form Wizard", "PDF Generator", "JavaScript"],
    features: [
      "Multi-role system (Admin, User, Super Admin, Counselor, Admin Regional)",
      "Multi-step form wizard",
      "Document management",
      "Workflow automation",
      "PDF report generation"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    status: "Live - Continuous Maintenance",
    year: "2024",
    color: "#D89BB5",
    client: "PT Pos Indonesia"
  },
  {
    id: 8,
    title: "Explora - Knowledge Management",
    category: "web",
    type: "internal",
    platform: "Web",
    description: "Comprehensive knowledge management system serving as PT Pos Indonesia's central hub for internal knowledge sharing and collaboration. Features interactive dashboards with analytics and insights, sophisticated role-based access control for User, Admin, and Super Admin roles. Includes advanced knowledge base management, event submission system with gamified leaderboards, comprehensive search functionality, and collaborative tools for knowledge creation and sharing. Built with React, Vite, and Material UI to provide fast, responsive experience while managing extensive knowledge repositories and facilitating organization-wide learning and development initiatives.",
    technologies: ["React", "Vite", "Material UI", "REST API", "JavaScript"],
    features: [
      "Multi-role system (User, Admin, Super Admin)",
      "Interactive dashboard",
      "Event submission & leaderboard",
      "Knowledge base management",
      "Advanced search functionality"
    ],
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80",
    status: "Live - Continuous Updates",
    year: "2024",
    color: "#E8B4C8",
    client: "PT Pos Indonesia"
  },
  
  // Freelance Projects
  {
    id: 9,
    title: "Music Rent - Instrument Rental Platform",
    category: "mobile",
    type: "freelance",
    platform: "iOS & Android",
    description: "Full-featured cross-platform mobile application revolutionizing musical instrument rental services. Provides comprehensive instrument catalog with detailed specifications and high-quality images, real-time availability checking, seamless booking system with calendar integration, secure payment processing through Stripe, and automated inventory management. Built with React Native and Firebase for optimal performance across iOS and Android platforms. Features user profiles, rental history tracking, push notifications for booking confirmations and reminders, and administrative tools for inventory management and customer support.",
    technologies: ["React Native", "Firebase", "Stripe API", "JavaScript", "REST API"],
    features: [
      "Cross-platform mobile app",
      "Instrument catalog & search",
      "Real-time booking system",
      "Payment gateway integration",
      "Inventory management"
    ],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    status: "Live",
    year: "2024",
    color: "#8A2BE2",
    client: "Private Client"
  },
  {
    id: 2,
    title: "NFC Logger - Smart Tracking App",
    category: "mobile",
    type: "freelance",
    platform: "Android",
    description: "Sophisticated NFC-based tracking and logging application designed for logistics and asset management operations. Features advanced NFC tag reading and writing capabilities, precise GPS location tracking with coordinate logging, automatic timestamp recording for all interactions, and comprehensive data export functionality to CSV format. Built with Flutter for robust Android performance and integrated with Google Apps Script for seamless data processing and cloud synchronization. Includes offline data storage capabilities, batch processing for multiple scans, detailed logging history, and administrative dashboard for data analysis and reporting.",
    technologies: ["Flutter", "Google Apps Script", "NFC API", "Location Services", "CSV Export"],
    features: [
      "NFC tag reading & writing",
      "GPS location tracking",
      "Automatic timestamp recording",
      "CSV data export",
      "Offline data storage"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    status: "In Development",
    year: "2024",
    color: "#00D9FF",
    client: "Logistics Company"
  },
  
  // Startup Project
  {
    id: 4,
    title: "TemuHobi - Sports Community Platform",
    category: "web",
    type: "startup",
    platform: "Web",
    description: "Innovative sports community platform designed to connect sports enthusiasts and facilitate sporting activities. Features sophisticated partner discovery and matching system based on skill levels, location, and preferences. Includes comprehensive field booking system with real-time availability, integrated Google Maps for venue locations, community chat features for team coordination, and event organization tools with RSVP management. Built with React, Vite, and Ant Design for modern user experience. Supports multi-role system with User, Admin, and Super Admin capabilities, enabling community management, event moderation, and platform administration for growing sports communities.",
    technologies: ["React", "Vite", "Ant Design", "Google Maps API", "WebSocket"],
    features: [
      "Multi-role system (User, Admin, Super Admin)",
      "Partner discovery & matching",
      "Field booking system",
      "Community chat features",
      "Event organization & management"
    ],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    status: "In Development",
    year: "2025",
    color: "#E8B4C8",
    client: "Startup Venture"
  },
  
  // UI/UX Project
  {
    id: 10,
    title: "COK UBAT - Hospital Pharmacy Queue System",
    category: "design",
    type: "ui ux",
    platform: "UI/UX Design",
    description: "UI/UX design for queuing system applications in the process of taking drugs at hospital pharmacies. There are three user groups for this project, namely Health Workers, Pharmacists and Patients. Where from the three groups of users, observations and interviews have been carried out and produce analysis results based on copies of observations and interviews that have been carried out. Developed comprehensive design solutions to streamline pharmacy operations and improve patient experience through intuitive interface design.",
    technologies: ["Figma", "User Research", "Prototyping", "User Testing", "Design System"],
    features: [
      "Multi-user role system (Health Workers, Pharmacists, Patients)",
      "Queue management interface",
      "Real-time status tracking",
      "User research & analysis",
      "Comprehensive design system"
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    status: "Completed",
    year: "2022",
    color: "#9333EA",
    client: "Academic Project"
  },
  
  // Data Processing Project
  {
    id: 11,
    title: "BPS Data String Similarity Analysis",
    category: "data",
    type: "data",
    platform: "Data Processing",
    description: "Calculating equality value between strings in BPS Data of Aceh Province using Levenshtein Distance and Fuzzy String Matching methods. Processing and modeling of the 2020 Population Census Data (SP2020) which was implemented in July using Python. The data provided is the 2020 Population Census Data (SP2020). In this data there are several errors in data labeling. The label consists of 'red', 'green', and 'orange', 'red' is a label for data that does not match, 'green' label for data that matches, and 'orange' label for data that may match. The dominant error occurs in data labeled 'orange'. Based on the results of the data visualization, it is explained that the dominant initial data error lies in the data labeled 'orange'. So that after calculating the similarity value between strings and giving a new label to the data, the error can be corrected. Some data labeled 'orange' has been changed to 'green' and also 'red'. The same thing is done for the initial data labeled 'green' and 'red' if it has label errors.",
    technologies: ["Python", "Pandas", "Levenshtein Distance", "Fuzzy String Matching", "Data Visualization"],
    features: [
      "String similarity calculation algorithms",
      "Automated data error detection",
      "Label correction and reclassification",
      "Data visualization and analysis",
      "Large-scale dataset processing"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    status: "Completed",
    year: "2022",
    color: "#059669",
    client: "BPS Aceh Province"
  }
];

export const experience = [
  {
    id: 1,
    company: "PT Pos Indonesia",
    position: "Software Developer (Frontend/Mobile)",
    duration: "Aug 2023 - Present",
    location: "Bandung, Indonesia",
    description: "Building and shipping web & mobile features with React, Flutter, and Laravel. Delivered 30+ reusable components and improved load performance through code-splitting.",
    highlights: [
      "Shipped 8+ production applications",
      "Built 30+ reusable UI components",
      "Improved performance with code-splitting",
      "Collaborated with design & product teams"
    ]
  }
];

export const certifications = [
  {
    id: 1,
    title: "Big Data Analytics Virtual Internship Experience",
    organization: "Kimia Farma - Rakamin Academy",
    type: "Project-Based Internship",
    duration: "Oct 2022",
    description: "Completed comprehensive big data analytics project focusing on pharmaceutical industry data analysis and insights generation."
  },
  {
    id: 2,
    title: "Machine Learning Foundation",
    organization: "Amazon Web Services (AWS) - KOMINFO Fresh Graduate Academy",
    type: "Professional Certification",
    duration: "Oct 2022",
    description: "Successfully completed comprehensive machine learning program covering data collection, security, evaluation, feature engineering, model training, hosting, accuracy evaluation, hyperparameter tuning, forecasting, computer vision, and natural language processing."
  },
  {
    id: 3,
    title: "Instructor Assistant - Big Data Using Python",
    organization: "USK University × FGA × Cisco - Digital Talent Scholarship",
    type: "Teaching Assistant",
    duration: "Jul - Sep 2022",
    description: "Assisted 25 students in learning Python fundamentals and big data concepts for 5 weeks, achieving 40% knowledge improvement weekly."
  },
  {
    id: 4,
    title: "Product Management Career Starter Kit",
    organization: "Binar Academy - KOMINFO Fresh Graduate Academy",
    type: "Professional Training",
    duration: "May - Jun 2022",
    description: "Completed comprehensive product management training covering methodology, fundamentals, company and customer understanding, customer journey mapping, and product strategy."
  },
  {
    id: 5,
    title: "Assistant Microcredential Artificial Intelligence",
    organization: "Kampus Merdeka",
    type: "Teaching Assistant",
    duration: "Nov - Dec 2021",
    description: "Assisted 30 students in learning Python basics, artificial intelligence concepts, and data visualization for 6 weeks."
  },
  {
    id: 6,
    title: "Intro to Data Analytics Mini Course",
    organization: "RevoU",
    type: "Professional Course",
    duration: "Nov 2021",
    description: "Completed intensive 1-week data analytics fundamentals course covering essential concepts and practical applications."
  },
  {
    id: 7,
    title: "Big Data using Python",
    organization: "Cisco - KOMINFO Fresh Graduate Academy",
    type: "Professional Certification",
    duration: "Jul - Sep 2021",
    description: "Completed comprehensive 32-session program covering Python fundamentals, data types, OOP, modules, packages, and big data implementation with practical applications."
  }
];


export const education = {
  institution: "Syiah Kuala University",
  degree: "Bachelor of Computer Science",
  major: "Computer Science",
  duration: "Aug 2018 - Sep 2022",
  gpa: "3.77/4.0",
  location: "Aceh, Indonesia"
};
