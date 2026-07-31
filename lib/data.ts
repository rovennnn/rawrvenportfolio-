export const profile = {
  name: "John Roven D. Guatno",
  initials: "JRG",
  positioning: "Computer Science Graduate — Aspiring Backend & Blockchain Developer",
  location: "Botolan, Zambales, Philippines",
  email: "guatnojohnroven@gmail.com",
  phone: "+63 969 293 0260",
  linkedin: "https://linkedin.com/in/rovenguatno",
  github: "https://github.com/rovennnn",
  resumeHref: "/resume.pdf",
  about:
    "Computer Science graduate with hands-on experience in software engineering, web development, automation, and blockchain application development through academic projects and a software development internship. Proficient in Python, PHP, JavaScript, Selenium, Streamlit, and Hyperledger Fabric.",
};

export const experience = {
  role: "Software Developer Intern (On-the-Job Training)",
  org: "Zambales I Electric Cooperative Inc. (ZAMECO I)",
  location: "Palauig, Zambales",
  start: "2026-01",
  end: "2026-05",
  dateLabel: "Jan 2026 – May 2026",
  bullets: [
    "Developed 2 internal web applications using Python and Streamlit to improve document accessibility and support daily office operations.",
    "Automated the collection of ERC and NEA regulatory documents by developing Python and Selenium web scraping solutions.",
    "Performed system testing, debugging, and feature enhancements across multiple applications.",
  ],
};

export type Project = {
  id: string;
  version: string;
  name: string;
  role: string;
  dateLabel: string;
  start: string;
  stack: string[];
  summary: string;
  features: string[];
};

export const projects: Project[] = [
  {
    id: "voting-system",
    version: "v0.1",
    name: "Hyperledger Fabric Voting System",
    role: "Backend & Blockchain Developer · Thesis",
    dateLabel: "Nov 2025",
    start: "2025-11",
    stack: ["Hyperledger Fabric", "RAFT Consensus", "Node.js", "React"],
    summary:
      "Blockchain-based electronic voting system built on Hyperledger Fabric with RAFT consensus, storing every vote immutably to strengthen election transparency and resistance to tampering.",
    features: [
      "Voter authentication",
      "Role-based access control",
      "Immutable vote storage",
    ],
  },
  {
    id: "web-scraper",
    version: "v0.2",
    name: "Web Scraper Desktop Application",
    role: "Python Automation Developer",
    dateLabel: "Mar – May 2026",
    start: "2026-03",
    stack: ["Electron.js", "Python", "Selenium"],
    summary:
      "Cross-platform desktop application automating data extraction across multiple regulatory websites, with configurable settings and error handling built for daily, unattended use.",
    features: ["Web navigation", "Data parsing", "Data export"],
  },
  {
    id: "erc-nea-dms",
    version: "v0.3",
    name: "ERC & NEA Document Management System",
    role: "Full-Stack Web Developer",
    dateLabel: "Mar – May 2026",
    start: "2026-03",
    stack: ["HTML", "CSS", "JavaScript", "Vite"],
    summary:
      "Responsive web application centralizing ERC and NEA regulatory documents so staff can find what they need without digging through shared folders.",
    features: ["Search", "Filtering", "Document organization"],
  },
  {
    id: "office-reminder",
    version: "v0.4",
    name: "Office Reminder System",
    role: "Python Developer",
    dateLabel: "Feb – Apr 2026",
    start: "2026-02",
    stack: ["Python", "Streamlit"],
    summary:
      "Web-based reminder system delivering real-time notifications for document and task submissions, with separate interfaces for senders and recipients.",
    features: [
      "Task assignment",
      "Instant notifications",
      "Submission tracking",
      "Deadline reminders",
    ],
  },
];

export const skills = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "PHP", "HTML5", "CSS3"],
  },
  {
    label: "Frameworks & Tools",
    items: [
      "REST APIs",
      "Streamlit",
      "Electron.js",
      "Hyperledger Fabric",
      "Selenium",
      "Git",
      "GitHub",
    ],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB"],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  org: "President Ramon Magsaysay State University — Iba Campus",
  location: "Iba, Zambales, Philippines",
  dateLabel: "2022 – July 2026",
  award: "Academic Distinction, 2026",
};
