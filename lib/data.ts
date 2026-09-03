export const site = {
  name: "Jayant Iyer",
  avatar: "/profile.png",
  bio: [
    "AI Engineer from Pune, India.",
    "I love to build.",
  ],
  socials: [
    { label: "X/Twitter", href: "https://x.com/JV2077" },
    { label: "GitHub", href: "https://github.com/JayTheCoder77" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jayant-iyer-156a27297" },
    { label: "Kaggle", href: "https://kaggle.com/jayantiyer" },
    { label: "Discord", copy: "messi_10_the_goat" },
    { label: "Email", href: "mailto:jayantiyer90@gmail.com" },
  ],
  resume: {
    href: "https://docs.google.com/document/d/1jLpzIiDsi98trDcRBTn5B1OJ_w8AfwWVydp_WH35ktE/edit?usp=sharing",
    label: "Resume",
  },
};

export const experience = [
  {
    company: "Ador Ltd.",
    role: "Software Engineer Intern",
    period: "Sep 2026 - Present",
    location: "On-site (Pune , IN)",
    description: "Currently Working on a project to connect AI Agents to MongoDB using a MCP server",
  },
  {
    company: "RedHunt Labs",
    role: "AI/ML Security Intern",
    period: "Jan 2026 - Jun 2026",
    location: "Remote (London , UK)",
    description: "Fine Tuned LLM'S for subdomain prediction and created end-to-end data pipelines",
  },
  {
    company: "Security Enginerd",
    role: "AI/ML & Cybersecurity Intern",
    period: "Sep 2025 - Oct 2025",
    location: "Remote (Pune , IN)",
    description: "Worked with MCP servers and Prompt injection attack defense",
  },
];

export const projects = [
  {
    title: "Rio",
    description: "Code Reviews via Github PR's and locally via CLI.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Postgres-Neon" , "Upstash - Redis" , "Typer" , "Langgraph" , "Langchain" , "Python"],
    media: { type: "video" as const, src: "/projects/rio/rio.mp4" , alt : "Rio mp4"},
    github: "https://github.com/JayTheCoder77/Rio",
    website: "https://rio-chi.vercel.app",
  },
  {
    title: "Quizify",
    description: "Quiz Generation Powered by Agentic RAG",
    stack: ["React", "Node.js", "Langgraph" , "Python" , "ChromaDB"],
    media: { type: "image" as const, src: "/projects/quizify/quizify.png", alt: "Quizify screenshot" },
    github: "https://github.com/JayTheCoder77/AgenticRagQuizGenerator",
  },
];

export const hackathons = [
  {
    title: "Magnitude",
    location: "Pune, IN",
    description: "Built a football injury predictor system using XGBoost and Streamlit with effective collaboration involving a team of 4 members.",
  },
  {
    title: "AO - Agent Orchestrator",
    location: "Remote - Bangalore",
    description: "Built a human in the loop layer for reviewing ao agent swarm decisions using slack digest",
  },
];

export const tech = [
  "PyTorch",
  "Tensorflow Keras",
  "Scikit-Learn",
  "Pandas",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Vector Databases",
  "MongoDB",
  "Redis",
  "C++",
  "C",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Postgres",
  "Drizzle",
  "Vercel",
  "Figma",
  "Git",
];
