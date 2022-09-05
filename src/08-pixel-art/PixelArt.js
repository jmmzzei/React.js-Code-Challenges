import React, { useContext } from 'react'

const Context = React.createContext('black')

function ColorPicker() {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  const [, setContext] = useContext(Context)

  const handleClick = color => {
    setContext(color)
  }

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => handleClick(color)}
        />
      ))}
    </div>
  )
}

function Pixel() {
  const [context] = useContext(Context)
  const [color, setColor] = React.useState('lightGrey')

  const handleClick = () => {
    setColor(context)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        height: '20px',
        width: '20px',
        backgroundColor: color,
        margin: '1px',
      }}
    />
  )
}

function Pixels() {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        width: '210px',
        margin: '0 auto',
      }}>
      {pixels}
    </div>
  )
}

export const ContextProvider = ({ children }) => {
  const [state, setState] = React.useState('black')

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  )
}

export default function PixelArt() {
  return (
    <ContextProvider>
      <div>
        <ColorPicker />
        <Pixels />
      </div>
    </ContextProvider>
  )
}
