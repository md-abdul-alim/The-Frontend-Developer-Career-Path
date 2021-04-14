import React from "react"
import {ThemeContextChangeConsumerState} from "./context/6_ChangeProviderStateThemeContext"

function Header() {

    return (
        <ThemeContextChangeConsumerState>
            {context =>(
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextChangeConsumerState>
    )    
}

export default Header
