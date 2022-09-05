import React, { useReducer } from 'react'

const initialState = { first: 0, second: 0, resut: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'first':
      return {
        ...state,
        first: action.payload,
      }
    case 'second':
      return {
        ...state,
        second: action.payload,
      }
    case 'increment':
      return {
        ...state,
        result: state.first + state.second,
      }
    case 'decrement':
      return {
        ...state,
        result: state.first - state.second,
      }
    case 'reset':
      return {
        ...state,
        result: 0,
      }
    default:
      break
  }
}

export default function SimpleCalculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button
            key={number}
            onClick={() => {
              dispatch({ type: 'first', payload: number })
            }}>
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button
            onClick={() => {
              dispatch({ type: 'second', payload: number })
            }}
            key={number}>
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button
          onClick={() => {
            dispatch({
              type: 'increment',
            })
          }}>
          +
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'decrement',
            })
          }}>
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'reset' })
          }}>
          c
        </button>
      </div>
      <div>
        <h2>Result: {state?.result}</h2>
      </div>
    </div>
  )
}
