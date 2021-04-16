import React from "react"
import Menu from "./components/togglerComponents/5_menu"
import Favorite from "./components/togglerComponents/5_favorite"

function TogglerByHook() {
    return (
        <div>
            <Menu />
            <hr />
            <Favorite />
        </div>
    )
}

export default TogglerByHook