export default function Color ({ hex, name, handleClick }) {
  return (
    <button
      onClick={() => handleClick(hex)}
      className='color-square'
      style={{ backgroundColor: hex }}
    >
      <h2>{name}</h2>
    </button>
  )
}
