import { useState } from 'react'
import Color from './Color'

const colors = [
  {
    hex: '#91A6FF',
    name: 'Cornflower Blue',
  },
  {
    hex: '#FF88DC',
    name: 'Persian Pink',
  },
  {
    hex: '#80FF72',
    name: 'Screamin Green',
  },
  {
    hex: '#FF5154',
    name: 'Tart Orange',
  },
]

export default function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState('white')

  const handleClick = hex => {
    setBackgroundColor(hex)
  }

  return (
    <div className="page" style={{ backgroundColor }}>
      {colors.map(color => (
        <Color
          key={color.hex}
          handleClick={handleClick}
          hex={color.hex}
          name={color.name}
        />
      ))}
    </div>
  )
}
