import { useState, useEffect } from 'react'

const PALETTES = [
  {
    id: 'blue-purple',
    label: 'Blue/Purple',
    colors: [
      { primary: '#2563eb', secondary: '#a21caf' },
      { bg: '#f8fafc', bgAlt: '#f3f4f6' },
      { bgDark: '#0f172a', bgAltDark: '#1e293b' },
    ],
    className: 'bg-gradient-to-r from-[#2563eb] to-[#a21caf]'
  },
  {
    id: 'yellow-orange',
    label: 'Yellow/Orange',
    colors: [
      { primary: '#facc15', secondary: '#f97316' },
      { bg: '#fefce8', bgAlt: '#fef9c3' },
      { bgDark: '#1a1a1a', bgAltDark: '#262626' },
    ],
    className: 'bg-gradient-to-r from-[#facc15] to-[#f97316]'
  },
  {
    id: 'red-pink',
    label: 'Red/Pink',
    colors: [
      { primary: '#ef4444', secondary: '#ec4899' },
      { bg: '#fef2f2', bgAlt: '#fdf2f8' },
      { bgDark: '#1e1e1e', bgAltDark: '#2a2a2a' },
    ],
    className: 'bg-gradient-to-r from-[#ef4444] to-[#ec4899]'
  },
  {
    id: 'teal-cyan',
    label: 'Teal/Cyan',
    colors: [
      { primary: '#14b8a6', secondary: '#06b6d4' },
      { bg: '#f0fdfa', bgAlt: '#ecfeff' },
      { bgDark: '#1e1e1e', bgAltDark: '#2a2a2a' },
    ],
    className: 'bg-gradient-to-r from-[#14b8a6] to-[#06b6d4]'
  },
  {
    id: 'green',
    label: 'Green',
    colors: [
      { primary: '#22c55e', secondary: '#059669' },
      { bg: '#f0fdf4', bgAlt: '#ecfdf5' },
      { bgDark: '#1e1e1e', bgAltDark: '#2a2a2a' },
    ],
    className: 'bg-gradient-to-r from-[#22c55e] to-[#059669]'
  },
  {
    id: 'rose-orange',
    label: 'Rose/Orange',
    colors: [
      { primary: '#f43f5e', secondary: '#ea580c' },
      { bg: '#fff1f2', bgAlt: '#fff7ed' },
      { bgDark: '#1e1e1e', bgAltDark: '#2a2a2a' },
    ],
    className: 'bg-gradient-to-r from-[#f43f5e] to-[#ea580c]'
  }
]

export default function ColorPaletteSwitcher() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('blue-purple')

  useEffect(() => {
    const saved = localStorage.getItem('color-palette')
    if (saved && PALETTES.some(p => p.id === saved)) {
      setSelected(saved)
      document.documentElement.classList.remove(...PALETTES.map(p => `theme-${p.id}`))
      document.documentElement.classList.add(`theme-${saved}`)
    } else {
      document.documentElement.classList.add('theme-blue-purple')
    }
  }, [])

  const handleSelect = (id: string) => {
    setSelected(id)
    setOpen(false)
    document.documentElement.classList.remove(...PALETTES.map(p => `theme-${p.id}`))
    document.documentElement.classList.add(`theme-${id}`)
    localStorage.setItem('color-palette', id)
  }

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-2 py-1 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
        onClick={() => setOpen(o => !o)}
        aria-label="Choose color palette"
        type="button"
      >
        <span className={`w-5 h-5 rounded-full ${PALETTES.find(p => p.id === selected)?.className}`} />
        <span className="hidden sm:inline text-sm text-gray-700 dark:text-gray-300">Theme</span>
        <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg shadow-lg z-50">
          {PALETTES.map(palette => (
            <button
              key={palette.id}
              className={`flex items-center w-full gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${selected === palette.id ? 'font-semibold' : ''}`}
              onClick={() => handleSelect(palette.id)}
              type="button"
            >
              <span className="flex gap-1">
                <span className="w-4 h-4 rounded-full border border-gray-300 dark:border-dark-700" style={{ background: `linear-gradient(90deg, ${palette.colors[0].primary} 50%, ${palette.colors[0].secondary} 50%)` }} title="Primary colors"></span>
                <span className="w-4 h-4 rounded-full border border-gray-300 dark:border-dark-700" style={{ background: `linear-gradient(90deg, ${palette.colors[1].bg} 50%, ${palette.colors[1].bgAlt} 50%)` }} title="Light backgrounds"></span>
                <span className="w-4 h-4 rounded-full border border-gray-300 dark:border-dark-700" style={{ background: `linear-gradient(90deg, ${palette.colors[2].bgDark} 50%, ${palette.colors[2].bgAltDark} 50%)` }} title="Dark backgrounds"></span>
              </span>
              <span>{palette.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 