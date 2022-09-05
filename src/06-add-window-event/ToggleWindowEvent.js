import { useState, useEffect } from 'react'
import WindowEvent from './WindowEvent'

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false)
  useEffect(() => {
    const dblClick = () => alert('ter')

    if (windowEvent) {
      window.addEventListener('dblclick', dblClick)
    }

    return () => window.removeEventListener('dblclick', dblClick)
  }, [windowEvent])

  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>
        Toggle Window Event
      </button>
      {windowEvent && <WindowEvent />}
    </div>
  )
}
