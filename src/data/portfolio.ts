export type NavigationLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  icon: string;
  label: string;
};

export type HeroData = {
  availability: string;
  location: string;
  name: string;
  primaryCta: NavigationLink;
  school: string;
  socialLinks: SocialLink[];
  summary: string;
};

export type TagItem = {
  title: string;
};

export type AboutData = {
  activeDomains: TagItem[];
  focusSummary: string;
  headline: string;
  highlight: string;
  intro: string;
  coreExpertise: TagItem[];
};

export type FeaturedWorkItem = {
  description: string;
  image: string;
  link?: string | null;
  techStack: string[];
  title: string;
  developmentStatus?: string;
};

export type ExperienceIcon = {
  label: string;
  src: string;
};

export type ExperienceItem = {
  bulletPoints: string[];
  endYear: string;
  icons: ExperienceIcon[];
  role: string;
  startYear: string;
};

export type EducationItem = {
  endYear: string;
  startYear: string;
  subtitle: string;
  title: string;
};

export type ContactData = {
  description: string;
  heading: string;
  links: SocialLink[];
  primaryCta: SocialLink;
  secondaryCta: SocialLink;
};

export const navigationLinks: NavigationLink[] = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const heroData: HeroData = {
  name: "Tanmay",
  summary:
    "I enjoy turning messy workflows into practical tools, especially where computer vision, backend logic, and product design intersect.",
  availability: "Open to collaborative product work",
  school: "B.Tech in Computer Science Engineering, SRM Institute of Science and Technology",
  location: "Chennai, India",
  primaryCta: { href: "#work", label: "View Projects" },
  socialLinks: [
    {
      icon: "/images/icon/github-icon.svg",
      href: "https://github.com/tanmaysinhx14",
      label: "GitHub",
    },
    {
      icon: "/images/icon/linkedin-icon.svg",
      href: "https://linkedin.com/in/tanmaysinhx14",
      label: "LinkedIn",
    },
    {
      icon: "/images/icon/leetcode-icon.svg",
      href: "https://leetcode.com/u/tanmaysinhx14/",
      label: "LeetCode",
    },
  ],
};

export const aboutData: AboutData = {
  intro: "I build practical products that combine",
  highlight: "AI workflows, backend logic, and clean user experience",
  headline:
    "with a strong bias for systems that feel reliable, purposeful, and easy to use.",
  focusSummary:
    "Recent projects have pushed me toward real-time monitoring systems, smarter automation, and interfaces that make technical tools easier for people to trust and adopt.",
  activeDomains: [
    { title: "DSA Foundations" },
    { title: "Systems Design" },
    { title: "Computer Vision" },
    { title: "Hackathons" },

  ],
  coreExpertise: [
    { title: "UI/UX using Bootstrap 5" },
    { title: "PHP" },
    { title: "MySQL" },
    { title: "Web Application Development" }
  ],
};

