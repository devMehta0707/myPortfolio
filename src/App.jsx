import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Code2, Database, Server, Cpu, ExternalLink, Github, Mail } from 'lucide-react';
import { Background } from './components/Background';

function ParallaxText({ children, y = 0 }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yOffset = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, y]),
    { stiffness: 50, damping: 15 }
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div ref={ref} style={{ y: yOffset, opacity, scale }}>
      {children}
    </motion.div>
  );
}

const skills = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Node.js · Express · NestJS · Python",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "PostgreSQL · MongoDB · Redis · Cassandra",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description: "AWS · Docker · Kubernetes · Terraform",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Cpu,
    title: "System Design",
    description: "Microservices · Event-Driven · Scalability",
    color: "from-green-500 to-emerald-500"
  }
];

const projects = [
  {
    title: "Distributed Task Queue",
    description: "High-performance task processing system handling millions of jobs daily",
    tech: ["Python", "Redis", "PostgreSQL", "RabbitMQ"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Real-time Analytics API",
    description: "Event processing pipeline for real-time data analytics and reporting",
    tech: ["Node.js", "Kafka", "ClickHouse", "gRPC"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Cloud Infrastructure",
    description: "Automated cloud infrastructure with high availability and disaster recovery",
    tech: ["Terraform", "AWS", "Docker", "Kubernetes"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-black text-white overflow-hidden">
      <Background />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0,transparent_100%)]" />
        <ParallaxText y={-100}>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.95]
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative inline-block"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6 tracking-tight">
                  Backend Engineer
                </h1>
                <div className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl text-indigo-200 max-w-2xl mx-auto px-4"
              >
                Crafting robust and scalable systems that power modern applications
              </motion.p>
            </motion.div>
          </div>
        </ParallaxText>
      </section>

      {/* Skills Section */}
      <section className="py-32 relative px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.15),transparent_50%)]" />
        <ParallaxText y={50}>
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            >
              Core Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                  <skill.icon className={`w-12 h-12 mb-4 bg-gradient-to-br ${skill.color} rounded-lg p-2 text-white`} />
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200 transition-all duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-indigo-200 group-hover:text-white/80 transition-colors duration-300">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxText>
      </section>

      {/* Projects Section */}
      <section className="py-32 relative px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(79,70,229,0.15),transparent_50%)]" />
        <ParallaxText y={-50}>
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            >
              Featured Work
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-indigo-200 mb-4 group-hover:text-white/80 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-white/10 text-indigo-200 border border-white/10 group-hover:border-white/20 group-hover:bg-white/15 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxText>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative px-4">
        <ParallaxText y={30}>
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Let's Build Something
              </h2>
              <div className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10" />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-indigo-200 mb-12 max-w-2xl mx-auto"
            >
              Looking for a backend engineer who can bring your ideas to life? Let's discuss your project.
            </motion.p>
            <motion.a
              href="mailto:your.email@example.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
          </div>
        </ParallaxText>
      </section>
    </div>
  );
}