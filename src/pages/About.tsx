import { motion } from "framer-motion";
import { ExternalLink, Award, BookOpen, Brain, Code, Database, BarChart3, Monitor, Users, Bot, FileCode2, Container, GitBranch, Paintbrush, Wind, Terminal, Globe, MessageSquare, Lightbulb, Handshake, RefreshCw, Ear } from "lucide-react";

const skills = [
  "Transformers", "Generative AI", "LLMs", "CrewAI", "Gemini API",
  "RAG Systems", "FastAPI", "NestJS", "Docker", "Python", "TypeScript"
];

const stats = [
  { value: "8.30", label: "Cumulative GPA", rotate: "-2deg" },
  { value: "08+", label: "Months Experience", rotate: "1.5deg" },
  { value: "04", label: "Major Projects", rotate: "-1deg" },
];

const skillCategories = [
  {
    title: "AI & ML",
    icon: Brain,
    skills: [
      { name: "Generative AI", icon: Bot },
      { name: "LLMs", icon: MessageSquare },
      { name: "BERT Models", icon: FileCode2 },
      { name: "RAG Systems", icon: Database },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", icon: Terminal },
      { name: "TypeScript", icon: FileCode2 },
    ],
  },
  {
    title: "Frameworks",
    icon: Container,
    skills: [
      { name: "NestJS", icon: Globe },
      { name: "FastAPI", icon: Wind },
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "Bootstrap Studio", icon: Paintbrush },
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Pandas", icon: Database },
      { name: "Matplotlib", icon: BarChart3 },
      { name: "Power BI", icon: BarChart3 },
    ],
  },
  {
    title: "Platforms",
    icon: Monitor,
    skills: [
      { name: "Windows", icon: Monitor },
      { name: "Linux (Ubuntu)", icon: Terminal },
      { name: "VS Code", icon: Code },
      { name: "WordPress", icon: Globe },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Communication", icon: MessageSquare },
      { name: "Problem-solving", icon: Lightbulb },
      { name: "Teamwork", icon: Handshake },
      { name: "Adaptability", icon: RefreshCw },
      { name: "Active Listening", icon: Ear },
    ],
  },
];

const certifications = [
  { title: "Microsoft Office Beginner & Advanced", issuer: "Microsoft (Naan Mudhalvan)", date: "Nov 2022" },
  { title: "Cybersecurity Analysis Design", issuer: "FutureSkills Prime (Gold Certified)", date: "Jun 2024" },
  { title: "Introduction to Generative AI", issuer: "Google Cloud (Coursera)", date: "Mar 2025" },
  { title: "Transformer Models and BERT Model", issuer: "Google Cloud (Coursera)", date: "Mar 2025" },
];

