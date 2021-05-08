import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

let z = 10
const add = (x, y) =>{
  z = z + x //this is a side effect;
  return x + y
}
const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  let initialFocusRef = useRef(null)
  let focusRef = useRef(null)

  useEffect(() => {
    initialFocusRef.current.focus()
  }, [] ) // dependency array

  // no array => called on initial render, and every state change
  // [] => when it empty. only called on initial render
  // [variable] => called on initial render, and whenever variable changes

  return (
    <section>
      <h2>Email Signup</h2>
      <input type="text" value={name} ref={initialFocusRef} placeholder="Name" onChange={(e) => {
        setName(e.target.value)
        if (name.length >= 10){
          focusRef.current.focus()
        }
      }} />
      <input type="text" value={email} ref={focusRef} placeholder="Email" onChange={(e) => {
        setEmail(e.target.value)
      }} />
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
