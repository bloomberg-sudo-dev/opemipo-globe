"use client"

import { Github, ExternalLink, Mail, Linkedin, MapPin, Calendar, Coffee, Send } from 'lucide-react'

export function AboutMeContent() {
  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <div className="text-center">
        <img
          src="/profile-photo.jpg"
          alt="Opemipo"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-gray-200/50"
        />
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Opemipo</h3>
        <p className="text-xl text-gray-600">Open-source Developer</p>
      </div>

      {/* About */}
      <div className="bg-gray-50/80 rounded-2xl p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">About Me</h4>
        <p className="text-gray-700 leading-relaxed">
        I'm Opemipo. I build weird, useful, and technically interesting things. 
        From AI simulations and robotics debuggers to open-source experiments and goofy side projects, 
        I like pushing boundaries and figuring things out fast. I care about shipping fast and shipping often.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50/80 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">3+</div>
          <div className="text-sm text-gray-600">Years Experience</div>
        </div>
        <div className="bg-gray-50/80 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">10+</div>
          <div className="text-sm text-gray-600">Projects Completed</div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-gray-700">
          <MapPin size={20} className="text-gray-600" />
          <span>Based on Earth 🌍</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <Calendar size={20} className="text-gray-600" />
          <span>Ready to cook always</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <Coffee size={20} className="text-gray-600" />
          <span>Fueled by coffee and curiosity</span>
        </div>
      </div>
    </div>
  )
}

export function ProjectsContent() {
  const projects = [
    {
      title: "IoT Hydroponic Nutrient Monitoring System",
      description: "A system that monitors the nutrient levels of a hydroponic system and sends alerts when the levels are too high or too low.",
      tech: ["C++", "Arduino", "ESP32"],
      status: "Completed",
      statusColor: "bg-gray-200 text-gray-700",
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
      statusColor: "bg-gray-200 text-gray-70000",
      image: "Broq Logo_supersized.png",
      isIcon: true,
      githubUrl: "https://github.com/bloomberg-sudo-dev/broq",
      liveUrl: "https://broq.app"
    },
    {
      title: "CNC Tape Plotting Robot",
      description: "A system to label tape with a custom built CNC machine. Powered by a Raspberry Pi and a custom PCB.",
      tech: ["C++", "Arduino", "Python", "Raspberry Pi", "EasyEDA"],
      status: "In Progress",
      statusColor: "bg-gray-200 text-gray-700",
      image: "📏",
      isIcon: false,
      githubUrl: "https://github.com/bloomberg-sudo-dev/cnc-tape-plotter",
      liveUrl: null
    },
    {
      title: "MicroMatrix",
      description: "A lightweight, memory-safe matrix math library written in C for resource-constrained embedded systems, with optional assembly optimization for speed-critical operations.",
      tech: ["C", "Assembly", "Embedded Systems"],
      status: "In Progress",
      statusColor: "bg-gray-200 text-gray-700",
      image: "micro-matrix-logo.png",
      isIcon: true,
      githubUrl: "https://github.com/bloomberg-sudo-dev/micromatrix",
      liveUrl: null
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">My Projects</h3>
        <p className="text-gray-600">Some of the things I've been working on</p>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="bg-gray-50/80 rounded-2xl p-6 hover:bg-gray-100/80 transition-colors duration-200">
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
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                  title="View on GitHub"
                >
                  <Github size={16} className="text-gray-600" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                  title="View Live Demo"
                >
                  <ExternalLink size={16} className="text-gray-600" />
                </a>
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
                className="px-3 py-1 bg-white/60 text-gray-700 rounded-lg text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function ContactContent() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@opemipo.dev",
      href: "mailto:hello@opemipo.dev"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@opemipo",
      href: "https://github.com/opemipo"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/opemipo",
      href: "https://linkedin.com/in/opemipo"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Connect</h3>
        <p className="text-gray-600">
          Always down to work on something cool
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className="flex items-center space-x-4 p-4 bg-gray-50/80 rounded-2xl hover:bg-gray-100/80 transition-colors duration-200 group"
          >
            <div className="p-3 rounded-xl bg-white/60 text-gray-700">
              <contact.icon size={24} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">{contact.label}</div>
              <div className="text-gray-600 text-sm">{contact.value}</div>
            </div>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
          </a>
        ))}
      </div>

      {/* Quick Message */}
      <div className="bg-gray-50/80 rounded-2xl p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Send a Quick Message</h4>
        
        <form 
          action="https://formspree.io/f/mblkyjqo" 
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            required
            className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
          >
            <Send size={16} />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  )
} 