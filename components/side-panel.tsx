"use client"

import { ReactNode, useEffect } from 'react'
import { X } from 'lucide-react'
import { usePanelStore } from '@/hooks/use-panel-store'
import { motion, AnimatePresence } from 'framer-motion'

interface SidePanelProps {
  title: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export function SidePanel({ title, children, isOpen, onClose }: SidePanelProps) {
  
  // Close panel on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.8 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white/90 backdrop-blur-xl shadow-2xl z-50 border-l border-white/20"
          >
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />
            
            {/* Header */}
            <div className="relative flex items-center justify-between p-6 border-b border-gray-200/50">
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-gray-100/50 transition-colors duration-200"
              >
                <X size={24} className="text-gray-600" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="relative p-6 h-full overflow-y-auto pb-24">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
