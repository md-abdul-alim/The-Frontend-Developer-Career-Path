import React, {useState, useEffect, useRef} from "react"

function SpeedTypingRowHookApp() {
  const STARTING_TIME = 5
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e){
    const {value}= e.target
    setText(value)
  }
  
  function calculateWordCount(text){
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !=="").length
  }

  function startGame(){
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    setWordCount(0)
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }
  function endGame(){
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }
  //how to disable button in react
  // https://www.google.com/search?q=Disable+button+in+react

  //useEffect first parameter takes a function and second parameter is optional
  //useEffect first run when the component first mount
  //when the timeout change. the useEffect mount again.
  useEffect(()=>{
    if(isTimeRunning && timeRemaining>0){
      setTimeout(()=>{
        setTimeRemaining(time => time - 1)
      },1000)
    }else if(timeRemaining ===0 ){
      endGame()
    }
  },[timeRemaining, isTimeRunning])//these option change will run the useEffect

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        disabled={!isTimeRunning}
        value={text}
        ref = {textBoxRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      {/* <button onClick={()=> console.log(calculateWordCount(text))}>Start</button> */}
      <button onClick={startGame} disabled={isTimeRunning}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default SpeedTypingRowHookApp;
