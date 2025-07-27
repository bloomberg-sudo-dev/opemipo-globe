import { create } from 'zustand'

interface PanelStore {
  aboutMe: boolean
  projects: boolean
  contact: boolean
  togglePanel: (panel: 'aboutMe' | 'projects' | 'contact') => void
  closePanel: (panel: 'aboutMe' | 'projects' | 'contact') => void
  closeAllPanels: () => void
}

export const usePanelStore = create<PanelStore>((set) => ({
  aboutMe: false,
  projects: false,
  contact: false,

  togglePanel: (panel) =>
    set((state) => ({
      ...state,
      [panel]: !state[panel],
    })),

  closePanel: (panel) =>
    set((state) => ({
      ...state,
      [panel]: false,
    })),

  closeAllPanels: () =>
    set({
      aboutMe: false,
      projects: false,
      contact: false,
    }),
})) 