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

const ColorRenderer = () =>
  colors.map(el => <Color key={el.hex} hex={el.hex} name={el.name} />)

export default ColorRenderer
