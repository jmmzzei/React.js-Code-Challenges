import { useState } from 'react'

export default function DogPics() {
  // API: https://dog.ceo/dog-api/
  const [dog, setDog] = useState(
    'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg',
  )
  const [state, setState] = useState('init')

  const handleClick = () => {
    setState('loading')
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(json => json.json())
      .then(data => {
        setDog(data.message)
        setState('success')
      })
      .catch(err => {
        setState('error')
      })
  }

  if (state === 'error') return null
  if (state === 'loading')
    return (
      <DogContainer>
        <div>Loading...</div>
      </DogContainer>
    )

  return (
    <DogContainer handleClick={handleClick}>
      {state === 'success' && (
        <img src={dog} width="50" height="50" alt="dog" />
      )}
    </DogContainer>
  )
}

export const DogContainer = ({ children, handleClick }) => {
  return (
    <div className="dog-pics">
      {children}
      <button onClick={handleClick}>🐶</button>
    </div>
  )
}
