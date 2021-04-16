import React, {useContext} from "react"
import {ThemeContext} from "./2_ClassThemeContextHook"

function Header(props) {
    //this will bring all data
    // const context = useContext(ThemeContext)
    //this will bring only expected data
    const {theme} = useContext(ThemeContext)
    return (
        <header className={`${theme}-theme`}>
            {/* <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2> */}
            <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
    )    
}

export default Header
