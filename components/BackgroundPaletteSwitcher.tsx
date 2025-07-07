import { useState, useEffect } from 'react'

const BG_PALETTES = [
  {
    id: 'light',
    label: 'Light',
    colors: [
      { light: '#f8fafc', dark: '#1e293b' },
      { light: '#e0e7ef', dark: '#0f172a' },
      { light: '#f3f4f6', dark: '#334155' },
      { light: '#d1d5db', dark: '#1e293b' },
    ],
    className: 'bg-gradient-to-r from-[#f8fafc] to-[#e0e7ef]'
  },
  {
    id: 'dark',
    label: 'Dark',
    colors: [
      { light: '#1e293b', dark: '#f8fafc' },
      { light: '#0f172a', dark: '#e0e7ef' },
      { light: '#334155', dark: '#f3f4f6' },
      { light: '#1e293b', dark: '#d1d5db' },
    ],
    className: 'bg-gradient-to-r from-[#1e293b] to-[#0f172a]'
  },
  {
    id: 'gray',
    label: 'Gray',
    colors: [
      { light: '#f3f4f6', dark: '#334155' },
      { light: '#d1d5db', dark: '#1e293b' },
      { light: '#e5e7eb', dark: '#475569' },
      { light: '#f3f4f6', dark: '#334155' },
    ],
    className: 'bg-gradient-to-r from-[#f3f4f6] to-[#d1d5db]'
  },
  {
    id: 'blue',
    label: 'Blue',
    colors: [
      { light: '#e0f2fe', dark: '#0e2235' },
      { light: '#bae6fd', dark: '#19324a' },
      { light: '#f0f9ff', dark: '#1e293b' },
      { light: '#e0f2fe', dark: '#0e2235' },
    ],
    className: 'bg-gradient-to-r from-[#e0f2fe] to-[#bae6fd]'
  },
  {
    id: 'green',
    label: 'Green',
    colors: [
      { light: '#dcfce7', dark: '#14532d' },
      { light: '#bbf7d0', dark: '#166534' },
      { light: '#f0fdf4', dark: '#1e293b' },
      { light: '#dcfce7', dark: '#14532d' },
    ],
    className: 'bg-gradient-to-r from-[#dcfce7] to-[#bbf7d0]'
  }
]

export default function BackgroundPaletteSwitcher() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('background-palette')
    if (saved && BG_PALETTES.some(p => p.id === saved)) {
      setSelected(saved)
      document.documentElement.classList.remove(...BG_PALETTES.map(p => `bg-theme-${p.id}`))
      document.documentElement.classList.add(`bg-theme-${saved}`)
    } else {
      document.documentElement.classList.add('bg-theme-light')
    }
  }, [])

  const handleSelect = (id: string) => {
    setSelected(id)
    setOpen(false)
    document.documentElement.classList.remove(...BG_PALETTES.map(p => `bg-theme-${p.id}`))
    document.documentElement.classList.add(`bg-theme-${id}`)
    localStorage.setItem('background-palette', id)
  }

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-2 py-1 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
        onClick={() => setOpen(o => !o)}
        aria-label="Choose background theme"
        type="button"
      >
        <span className={`w-5 h-5 rounded-full ${BG_PALETTES.find(p => p.id === selected)?.className}`} />
        <span className="hidden sm:inline text-sm text-gray-700 dark:text-gray-300">Background</span>
        <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg shadow-lg z-50">
          {BG_PALETTES.map(palette => (
            <button
              key={palette.id}
              className={`flex items-center w-full gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${selected === palette.id ? 'font-semibold' : ''}`}
              onClick={() => handleSelect(palette.id)}
              type="button"
            >
              <span className="flex gap-1">
                {palette.colors.map((color, i) => (
                  <span key={i} className="w-4 h-4 rounded-full border border-gray-300 dark:border-dark-700" style={{ background: `linear-gradient(90deg, ${color.light} 50%, ${color.dark} 50%)` }} title={`Light: ${color.light}, Dark: ${color.dark}`}></span>
                ))}
              </span>
              <span>{palette.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 