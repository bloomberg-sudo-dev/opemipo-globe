"use client"

import { Github, ExternalLink, Mail, Linkedin, MapPin, Calendar, Coffee, Send } from 'lucide-react'
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

export function AboutMeContent() {
  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Section */}
      <motion.div className="text-center" variants={itemVariants}>
        <motion.div 
          className="relative inline-block"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <img
            src="/profile-photo.jpg"
            alt="Opemipo"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-gray-200/50 shadow-lg"
          />
        </motion.div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Opemipo</h3>
        <p className="text-xl text-gray-600">Open-source Developer</p>
      </motion.div>

      {/* About */}
      <motion.div 
        className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100/50"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <h4 className="text-lg font-semibold text-gray-900 mb-4">About Me</h4>
        <p className="text-gray-700 leading-relaxed">
        I'm Opemipo. I build weird, useful, and technically interesting things. 
        From AI simulations and robotics debuggers to open-source experiments and goofy side projects, 
        I like pushing boundaries and figuring things out fast. I care about shipping fast and shipping often.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
        <motion.div 
          className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-100/50"
          whileHover={{ y: -5, backgroundColor: "rgba(249, 250, 251, 0.9)" }}
        >
          <div className="text-2xl font-bold text-gray-900">3+</div>
          <div className="text-sm text-gray-600">Years Experience</div>
        </motion.div>
        <motion.div 
          className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-100/50"
          whileHover={{ y: -5, backgroundColor: "rgba(249, 250, 251, 0.9)" }}
        >
          <div className="text-2xl font-bold text-gray-900">10+</div>
          <div className="text-sm text-gray-600">Projects Completed</div>
        </motion.div>
      </motion.div>

      {/* Details */}
      <motion.div className="space-y-4" variants={itemVariants}>
        <motion.div 
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-50/50 transition-colors"
          whileHover={{ x: 10 }}
        >
          <MapPin size={20} className="text-gray-600" />
          <span>Based on Earth 🌍</span>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-50/50 transition-colors"
          whileHover={{ x: 10 }}
        >
          <Calendar size={20} className="text-gray-600" />
          <span>Ready to cook always</span>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-50/50 transition-colors"
          whileHover={{ x: 10 }}
        >
          <Coffee size={20} className="text-gray-600" />
          <span>Fueled by coffee and curiosity</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsContent() {
  const projects = [
    {
      title: "Wrdlink.io",
      description: "A little word game based on wordle.",
      tech: ["Vite", "React", "Tailwind CSS"],
      status: "Live",
      statusColor: "bg-emerald-100 text-emerald-700 border border-emerald-200",
      image: "favicon.png",
      isIcon: true,
      githubUrl: null,
      liveUrl: "https://wrdlink.io"
    },
    {
      title: "IoT Hydroponic Nutrient Monitoring System",
      description: "A system that monitors the nutrient levels of a hydroponic system and sends alerts when the levels are too high or too low.",
      tech: ["C++", "Arduino", "ESP32"],
      status: "Completed",
      statusColor: "bg-blue-100 text-blue-700 border border-blue-200",
      image: "🌱",
      isIcon: false,
      githubUrl: "https://github.com/bloomberg-sudo-dev/iot-msh-arduino",
      liveUrl: "https://partner.projectboard.world/ysc/project/nutrient-management-for-microscale-hydroponic-systems"
    },
    {
      title: "Broq: Scratch for LLMs",
      description: "A scratch editor for LLMs that allows users to create AI solutions without writing code.",
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "Cursor"],
      status: "Live",
      statusColor: "bg-emerald-100 text-emerald-700 border border-emerald-200",
      image: "Broq Logo_supersized.png",
      isIcon: true,
      githubUrl: "https://github.com/bloomberg-sudo-dev/broq",
      liveUrl: "https://broq.app"
    },
    {
      title: "4-Speed Manual Transmission Gearbox",
      description: "A 3D printed and designed 4-speed manual transmission gearbox.",
      tech: ["CAD", "Arduino", "C++",],
      status: "Live",
      statusColor: "bg-emerald-100 text-emerald-700 border border-emerald-200",
      image: "📏",
      isIcon: false,
      githubUrl: null,
      liveUrl: null
    },
    {
      title: "FusedDL",
      description: "AI inference library for MCUs and FPGAs.",
      tech: ["C", "Assembly", "Embedded Systems"],
      status: "In Progress",
      statusColor: "bg-amber-100 text-amber-700 border border-amber-200",
      image: "micro-matrix-logo.png",
      isIcon: true,
      githubUrl: "https://github.com/bloomberg-sudo-dev/fuseddl",
      liveUrl: null
    },
    {
      title: "Draw on Elon Musk",
      description: "A game where you draw on Elon Musk.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      status: "Live",
      statusColor: "bg-emerald-100 text-emerald-700 border border-emerald-200",
      image: "1000000060.png",
      isIcon: true,
      githubUrl: "https://github.com/bloomberg-sudo-dev/drawonelon",
      liveUrl: "https://drawonelon.xyz"
    }
  ]

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">My Projects</h3>
        <p className="text-gray-600">Some of the things I've been working on</p>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div 
          key={index} 
          className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/50 hover:shadow-md transition-shadow duration-200"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-2xl flex items-center justify-center w-8 h-8">
                {project.isIcon ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  project.image
                )}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${project.statusColor} mt-1`}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                  title="View on GitHub"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <Github size={16} className="text-gray-600" />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                  title="View Live Demo"
                  whileHover={{ rotate: -15, scale: 1.1 }}
                >
                  <ExternalLink size={16} className="text-gray-600" />
                </motion.a>
              )}
            </div>
          </div>
          
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-white/60 text-gray-700 rounded-lg text-xs font-medium border border-gray-100/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function ContactContent() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "opethepope@gmail.com",
      href: "mailto:opethepope@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@bloomberg-sudo-dev",
      href: "https://github.com/bloomberg-sudo-dev"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/opemipo_404",
      href: "https://linkedin.com/in/opemipo_404"
    }
  ]

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center" variants={itemVariants}>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Connect</h3>
        <p className="text-gray-600">
          Always down to work on something cool
        </p>
      </motion.div>

      {/* Contact Methods */}
      <motion.div className="space-y-4" variants={itemVariants}>
        {contactMethods.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            className="flex items-center space-x-4 p-4 bg-gray-50/80 backdrop-blur-sm rounded-2xl border border-gray-100/50 group"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(249, 250, 251, 0.95)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 rounded-xl bg-white/60 text-gray-700 shadow-sm">
              <contact.icon size={24} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">{contact.label}</div>
              <div className="text-gray-600 text-sm">{contact.value}</div>
            </div>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
          </motion.a>
        ))}
      </motion.div>

      {/* Quick Message */}
      <motion.div 
        className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/50"
        variants={itemVariants}
      >
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Send a Quick Message</h4>
        
        <form 
          action="https://formspree.io/f/mblkyjqo" 
          method="POST"
          className="space-y-4"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
            whileFocus={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 1)" }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
            whileFocus={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 1)" }}
          />
          <motion.textarea
            name="message"
            rows={4}
            placeholder="Your message"
            required
            className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none transition-all"
            whileFocus={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 1)" }}
          />
          <motion.button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={16} />
            <span>Send Message</span>
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  )
} 
