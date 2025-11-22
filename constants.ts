import { Education,Experience, Project, SkillCategory } from './types';

export const DEVELOPER_NAME = "Alex Dev";
export const DEVELOPER_TITLE = "Senior Fullstack Engineer";
export const DEVELOPER_BIO = `I am a passionate Fullstack Developer with over 6 years of experience in building scalable web applications. I specialize in the JavaScript ecosystem, particularly React, Node.js, and modern cloud architectures. I love solving complex problems and crafting beautiful, intuitive user interfaces.`;

export const SOCIAL_LINKS = {
  github: "https://github.com/jagdishuikey",
  linkedin: "https://linkedin.com/in/jagdish-uikey",
  X: "https:x.com/JagdishUik2418",
  email: "juikey697@gmail.com"
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "ShadcnUi"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "MongoDB",  "PostgreSQL"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Git/Github", "Docker",  "Postman", "Canva", "Figma"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Bachelors of Engineering",
    company: "Dy Patil College of Engineering Akurdi",
    period: "2021 - Present",
    description: [
      "Led the migration of a legacy monolith to a micro-frontend architecture using React and Webpack Module Federation.",
      "Improved site performance by 40% through code splitting, lazy loading, and image optimization strategies.",
      "Mentored junior developers and established coding standards and best practices."
    ]
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Creative Agency X",
    period: "2019 - 2021",
    description: [
      "Developed custom e-commerce solutions for high-profile clients using Next.js and Shopify API.",
      "Implemented a real-time chat system using Socket.io and Redis.",
      "Collaborated closely with designers to implement pixel-perfect responsive designs."
    ]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Inc.",
    period: "2017 - 2019",
    description: [
      "Built and maintained internal tools using Vue.js and Firebase.",
      "Assisted in the development of the company's main marketing website.",
      "Participated in agile scrum meetings and sprint planning."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "BE in Information Technology",
    institution: "Dy Patil College of Engineering",
    period: "2023 - 2027",
    description: [
      "Affilated by SavitriBai Phule Pune University",
      "Current (GPA: 8.5)."
    ]
  },
  {
    id: 2,
    degree: "HSC",
    institution: "Maharashtra State Board",
    period: "2021 - 2023",
    description: [
     "Passed with Physics,Chemistry,Maths"
    ]
  }
];
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ChatApp with Video-call",
    description: "A real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO for instant messaging and also Feature Of VideoCalling By Using WebRTC",
    techStack: ["React", "WebSockets", "WebRTC", "MongoDB","Nodejs","TailwindCSS","Cloudinary"],
    link: "https://lnkd.in/dgWAa3Gp",
    github: "https://lnkd.in/dWhRrGfv",
    image: "/projects/Project_1.png"
  },
  {
    id: 2,
    title: "Tomato Full-Del App",
    description: "Tomato is a full-stack, responsive food delivery web application that allows users to browse a variety of dishes, manage a cart, place orders, and make secure payments online. It features a rich user interface for customers and a separate Admin Panel that provides control over menu items and order monitoring.",
    techStack: ["Express", "React", "Stripe", "MongoDB"],
    link: "https://lnkd.in/dyiWS294",
    github: "https://lnkd.in/dCBVBeYQ",
    image: "/projects/Tomato.jpg"
  },
  {
    id: 3,
    title: "UI Factory",
    description: "UI Factory is an AI-driven web application that allows users to generate complete UI components instantly using a simple text prompt. Whether it's HTML, CSS, JavaScript, Tailwind, Bootstrap, React, or even full-page UI layouts — GenUI creates production-ready code with live preview support.",
    techStack: ["React", "TailwindCSS", "Express", "Nodejs"],
    link: "https://demo-beryl-theta-91.vercel.app/",
    github: "https://github.com/Jagdishuikey/DEMO",
    image: "/projects/UIFactory.png"
  }
];

// Constructing the context string for the AI
export const AI_SYSTEM_INSTRUCTION = `
You are a helpful and professional AI assistant for Jagdish's portfolio website.
Your goal is to answer visitor questions about Jagdish's skills, experience, projects, and background.

Here is the context about Jagdish:

**Bio:** Passionate about creating dynamic and user-friendly web applications using modern technologies. Looking for an internship where I can contribute to impactful projects and grow as a full-stack developer.

**Skills:**
${SKILLS.map(s => `- ${s.name}: ${s.skills.join('React,Express,Nodejs,MySQL,MERN-Stack,Docker,Real-Time Application,C++,JavaScript')}`).join('\n')}

**Experience:**
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}):\n  ${e.description.join('\n  ')}`).join('\n')}

**Projects:**
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join('\n')}

**Contact Info:**
**Contact Info:**
Email: ${SOCIAL_LINKS.email}
GitHub: ${SOCIAL_LINKS.github}
LinkedIn: ${SOCIAL_LINKS.linkedin}
Twitter: ${SOCIAL_LINKS.twitter}


**Guidelines:**
- Be concise, polite, and professional.
- If asked about something not in the context, politely say you don't have that information but suggest contacting ${DEVELOPER_NAME} directly via email.
- Keep answers relatively short (under 3-4 sentences) unless asked for detail.
- Act as an advocate for Jagdish's, highlighting strengths.
`;
