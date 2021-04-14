import React from "react"
import {ThemeContextChangeConsumerState} from "./context/6_ChangeProviderStateThemeContext"

function Button(props) {
    return (
        <ThemeContextChangeConsumerState>
            {context =>(
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextChangeConsumerState>
    )
}

export default Button