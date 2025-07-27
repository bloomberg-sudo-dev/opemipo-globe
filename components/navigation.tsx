"use client"

import { User, FolderOpen, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePanelStore } from '@/hooks/use-panel-store'

const navItems = [
  {
    key: 'aboutMe' as const,
    label: 'About Me',
    icon: User,
  },
  {
    key: 'projects' as const,
    label: 'Projects',
    icon: FolderOpen,
  },
  {
    key: 'contact' as const,
    label: 'Contact',
    icon: Mail,
  },
]

export function Navigation() {
  const { togglePanel, aboutMe, projects, contact } = usePanelStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const panelStates = { aboutMe, projects, contact }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-2">
        {navItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => togglePanel(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              panelStates[key]
                ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon size={18} />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 bg-black/80 backdrop-blur-md rounded-2xl p-2 min-w-[200px] shadow-2xl">
            {navItems.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => {
                  togglePanel(key)
                  setIsMenuOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  panelStates[key]
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
} 