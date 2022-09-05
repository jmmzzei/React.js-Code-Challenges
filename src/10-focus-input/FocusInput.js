import React, { useRef } from 'react'

export default function FocusInput() {
  const input = useRef(null)

  React.useEffect(() => {
    input.current.focus()
  }, [])

  return (
    <div>
      <label htmlFor="focused-input">Focus me on page load!</label>
      <input ref={input} name="focused-input"></input>
    </div>
  )
}
// it can be done more simple with the autoFocus input's attr
