import React from "react"
import ConsumerThemeContext from "./context/3_consumerThemeContext"

function Header(props) {

    return (
        <ConsumerThemeContext.Consumer>
            {theme =>(
                <header className={`${theme}-theme`}>
                    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ConsumerThemeContext.Consumer>
    )    
}

export default Header
