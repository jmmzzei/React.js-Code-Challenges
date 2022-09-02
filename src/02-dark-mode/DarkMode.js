import { useState } from 'react'

export default function DarkMode() {
  const [mode, setMode] = useState('light')

  return (
    <div className={mode === 'light' ? 'page' : 'page dark-mode'}>
      <button className="dark-mode-button" onClick={() => setMode('dark')}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={() => setMode('light')}>
        Light Mode
      </button>
    </div>
  )
}
