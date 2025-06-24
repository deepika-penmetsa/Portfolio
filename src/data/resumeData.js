import jobmatrixImage from '../data/JobMatrix.svg';
import elevateImage from '../data/elevate.svg';
import iplImage from '../data/ipl.png';
import portfolioImage from '../data/profile.png';



const resumeData = {
  personal: {
    name: "Deepika Penmetsa",
    location: "Wendell, North Carolina 27591",
    phone: "989-621-7701",
    email: "deepikapenmetsa05@gmail.com",
    linkedin: "linkedin.com/in/deepika",
    github: "github.com/deepika"
  },
  summary: "A skilled Full Stack Developer with experience in React, JavaScript, Python, SQL, and Django. Proficient in UI design, debugging, performance optimization, and API integration. Demonstrated expertise in building scalable web applications. Proven ability to enhance project workflows and development efficiency, aiming to leverage these skills to contribute to innovative and high-performance web solutions.",
  skills: {
    languages: ["Python", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
    frameworks: ["React", "GitHub", "Postman", "VS Code", "Django"],
    coursework: ["Data Structures and Algorithms"]
  },

  experience: [
    {
      title: "Engineer",
      company: "Teleflex",
      location: "Morrisville, NC",
      period: "Jul 2024 - Jun 2025",
      bullets: [
        "Developed responsive React frontend applications with Redux state management, implementing dynamic user interfaces with component-based architecture and ensuring seamless integration with Django backend APIs",
        "Engineered and developed 30+ RESTful APIs using Django REST framework integrated with AWS services (S3, RDS), contributing to a microservices architecture that reduced data processing latency by 40%",
        "Collaborated in 20+ Agile sprints using Jira and Scrum methodology, achieving 85% code coverage and a 5% reduction in defects through effective unit testing with Django’s testing framework and pytest",
        "Enhanced database performance across MySQL and PostgreSQL systems by utilizing Django ORM, implementing complex SQL queries, stored procedures, and efficient indexing strategies for optimized data retrieval"
      ],
      skills: ["React", "Redux", "Django", "RESTful APIs", "AWS Services", "Agile Methodologies", "Unit Testing", "Microservices Architecture"]
    },
    {
      title: "Graduate Research Assistant",
      company: "Central Michigan University",
      location: "Mount Pleasant, MI",
      period: "Jan 2024 - Dec 2024",
      bullets: [
        "Utilized Python and SQL to analyze large datasets, supporting research projects with data-driven insights under Dr. Liu Ming's guidance",
        "Designed and optimized SQL databases for efficient data storage and retrieval, improving query performance for research workflows",
        "Developed interactive Tableau dashboards to visualize research findings, enhancing data accessibility for academic stakeholders",
        "Automated data processing tasks using Python scripts, saving 20 hours per week and boosting research efficiency"
      ],
      skills: ["Python", "SQL", "Data Analysis", "Tableau", "Database Optimization"]
    },
    {
      title: "React Full Stack Developer",
      company: "Sony",
      location: "",
      period: "May 2022 – Jun 2023",
      bullets: [
        "Led frontend development using React JS and JavaScript, designing reusable components and enhancing application scalability.",
        "Streamlined user workflows and improved UI performance through modular architecture and optimized event handling.",
        "Built backend APIs using Django to support frontend data needs and managed data flow between services",
        "Worked closely with backend teams to integrate APIs and ensure real-time data rendering for camera ecosystem dashboards."
      ],
      skills: ["React", "JavaScript", "Django", "APIs", "Component Design", "UI Performance"]
    },
    {
      title: "Frontend Engineer",
      company: "Ignitarium",
      location: "Bengaluru, Karnataka",
      period: "Aug 2019 – Jun 2023",
      bullets: [
        "Developed and maintained dynamic UI components using React, Redux, and JavaScript for AI-powered visual defect identification tools.",
        "Collaborated with the deep learning team to integrate frontend interfaces with defect detection models, improving system usability.",
        "Optimized performance and responsiveness using lazy loading and state management."
      ],
      skills: ["React", "Redux", "JavaScript", "UI Components", "Performance Optimization", "AI Integration"]
    }
  ],
  projects: [
    
    {
      name: "Job Matrix",
      date: "May 2025",
      links: {
        live: "https://jobmatrixapp.netlify.app",
        github: "https://github.com/deepika-penmetsa/JobMatrixFrontend"
      },
      image: jobmatrixImage,
      description: "A comprehensive job portal application that connects employers and job seekers through an intuitive interface with secure authentication, powerful search capabilities, and real-time job application tracking.",
      detailedDescription: [
        "Built the Django backend for a job portal application with REST API endpoints for job postings and applications",
        "Implemented authentication, authorization, and data models for job seekers and employers",
        "Designed database schema and optimized queries for efficient job search functionality",
        "Integrated the Django backend with a React frontend through RESTful API interactions"
      ],
      technologies: ["React", "Redux" , "MySql", "JWT Auth", "Python", "Django", "REST API", "Material UI"],
      highlights: [
        "30 high-performance Web APIs using Django REST Framework",
        "Integration with AWS services for file storage",
        "Role-based access control for employers and job seekers",
        "Dockerization for streamlined deployment"
      ]
    },
    {
      name: "Elevate",
      date: "March 2025",
      links: {
        github: "https://github.com/deepika-penmetsa/StudentClubManagment"
      },
      image: elevateImage,
      description: "A dynamic college club management platform that streamlines club discovery, membership, and event participation for students while providing organizers with powerful tools for activity management and member communication.",
      detailedDescription: [
        "Developed the Frontend of a College Club Management Platform using React.js, enabling students to explore, join, and manage clubs.",
        "Designed and implemented a responsive and interactive UI for club details, announcements, events, and discussions.",
        "Integrated dynamic navigation, real-time updates, and seamless API interactions for an enhanced user experience."
      ],
      technologies: ["React", "JavaScript", "MySql", "JWT", "REST API" , "JAVA", "Springboot" , "Redux", "Material UI"],
      highlights: [
        "Interactive club discovery and management interface",
        "Real-time notifications for club events and announcements",
        "Responsive design for all device sizes",
        "Optimized state management with Redux"
      ]
    },
    {
      name: "IPL Dashboard",
      date: "May 2024",
      links: {
        live: "https://imaginative-pithivier-21ee16.netlify.app",
        github: "https://github.com/deepika-penmetsa/IPL_Dashboard"
      },
      image: iplImage,
      description: "An interactive cricket statistics platform featuring real-time match data, comprehensive team profiles, and player performance metrics for the Indian Premier League, designed with responsive visualization tools for an engaging fan experience.",
      detailedDescription: [
        "Designed and implemented an IPL Dashboard using React JS for the 2020 season, serving real-time data for over 30+ matches, 8 teams, and their complete player rosters.",
        "Utilized React JS for a dynamic and user-friendly interface, showcasing team details and statistics.",
        "Ensured 100 percent responsive design with interactive components."
      ],
      technologies: ["React", "JavaScript", "CSS", "Redux"],
      highlights: [
        "Data visualization for team and player statistics",
        "Real-time match updates and scorecards",
        "Interactive team comparison features",
        "Optimized performance for mobile devices"
      ]
    },
    {
      name: "Portfolio Website",
      date: "May 2025",
      links: {
        github: "https://github.com/deepika-penmetsa/Portfolio"
      },
      image: portfolioImage,
      description: "A modern, interactive personal portfolio website featuring a terminal-inspired interface with a responsive design, dark/light mode toggle, and project showcase to highlight my skills and development experience.",
      detailedDescription: [
        "Developed a fully responsive portfolio with React.js and styled-components using a unique terminal-inspired interface",
        "Implemented a custom projects carousel with interactive navigation and responsive layout for optimal viewing across devices",
        "Created a dark/light theme system with seamless transitions and consistent visual hierarchy",
        "Built an interactive terminal emulation with custom commands for an engaging user experience"
      ],
      technologies: ["React", "JavaScript", "Styled Components", "Framer Motion", "Responsive Design", "Terminal UI"],
      highlights: [
        "Terminal-inspired interface with command execution",
        "Fully responsive design with mobile-first approach",
        "Custom carousel with interactive navigation",
        "Seamless dark/light mode theming"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Information Systems",
      institution: "Central Michigan University",
      location: "Mt Pleasant, Michigan",
      period: "Aug 2023 - May 2025",
      // gpa: "3.8",
      type: "degree",
      description: "Focusing on advanced database systems, web application development, and business intelligence. Participated in research projects related to data visualization and analytics.",
      credentialUrl: "https://www.cmich.edu/academics/colleges/college-business-administration/information-systems"
    },
    {
      degree: "Bachelor of Technology",
      institution: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, Telangana",
      period: "Aug 2016 - May 2020",
      // gpa: "3.8",
      type: "degree",
      description: "Completed coursework in Electronics and Communication Engineering with a focus on software engineering, data structures, and web technologies. Developed multiple projects including a IPL Dashboard.",
      credentialUrl: "https://jntuh.ac.in/academics"
    },
    {
      degree: "Full Stack Web Development",
      institution: "CCBP Intensive",
      period: "Dec 2020 - Jul 2021",
      type: "certification",
      description: "Completed over 1200 hours of hands-on coding and 30+ projects covering React, Node.js, Express, and database technologies. Earned certification with distinction.",
      credentialUrl: "https://certificates.ccbp.in/"
    }
  ],
  files: {
    "welcome.md": `# Welcome to Deepika Penmetsa's Portfolio

Hello! I'm a Full Stack Developer experienced in React, JavaScript, Python, SQL, and Django.

## Navigation Guide
- **projects.json**: View my project portfolio
- **about.md**: Learn more about my skills and experience
- **contact.json**: Find my contact information

## Terminal Commands
Try these commands in the terminal below:
- \`ls\`: List available files
- \`cat <filename>\`: View file contents
- \`help\`: Show available commands
- \`clear\`: Clear the terminal
- \`sudo hire-me\`: ?

Feel free to explore my portfolio using either the sidebar navigation or the terminal!`,

    "about.md": `# About Me

I'm a Full Stack Developer with a passion for building user-friendly web applications. With expertise in React, JavaScript, Python, SQL, and Django, I create scalable solutions that deliver excellent user experiences.

## Skills

### Languages and Databases
- Python
- SQL
- Javascript
- Typescript
- HTML/CSS

### Frameworks and Tools
- React JS
- GitHub
- Postman
- VS Code
- Django

### Coursework
- Data Structures and Algorithms

## Experience

### Central Michigan University - Graduate Research Assistant
*Jan 2024 - Dec 2024, Mount Pleasant, MI*

- Assisted Professor Liu Ming's research projects and managed administrative tasks, including 5 hours of weekly office hours to assist students and streamline academic operations
- Delivered lectures to graduate classes on SQL databases and Tableau, enhancing technical proficiency for over 160 students across four sessions.

### Sony (Client) - React Full Stack Developer
*May 2022 – Jun 2023*

- Led frontend development using React JS and JavaScript, designing reusable components and enhancing application scalability.
- Streamlined user workflows and improved UI performance through modular architecture and optimized event handling.
- Built backend APIs using Django to support frontend data needs and managed data flow between services
- Worked closely with backend teams to integrate APIs and ensure real-time data rendering for camera ecosystem dashboards.

### Ignitarium - Frontend Engineer
*Aug 2020 – Jun 2023, Bengaluru, Karnataka*

- Developed and maintained dynamic UI components using React, Redux, and JavaScript for AI-powered visual defect identification tools.
- Collaborated with the deep learning team to integrate frontend interfaces with defect detection models, improving system usability.
- Optimized performance and responsiveness using lazy loading and state management.

## Education

### Central Michigan University
*Master of Science in Information Systems; GPA: 3.8*
*Anticipated Graduation: May 2025*

### CCBP Intensive
*Full Stack Web Development*
*Dec 2020 - Jul 2021*`,

    "projects.json": {
      "projects": [
        {
          "name": "Elevate",
          "description": "College Club Management Platform",
          "technologies": ["React.js", "JavaScript", "CSS"],
          "github": "https://github.com/deepika/elevate",
          "details": [
            "Developed the Frontend of a College Club Management Platform using React.js, enabling students to explore, join, and manage clubs.",
            "Designed and implemented a responsive and interactive UI for club details, announcements, events, and discussions.",
            "Integrated dynamic navigation, real-time updates, and seamless API interactions for an enhanced user experience."
          ]
        },
        {
          "name": "IPL Dashboard",
          "description": "Cricket League Stats Dashboard",
          "technologies": ["React.js", "JavaScript", "API Integration"],
          "live": "https://ipldashboard.deepika.dev",
          "github": "https://github.com/deepika/ipl-dashboard",
          "details": [
            "Designed and implemented an IPL Dashboard using React JS for the 2020 season, serving real-time data for over 30+ matches, 8 teams, and their complete player rosters.",
            "Utilized React JS for a dynamic and user-friendly interface, showcasing team details and statistics.",
            "Ensured 100 percent responsive design with interactive components."
          ]
        }
      ]
    },

    "contact.json": {
      "name": "Deepika Penmetsa",
      "location": "Wendell, North Carolina 27591",
      "email": "deepikapenmetsa05@gmail.com",
      "phone": "989-621-7701",
      "profiles": [
        {
          "network": "LinkedIn",
          "url": "https://www.linkedin.com/in/deepika-penmetsa/"
        },
        {
          "network": "GitHub",
          "url": "https://github.com/deepika-penmetsa"
        },
        {
          "network": "Email",
          "url": "mailto:deepikapenmetsa05@gmail.com"
        },
        {
          "network": "Leetcode",
          "url": "https://leetcode.com/u/deepikapenmetsa/"
        }
      ],
      "message": "I'm currently open to new opportunities. Feel free to reach out if you'd like to discuss potential collaborations!"
    }
  },
  terminalCommands: {
    "help": "Available commands: ls, cat, clear, help, cd, pwd, whoami, sudo",
    "ls": ["welcome.md", "about.md", "projects.json", "contact.json"],
    "whoami": "visitor@deepika-portfolio:~$",
    "sudo hire-me": "✨ Great choice! Let's talk about how I can contribute to your team. Send me an email at deepikapenmetsa05@gmail.com ✨",
    "vim": "I see you're a developer of culture as well... but how do you exit Vim? 😄"
  }
};

export default resumeData; 