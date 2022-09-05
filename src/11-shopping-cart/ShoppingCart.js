// there is room for improvement, the intention was to make it as fast as possible
import { useState } from 'react'

const items = [
  {
    name: 'apple',
    price: 20,
  },
  {
    name: 'banana',
    price: 10,
  },
  {
    name: 'cherry tomatoes',
    price: 30,
  },
]

const calculateTotal = cart =>
  cart.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)

function ShoppingCart() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const handleAdd = item => {
    const { name} = item

    if (![...cart].find(el => el.name === name))
      setCart(prevCart => [...prevCart, { ...item, quantity: 1 }])
  }

  const handleQuantity = (name, isIncrement = false) => {
    const arr = [...cart]
      .map(el =>
        el.name === name
          ? {
              ...el,
              quantity: isIncrement ? el.quantity + 1 : el.quantity - 1,
            }
          : el,
      )
      .filter(el => el.quantity >= 0)
    setCart(arr)
    setTotal(calculateTotal(arr))
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => handleAdd(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => handleQuantity(item.name)}>-</button>
                {item.quantity}
                <button onClick={() => handleQuantity(item.name, true)}>
                  +
                </button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>Total: ${total}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart
