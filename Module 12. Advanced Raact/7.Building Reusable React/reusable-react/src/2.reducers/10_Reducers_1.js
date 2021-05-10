import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

// Understanding Reducer Start
let array = [1,2,3,4,5]
let add = (x, y) => x + y

let sum = array.reduce(add, 0)
//how reducer work
// 0 + 1
// 1 + 2
// 3 + 3
// 6 + 4
// 10 + 5
// 15
console.log(sum)

function reducer(state, action){
    // if(action.type === 'ADD'){
    //     return { ...state, count: state.count + action.by }
    // } else if(action.type === 'MINUS'){
    //     return { ...state, count: state.count - action.by }
    // }
    // return state
    switch(action.type){
      case 'ADD': {
        return { ...state, count: state.count + action.by }
      }
      case 'MINUS': {
        return { ...state, count: state.count - action.by }
      }
      case 'EAT_CAKE': {
        return { ...state, cake: false}
      }
      default: {
        return state
      }
    }
}

let initialState = {count: 0, cake: true}
let actions = [
    { type: 'ADD', by: 2},
    { type: 'MINUS', by: 4},
    { type: 'ADD', by: 10},
    { type: 'EAT_CAKE'}
]
console.log(actions.reduce(reducer, initialState))
// Understanding Reducer End


const App = () => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type){
      case 'INCREMENT': {
        return { ...state, count: state.count + 1 }
      }
      case 'DECREMENT': {
        return { ...state, count: state.count - 1 }
      }
      default: {
        return state
      }
    }

  }, {
    count: 0
  })
  
  let {count} = state

  const add = () => {
    // setCount(count + 1)
    // dispatch({type: 'ADD', by: count + 1})
    dispatch({type: 'INCREMENT'})
  }
  
  const subtract = () => {
    if (count > 0) {
      // setCount(count - 1)
      // dispatch({type: 'MINUS', by: count - 1})
      dispatch({type: 'DECREMENT'})
    }
  }
  
  return (
    <section>
      <h2>Counter: Reducer 1</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <div>{count}</div>
        <button onClick={add}>+</button>
      </div>
    </section>
  )
}
ReactDOM.render(<App />, document.getElementById('reducer1'));