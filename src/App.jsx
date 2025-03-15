import React, { useEffect, useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Model from '../public/models/rogStrix/Strix';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Briefcase,
  User,
  Menu,
  X,
  Send,
  Cpu,
  Cloud,
  Settings,
  Layout,
  TestTube,
  Boxes,
  Braces,
  Network
} from 'lucide-react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { motion } from 'framer-motion';
import Loader from './components/Loader';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        // mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      console.log("response---", response)
      console.log("response---", response.body)
      if (response.ok) {
        toast(`Email Sent Successfully`)
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false)
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccess("Something went wrong. Try again later.");
      setLoading(false)
    }

    setLoading(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const skills = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: 'Node.js',
      color: 'bg-green-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: 'Express.js',
      color: 'bg-blue-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: 'Vanilla Js',
      color: 'bg-blue-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      name: 'Socket.io',
      color: 'bg-blue-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: 'Git',
      color: 'bg-red-50'
    },
    // { 
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    //   name: 'Linux',
    //   color: 'bg-yellow-50'
    // },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons//mysql/mysql-original-wordmark.svg",
      name: 'MySql',
      color: 'bg-blue-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
      name: 'Sequelize',
      color: 'bg-white'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: 'MongoDB',
      color: 'bg-green-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
      name: 'Mongoose',
      color: 'bg-blue-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      name: 'Jquery',
      color: 'bg-red-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      name: 'Postman',
      color: 'bg-pink-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      name: 'Bootstrap',
      color: 'bg-pink-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: 'CSS',
      color: 'bg-pink-50'
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: 'Html',
      color: 'bg-pink-50'
    }
  ];

  const projects = [
    {
      name: "Candoorr",
      description: "This modern dating app is designed to help users find meaningful connections based on their location, shared interests, and personalized preferences. The app provides an engaging and intuitive platform where users can create detailed profiles that reflect their personality, hobbies, and what they’re looking for in a partner.",
      image: "https://images.pexels.com/photos/6833565/pexels-photo-6833565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Conext",
      description: "A mobile application designed to facilitate luggage delivery by allowing users to request a pickup while enabling the admin to assign a delivery person. The app ensures a seamless and secure delivery experience with features such as real-time tracking, one-to-one chat, notifications, invoice downloads, and online payments.",
      image: "https://images.pexels.com/photos/7363101/pexels-photo-7363101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Artist Anywhere",
      description: "This app connects users with local artists for events, performances, and creative services. It allows users to easily discover artists based on their location, browse their profiles, view their portfolios, and make bookings directly through the app. Users can search for various types of artists using a map feature that shows artists within a specified radius from their current location.",
      image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  const experiences = [
    {
      role: "Backend Developer",
      company: "Cqlsys Technologies Pvt. Ltd",
      duration: "2023 - 2024",
      description: "As an experienced backend developer, I specialize in building RESTful APIs for frontend developers, ensuring seamless communication between the client and server. I have integrated third-party APIs to enhance project functionality, including payment gateways like Stripe and Pagalo for secure transactions. Additionally, I have developed admin panels using EJS for efficient project management and implemented real-time chat features using Socket.io, enabling smooth and interactive user experiences."
    },
    {
      role: "Backend Developer",
      company: "Cqlsys Technologies Pvt. Ltd",
      duration: "2021 - 2023",
      description: "I started my career as a backend developer, focusing on creating APIs and building admin panels. Over time, I gained expertise in developing scalable systems, optimizing database performance, and ensuring secure and efficient backend solutions for modern applications. I have also learned to implement JWT authentication for secure user access and FCM notifications to enhance real-time communication, making applications more interactive and user-friendly."
    },

  ]

  return (
    <div className="relative min-h-screen bg-trasnsparent text-white">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition={Bounce}
      />
      {loading ? <Loader /> : ""}
      {/* Navigation */}
      {/* <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}> */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-transparent backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        {/* <div className="max-w-7xl mx-auto px-4"> */}
        <div className=" mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold text-amber-500">DM</a>

            {/* Menu Button */}
            <button
              className="p-2 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-lg shadow-lg z-50 backdrop-blur-sm animate-menu-slide">
          <div className="h-full flex flex-col">
            <div className="flex justify-end p-4">
              <button
                className="p-2 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-4xl font-bold my-4 hover:text-amber-500 transition-all hover:scale-110"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'slideIn 0.5s ease-out forwards',
                    opacity: 0,
                    transform: 'translateY(20px)'
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Particles */}
      <section className="relative h-screen flex flex-col md:flex-col lg:grid lg:grid-cols-2 overflow-hidden">
        {/* Left Side - Text Content */}
        <div className="flex flex-col items-center justify-center text-center px-4 max-sm:mt-32 sm:px-8 md:pt-24 z-20">
          <h3 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
            Hi
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 20, 0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            >
              👋
            </motion.span>
            I'm
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
            Diwakar Mehta
          </h1>
          <p className="text-xl md:text-2xl mb-6 md:mb-8 text-amber-500 animate-slide-up">
            Software Engineer
          </p>
          <div className="flex gap-4 md:gap-6 justify-center mb-8 md:mb-12">
            <a href="https://github.com/devMehta0707" target='_blank' className="transform hover:scale-110 transition-transform hover:text-amber-500">
              <Github className="w-6 md:w-8 h-6 md:h-8" />
            </a>
            <a href="https://www.linkedin.com/in/diwakar-mehta/" target='_blank' className="transform hover:scale-110 transition-transform hover:text-amber-500">
              <Linkedin className="w-6 md:w-8 h-6 md:h-8" />
            </a>
            <a href="mailto:officialdev.mehta@gmail.com" className="transform hover:scale-110 transition-transform hover:text-amber-500">
              <Mail className="w-6 md:w-8 h-6 md:h-8" />
            </a>
          </div>
          <ChevronDown className="w-10 md:w-12 h-10 md:h-12 mx-auto animate-bounce text-amber-500" />
        </div>

        {/* Right Side - Large 3D Model */}
        <div className="flex items-center justify-center w-full h-full lg:mt-0 z-40">
          <Canvas
            shadows
            camera={{ position: [2, 2, 5], fov: 70 }}  // Adjusted camera for better view
            className="w-full h-auto aspect-square"
          >
            {/* Ambient Light */}
            <ambientLight intensity={2.0} />

            {/* Hemisphere Light for Soft Natural Illumination */}
            <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={1.2} />

            {/* Directional Light for Shadows */}
            <directionalLight position={[4, 8, 1]} intensity={3} castShadow />

            {/* Additional Back Light (Fill Light) */}
            <directionalLight position={[-4, 5, -3]} intensity={1.5} />

            {/* Additional Side Light */}
            <pointLight position={[2, 3, 2]} intensity={1} />

            {/* Ground Plane for Shadows */}
            <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.5} />
            </mesh>

            {/* Orbit Controls - No Zoom */}
            <OrbitControls enableZoom={false} minDistance={1} maxDistance={20} enablePan={false} />

            {/* 3D Laptop Model - Adjusted Size and Rotation */}
            <Suspense fallback={null}>
              <Model
                scale={[0.8, 0.8, 0.8]} // Reduced size
                rotation={[0, 0, 0]} // Front-facing laptop
                position={[-1.2, -2, 0.5]} // Adjusted positioning
              />
            </Suspense>
          </Canvas>
        </div>
      </section>






      {/* About Section */}
      <section id="about" className="relative">
        <ParticlesBackground />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <User className="w-8 h-8 text-amber-500" />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            {/* I'm a passionate backend developer with expertise in building scalable systems
            and robust APIs. With a deep understanding of server-side technologies and
            database management, I create efficient solutions that power modern applications. */}
            I'm a passionate backend developer with expertise in building scalable systems and robust APIs. With a deep understanding of server-side technologies, database management, I create efficient and secure solutions that power modern applications. I specialize in optimizing performance, ensuring data integrity, and implementing authentication and security best practices. My experience includes working with Node.js, express.js, RESTful and MySql APIs, and integrating third-party services to enhance application functionality. Always eager to learn and adapt, I thrive in building innovative and efficient backend solutions
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20">
        <ParticlesBackground />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Cpu className="w-8 h-8 text-amber-500" />
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 sm:p-10 md:p-10 lg:p-0 xl:p-0">
            {skills.map((skill, index) => (
              <motion.div
                animate={{
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                  y: [-50, -30, 0, -30, -50], // Floating effect
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0,
                }}
                key={skill.name}
                className="flex flex-col items-center group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeIn 0.5s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className={`skill-icon p-6 rounded-full ${skill.color} mb-4 group-hover:shadow-lg backdrop-blur-sm`}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12"
                  />
                </div>
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        <ParticlesBackground />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Code className="w-8 h-8 text-amber-500" />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.name}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-md"
                animate={{
                  y: [0, -10, 0], // Floating effect (infinite)
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                whileHover={{
                  rotate: -2, // Subtle tilt effect
                  boxShadow: "0px 10px 30px rgba(255, 165, 0, 0.3)", // Glow effect
                  y: -5, // Slide up slightly
                }}
              >
                <motion.div
                  className="h-48 bg-cover bg-center filter grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${project.image})` }}
                  whileHover={{
                    rotate: [0, 3, -3, 0], // Wiggle effect on hover
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20">
        <ParticlesBackground />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-amber-500" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="relative pl-8 border-l-2 border-amber-500"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-amber-500 rounded-full" />
                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <p className="text-amber-500 mb-2">{exp.company} • {exp.duration}</p>
                <p className="text-gray-400">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <ParticlesBackground />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Mail className="w-8 h-8 text-amber-500" />
            <h2 className="text-4xl font-bold">Contact Me</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-medium transition-colors"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12">
        <ParticlesBackground />
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Diwakar Mehta</h3>
              <p className="text-gray-400">
                I'm Backend Developer from Ludhiana, Punjab, India, specializing in building scalable and efficient server-side solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-gray-400 hover:text-amber-500 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            {/* <p>© {new Date().getFullYear()} Diwakar Mehta. All rights reserved.</p> */}
            <p>© {`2025`} Diwakar Mehta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;