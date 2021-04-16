import React, {useContext} from "react"
import {ThemeContext} from "./3_FunctionThemeContextHook"

function Button(props) {
    //this will bring all data
    // const context = useContext(ThemeContext)
    //this will bring only expected data
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <button 
            // onClick={context.toggleTheme} 
            onClick={toggleTheme} 
            className={`${theme}-theme`}
            >
            Switch Theme
        </button>    
    )    
}

export default Button
