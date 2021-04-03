import React from "react"

function handleClick(){
    alert("Hello Milon")
}

//Events Documentation: // https://reactjs.org/docs/events.html#supported-events
function App() {
    return (
        <div>
            <img onMouseOver={() => alert("Hovered")} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App
