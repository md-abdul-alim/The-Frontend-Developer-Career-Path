import React, {useState, useEffect, useRef} from "react"
import useSpeedTypingCustomHookFunction from './components/6_SpeedTypingCustomHookFunction'
function SpeedTypingCustomHookApp() {
  const {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount} = useSpeedTypingCustomHookFunction(5)
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
      <button onClick={startGame} disabled={isTimeRunning}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default SpeedTypingCustomHookApp;
