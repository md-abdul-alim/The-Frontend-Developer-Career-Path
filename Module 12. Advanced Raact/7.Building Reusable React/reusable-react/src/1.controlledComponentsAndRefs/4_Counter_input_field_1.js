import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [someState, setSomeState] = useState(10)

  const add = () =>{
      setCount(count+1)
  }
  const subtract = () =>{
      if(count > 0){
          setCount(count-1)
      }
  }

  const add1 = () =>{
      setCount1(count1+1)
    }
  const subtract1 = () =>{
    if(count1 > 0){
        setCount1(count1-1)
    }
  }

    const add2 = () =>{
        setCount2(count2+1)
    }
    const subtract2 = () =>{
        if(count2 > 0){
            setCount2(count2-1)
        }
    }

    const add3 = () =>{
        setCount3(count3+1)
    }
    const subtract3 = () =>{
        if(count3 > 0){
            setCount3(count3-1)
        }
    }
  
  return (
    <section>
      <h2>0.Counter: Controlled input field with js. Input field is not editable</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <input
            type="text"
            aria-label="count"
            value={count}//defaultValue={count} (uncontrolled) .but value is controlled
        />
        <button onClick={add}>+</button>
      </div>

      <h2>1.Counter: Controlled string input field. Input field is editable</h2>
      <div className="counter">
        <button onClick={subtract1}>-</button>
        <input
            type="text"
            aria-label="count"
            value={count1}//defaultValue={count} (uncontrolled) .but value is controlled
            onChange={(event) => {
                setCount1(event.target.value)
            }}
        />
        <button onClick={add1}>+</button>
      </div>

      <h2>2.Counter: Controlled number input field. Input field is editable</h2>
      <div className="counter">
        <button onClick={subtract2}>-</button>
        <input
            type="number"
            aria-label="count"
            value={count2}//defaultValue={count} (uncontrolled) .but value is controlled
            onChange={(event) => {
                setCount2(parseInt(event.target.value))
            }}
        />
        <button onClick={add2}>+</button>
      </div>

      <h2 style={{color: `hsl(${someState}, 100%, 50%)`}}>3.Change color depending on input value state.</h2>
      <div className="counter">
        <button onClick={subtract3}>-</button>
        <input
            type="number"
            aria-label="count"
            value={count3}//defaultValue={count} (uncontrolled) .but value is controlled
            onChange={(event) => {
                setCount3(parseInt(event.target.value))
                setSomeState(count3 * 10)
            }}
        />
        <button onClick={add3}>+</button>
      </div>
    </section>
  )
}
ReactDOM.render(<App />, document.getElementById('counter1Component'));

// Event => DOM update
// Event + Event + Event => State => DOM update