export type Opportunity = {
  id: number;
  company: string;
  role: string;
  type: "Internship" | "Full-time";
  location: string;
  mode: "Remote" | "Hybrid" | "On-site";
  salary: string;
  deadline: string;
  skills: string[];
  logo: string;
  category: "Frontend" | "Backend" | "Full Stack" | "Software";
};

export type Application = {
  id: number;
  company: string;
  role: string;
  appliedDate: string;
  status: "Applied" | "Shortlisted" | "Interview" | "Selected" | "Rejected";
  nextStep?: string;
};

export const opportunities: Opportunity[] = [
  {
    id: 1,
    company: "NovaTech",
    role: "Frontend Developer Intern",
    type: "Internship",
    location: "Bengaluru, India",
    mode: "Hybrid",
    salary: "₹25,000 / month",
    deadline: "2026-09-10",
    skills: ["React.js", "JavaScript", "Tailwind CSS"],
    logo: "NT",
    category: "Frontend",
  },
  {
    id: 2,
    company: "CloudNest",
    role: "React Developer",
    type: "Full-time",
    location: "Remote",
    mode: "Remote",
    salary: "₹7–10 LPA",
    deadline: "2026-09-15",
    skills: ["React.js", "TypeScript", "REST APIs"],
    logo: "CN",
    category: "Frontend",
  },
  {
    id: 3,
    company: "ByteWorks",
    role: "Full Stack Developer Intern",
    type: "Internship",
    location: "Pune, India",
    mode: "On-site",
    salary: "₹20,000 / month",
    deadline: "2026-09-25",
    skills: ["React", "Node.js", "MongoDB"],
    logo: "BW",
    category: "Full Stack",
  },
  {
    id: 4,
    company: "DataForge",
    role: "Software Engineer Intern",
    type: "Internship",
    location: "Gurugram, India",
    mode: "Hybrid",
    salary: "₹30,000 / month",
    deadline: "2026-09-30",
    skills: ["Java", "DSA", "SQL"],
    logo: "DF",
    category: "Software",
  },
  {
    id: 5,
    company: "PixelLabs",
    role: "Frontend Engineer",
    type: "Full-time",
    location: "Hyderabad, India",
    mode: "Hybrid",
    salary: "₹8–12 LPA",
    deadline: "2026-10-10",
    skills: ["React", "TypeScript", "CSS"],
    logo: "PL",
    category: "Frontend",
  },
];

export const applications: Application[] = [
  {
    id: 1,
    company: "NovaTech",
    role: "Frontend Developer Intern",
    appliedDate: "Aug 28, 2026",
    status: "Shortlisted",
    nextStep: "Technical Interview",
  },
  {
    id: 2,
    company: "CloudNest",
    role: "React Developer",
    appliedDate: "Aug 25, 2026",
    status: "Interview",
    nextStep: "Interview on Sep 2",
  },
  {
    id: 3,
    company: "ByteWorks",
    role: "Full Stack Developer Intern",
    appliedDate: "Aug 22, 2026",
    status: "Applied",
    nextStep: "Awaiting response",
  },
  {
    id: 4,
    company: "DataForge",
    role: "Software Engineer Intern",
    appliedDate: "Aug 20, 2026",
    status: "Rejected",
  },
  {
    id: 5,
    company: "PixelLabs",
    role: "Frontend Engineer",
    appliedDate: "Aug 18, 2026",
    status: "Selected",
    nextStep: "Offer received",
  },
];

export const studentProfile = {
  name: "Alex Morgan",
  role: "Frontend Developer",
  degree: "B.Tech Computer Science & Engineering",
  college: "North Valley Institute of Technology",
  location: "Chandigarh, India",
  email: "alex.morgan@example.com",

  profileCompletion: 85,
  placementReadiness: 78,

  skills: [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ],

  portfolio: {
    github: "",
    linkedin: "",
    website: "",
  },
};

export const notifications = [
  {
    id: 1,
    title: "Application shortlisted",
    message: "NovaTech shortlisted your application.",
    time: "2 hours ago",
    type: "success",
  },
  {
    id: 2,
    title: "New opportunity",
    message: "A new Frontend Developer Intern role matches your skills.",
    time: "5 hours ago",
    type: "info",
  },
  {
    id: 3,
    title: "Interview reminder",
    message: "Your CloudNest interview is scheduled for Sep 2.",
    time: "Yesterday",
    type: "warning",
  },
];