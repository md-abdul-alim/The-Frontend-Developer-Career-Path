import React from "react"
import Menu from "./components/HigherOrderComponents/AdvanceComponents/Menu"
import Favorite from "./components/HigherOrderComponents/AdvanceComponents/Favorite"

function App() {
    return (
        <div>
            <Menu />
            <hr />
            <Favorite />
        </div>
    )
}

export default App