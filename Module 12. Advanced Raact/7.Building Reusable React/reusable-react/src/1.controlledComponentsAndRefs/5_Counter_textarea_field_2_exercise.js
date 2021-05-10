import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CharacterCounterInput = ({ text, defaults }) => {
    const [message, setMessage] = useState('')
    const maxLength = 280
  
    return <div className="counterInput">
        <div>
            {defaults.map((b) => {
                return <button 
                    key={b}
                    onClick = {()=>{
                        setMessage(b)
                    }}
                    >{b}</button>
            })}
        </div>

        <textarea
        placeholder={text}
        value = {message}
        onChange={(event) =>{
            setMessage(event.target.value)
        }}
        />

        <div>{message.length}/{maxLength}</div>
    </div>
}

const LimitedCharacterCounterInput = ({ text, defaults }) => {

  const [message1, setMessage1] = useState('')
  const maxLength1 = 20

  return <div className={`counterInput ${message1.length > maxLength1 ? "tooLong" : ""}`}>
      <div>
          {defaults.map((b) => {
              return <button 
                  key={b}
                  onClick = {()=>{
                      setMessage1(b)
                  }}
                  >{b}</button>
          })}
      </div>

      <textarea
      placeholder={text}
      value = {message1}
      onChange={(event) =>{
          setMessage1(event.target.value)
      }}
      />

      <div>{message1.length}/{maxLength1}</div>
  </div>
}
const App = () => {
  let defaultMoods = ["Great", "Okay", "Bad", "Terrible"]
  
  return (
    <section>
      <h2>Unlimited textarea</h2>
      <CharacterCounterInput text={"How was your day?"} defaults={defaultMoods}/>
      <h2>Limited textarea</h2>
      <LimitedCharacterCounterInput text={"How was your day?"} defaults={defaultMoods}/>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('counter2Component'));