const About = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="relative mb-16">
          <span className="font-display text-[6rem] md:text-[12rem] text-foreground/5 absolute -top-8 md:-top-16 left-0 select-none leading-none">
            ABOUT
          </span>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-6xl md:text-8xl relative z-10"
          >
            ABOUT<span className="text-primary">.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="brutalist-border-thick p-6 md:p-8">
              <div className="inline-block brutalist-border px-3 py-1 mb-6">
                <span className="font-mono-custom text-xs uppercase tracking-widest text-primary">Software Engineer @ C1X</span>
              </div>
              <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80 mb-6">
                B.Tech in Artificial Intelligence and Data Science from Panimalar Institute of Technology with practical experience in building AI-driven systems.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80 mb-6">
                Currently working as a Software Engineer at C1Exchange (C1X), contributing to real-time intelligent agents, multi-agent frameworks, and retrieval-augmented generation (RAG) systems.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80">
                Experienced in machine learning, natural language processing, and cloud-based model deployment. Passionate about solving real-world problems with scalable AI solutions.
              </p>

              {/* Skills Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="brutalist-border px-3 py-1 font-mono-custom text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-col gap-6 justify-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="brutalist-border-thick p-6 md:p-8 bg-background hover:bg-primary/5 transition-colors"
                style={{ transform: `rotate(${stat.rotate})` }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl md:text-7xl text-primary">{stat.value}</span>
                  <span className="font-mono-custom text-xs md:text-sm uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                </div>
                <div className="mt-3 h-1 w-16 bg-primary" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── TECHNICAL SKILLS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="font-display text-4xl md:text-6xl mb-10">
            TECHNICAL SKILLS<span className="text-primary">.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 brutalist-border-thick">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                className="brutalist-border p-6 md:p-8"
              >
                {/* Category Header */}
                <div className="bg-primary text-primary-foreground px-4 py-2 mb-6 inline-flex items-center gap-2">
                  <category.icon size={18} />
                  <h3 className="font-display text-xl md:text-2xl">{category.title}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-3">
                      <skill.icon size={14} className="text-primary flex-shrink-0" />
                      <span className="font-mono-custom text-sm">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── EDUCATION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24"
        >
          <h2 className="font-display text-4xl md:text-6xl mb-10">
            EDUCATION<span className="text-primary">.</span>
          </h2>

          {/* Main Education Card */}
          <div className="brutalist-border-thick p-8 md:p-12 mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="inline-block brutalist-border px-3 py-1 mb-4">
                  <span className="font-mono-custom text-xs uppercase tracking-widest text-primary">2021 – 2025</span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl">B.TECH IN AI & DATA SCIENCE</h3>
                <p className="font-mono-custom text-sm text-muted-foreground mt-2">Panimalar Institute of Technology — Chennai, Tamil Nadu</p>
              </div>
              <div className="brutalist-border-thick p-4 md:p-6 bg-primary/5" style={{ transform: "rotate(-2deg)" }}>
                <span className="font-display text-4xl md:text-6xl text-primary">8.30</span>
                <p className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground">CGPA</p>
              </div>
            </div>
          </div>

          {/* School Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="brutalist-border-thick p-6 md:p-8" style={{ transform: "rotate(1deg)" }}>
              <div className="inline-block brutalist-border px-3 py-1 mb-4">
                <span className="font-mono-custom text-xs uppercase tracking-widest">2020 – 2021</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl">HIGHER SECONDARY (12TH)</h3>
              <p className="font-mono-custom text-sm text-muted-foreground mt-1">Green Park International School — Namakkal</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-3xl text-primary">77.4%</span>
                <span className="font-mono-custom text-xs text-muted-foreground uppercase">Percentage</span>
              </div>
            </div>

            <div className="brutalist-border-thick p-6 md:p-8" style={{ transform: "rotate(-1.5deg)" }}>
              <div className="inline-block brutalist-border px-3 py-1 mb-4">
                <span className="font-mono-custom text-xs uppercase tracking-widest">2018 – 2019</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl">SECONDARY SCHOOL (10TH)</h3>
              <p className="font-mono-custom text-sm text-muted-foreground mt-1">Green Park International School — Namakkal</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-3xl text-primary">77.4%</span>
                <span className="font-mono-custom text-xs text-muted-foreground uppercase">Percentage</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── PUBLICATIONS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            <BookOpen className="inline mr-3 text-primary" size={32} />
            PUBLICATIONS<span className="text-primary">.</span>
          </h2>
          <div className="brutalist-border-thick p-6 md:p-8 hover:shadow-[8px_8px_0_hsl(var(--primary))] transition-shadow">
            <h3 className="font-display text-xl md:text-2xl mb-2">Towards Intelligent Legal Information Retrieval</h3>
            <p className="font-mono-custom text-xs text-muted-foreground mb-2">A Transformer-Based Framework</p>
            <p className="font-body text-sm text-foreground/70 mb-4">
              Published in International Journal of Scientific Research in Engineering Management (IJSREM), Volume 09, Issue 05, May 2025.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="brutalist-border px-3 py-1 font-mono-custom text-xs">DOI: 10.55041/IJSREM48260</span>
              <a href="#" className="brutalist-border px-4 py-1 font-mono-custom text-xs uppercase bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
                <ExternalLink size={12} /> Read Paper
              </a>
            </div>
          </div>
        </motion.div>

        {/* ─── CERTIFICATIONS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-24"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            <Award className="inline mr-3 text-primary" size={32} />
            CERTIFICATIONS<span className="text-primary">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="brutalist-border-thick p-5 md:p-6 hover:shadow-[6px_6px_0_hsl(var(--primary))] transition-shadow"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-display text-lg md:text-xl">{cert.title}</h4>
                    <p className="font-mono-custom text-xs text-primary mt-1">{cert.issuer}</p>
                  </div>
                  <span className="font-mono-custom text-[10px] uppercase text-muted-foreground whitespace-nowrap">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
