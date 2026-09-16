export const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "AWS EC2",
  "Redux",
  "Firebase",
];

export type Project = {
  index: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
  meta: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "LineupX",
    description: "A career platform connecting talent with opportunity.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    href: "https://bit.ly/4uekPJK",
    meta: "9-month freelance build",
  },
  {
    index: "02",
    name: "Healthy Heart Meter",
    description: "A health scoring web app that turns vitals into insight.",
    tags: ["React.js", "Node.js", "Express.js"],
    href: "https://hhm.madhavbaug.org",
    meta: "Health-tech web app",
  },
  {
    index: "03",
    name: "Investment Risk Profiler",
    description: "A fintech MERN app that generates investor PDF reports.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    href: "https://bit.ly/4r8Fk8r",
    meta: "Fintech · PDF reporting",
  },
  {
    index: "04",
    name: "Sky Enterprise India",
    description: "A multi-brand marketing site spanning two product lines.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://flavarich.com",
    meta: "Multi-brand · flavarich.com · starzing.net",
  },
];

export const links = {
  email: "saminuddins2@gmail.com",
  phone: "+91 88988 01395",
  github: "https://github.com/SaminuddinShaikh",
  linkedin: "https://linkedin.com/in/saminuddin-shaikh",
  resume: "https://bit.ly/4xs7LS6",
};