export const featuredWork: FeaturedWorkItem[] = [
    {
    title: "Civic Connect",
    description:
      "Designed and developed a multi-role Academic ERP system handling admin, faculty, and student workflows across attendance tracking, batch management, and notification systems. Focused on reliability, input safety, and building workflows that mirror real institutional operations.",
    link: "",
    techStack: ["PHP", "MySQL", "Javascript"],
    image: "/images/feature-work/academic-erp.png",
  },
  {
    title: "Academic ERP",
    description:
      "Designed and developed a multi-role Academic ERP system handling admin, faculty, and student workflows across attendance tracking, batch management, and notification systems. Focused on reliability, input safety, and building workflows that mirror real institutional operations.",
    link: "",
    techStack: ["PHP", "MySQL", "Javascript"],
    image: "/images/feature-work/academic-erp.png",
    developmentStatus: "Scruntized Preview Available Soon",
  },
  {
    title: "AIProctor - Vision-Based Proctoring System",
    description:
      "Built a real-time exam monitoring workflow that turns webcam input into live risk signals through gaze tracking, object detection, and rule-based analysis. I handled the computer vision pipeline, backend orchestration, and monitoring logic.",
    link: "https://github.com/tanmaysinhx14/AIProctor",
    techStack: ["Python", "OpenCV", "PyTorch", "YOLO", "FastAPI"],
    image: "/images/feature-work/aiproctor.png",
  },
  {
    title: "Career Institute's Website",
    description:
      "Designed and developed a conversion-focused institute website with clearer information hierarchy, responsive layouts, and a more polished Bootstrap-based front-end experience. The project emphasized presentation quality, speed, and trust-building design.",
    link: "https://github.com/tanmaysinhx14/career-institute",
    techStack: ["Bootstrap 5", "UI/UX Implementation", "Responsive Design"],
    image: "/images/feature-work/ci.png",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    icons: [
      { src: "/images/icon/opencv-icon.svg", label: "OpenCV" },
      { src: "/images/icon/python-icon.svg", label: "Python" },
      { src: "/images/icon/pytorch-icon.svg", label: "PyTorch" },
      { src: "/images/icon/fastapi-icon.svg", label: "FastAPI" },
    ],
    role: "Computer Vision and AI System Development",
    startYear: "2026",
    endYear: "Present",
    bulletPoints: [
      "Engineered a real-time AI proctoring system using OpenCV, PyTorch, and YOLO for live behavioral monitoring.",
      "Designed gaze tracking, head pose estimation, and object detection pipelines to identify suspicious activity patterns.",
      "Built a FastAPI and WebSocket backend so monitoring signals could be streamed and reviewed in real time.",
      "Translated model output into a rule-based risk engine that made the system easier to interpret and act on.",
    ],
  },
  {
    icons: [{ src: "/images/icon/typescript-icon.svg", label: "TypeScript" }],
    role: "Rapid Application Development",
    startYear: "2025",
    endYear: "Present",
    bulletPoints: [
      "Building rapid prototypes using TypeScript with a focus on functional UI, clear data flow, and quick iteration under time constraints.",
      "Designing and implementing interactive product flows while balancing speed, usability, and basic code structure during short development cycles.",
    ],
  },
  {
    icons: [
      { src: "/images/icon/xampp-icon.svg", label: "XAMPP" },
      { src: "/images/icon/php-icon.svg", label: "PHP" },
    ],
    role: "Dynamic Web Application Backend Development",
    startYear: "2021",
    endYear: "Present",
    bulletPoints: [
      "Built a strong foundation in request handling, validation, sessions, and server-side application structure with PHP.",
      "Developed data-driven backend features with an emphasis on reliability, input safety, and maintainable flow control.",
      "Worked extensively with relational databases to write efficient queries and support better application performance.",
    ],
  },
  {
    icons: [{ src: "/images/icon/bootstrap-icon.svg", label: "Bootstrap 5" }],
    role: "UI and UX Design with Bootstrap 5",
    startYear: "2019",
    endYear: "Present",
    bulletPoints: [
      "Developed a strong grounding in semantic HTML, modern CSS, and responsive layout thinking through repeated front-end work.",
      "Used Bootstrap to design mobile-first interfaces with reusable components, stronger visual consistency, and faster iteration.",
      "Focused on interface clarity and structure so projects felt more polished, readable, and trustworthy to use.",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    startYear: "2025",
    endYear: "Present",
    title: "B.Tech in Computer Science Engineering",
    subtitle: "SRM Institute of Science and Technology - Chennai, India",
  },
  {
    startYear: "2022",
    endYear: "2024",
    title: "Intermediate (CBSE)",
    subtitle: "Private Candidate",
  },
  {
    startYear: "",
    endYear: "2022",
    title: "Matriculation (CBSE)",
    subtitle: "Open Minds - A Birla School, Patna, India",
  },
];

export const contactData: ContactData = {
  heading: "Open to product collaborations and thoughtful technical conversations.",
  description:
    "If you are building in AI, backend systems, or polished web experiences, I would be glad to connect and explore how I can contribute.",
  primaryCta: {
    icon: "/images/icon/mail-icon.svg",
    href: "mailto:mail.tanmaysinha@gmail.com",
    label: "Email Me",
  },
  secondaryCta: {
    icon: "/images/icon/linkedin-icon.svg",
    href: "https://linkedin.com/in/tanmaysinhx14",
    label: "View LinkedIn",
  },
  links: [
    {
      icon: "/images/icon/mail-icon-dark.svg",
      href: "mailto:mail.tanmaysinha@gmail.com",
      label: "Email",
    },
    {
      icon: "/images/icon/linkedin-icon.svg",
      href: "https://linkedin.com/in/tanmaysinhx14",
      label: "LinkedIn",
    },
    {
      icon: "/images/icon/github-icon.svg",
      href: "https://github.com/tanmaysinhx14",
      label: "GitHub",
    },
    {
      icon: "/images/icon/leetcode-icon.svg",
      href: "https://leetcode.com/u/tanmaysinhx14/",
      label: "LeetCode",
    },
  ],
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-ai-proctor",
    title: "Building an AI Proctoring System",
    date: "October 12, 2026",
    summary: "How I built a real-time exam monitoring workflow with OpenCV and PyTorch.",
    content: "Detailed content goes here. For complex formatting, we can integrate MDX later."
  }
];

export const footerData = {
  note: "Built with Next.js and Bootstrap. Deployed on Vercel.",
};

export const pageData = {
  activeDomains: aboutData.activeDomains,
  communicationMethods: contactData.links,
  coreExpertise: aboutData.coreExpertise,
  educationData,
  experienceData,
  heroSocialIcon: heroData.socialLinks,
};
