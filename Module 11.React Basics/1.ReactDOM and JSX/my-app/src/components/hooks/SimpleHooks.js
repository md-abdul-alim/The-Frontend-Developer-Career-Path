import React, {useState, useEffect} from "react"
import randomcolor from 'randomcolor'
function SimpleHooks() {
    const [count, setCount] = useState(0)
    const [countTime, setCountTime] = useState(0)
    const [color, setColor] = useState("")
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    useEffect(() =>{
        setColor(randomcolor())
        // setInterval(() =>{console.log("interval")}, 1000)
    },[count])//useEffect will run whenever the count value will change

    // TimeCount

    useEffect(() =>{
        const intervalId = setInterval(()=>{
            //setCountTime(prevCountTime => prevCountTime + 1)
        },1000)
        return () => clearInterval(intervalId)
    },[])

    useEffect(() => {
        setColor(randomcolor())
    },[countTime])
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1 style={{color: color}}>{countTime}</h1>
        </div>
    )
}

export default SimpleHooks