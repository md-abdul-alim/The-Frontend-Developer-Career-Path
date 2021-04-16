import React, {useState} from "react"
const ThemeContext = React.createContext()

/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 * 
 */

function FunctionThemeContextProvider(props){
    const [theme, setTheme] = useState("dark")
    
    function toggleTheme(){
        // setTheme(prevTheme => {
        //     return (
        //         prevTheme === "light" ? "dark" : "light"
        //     )
        // })
        //OR
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {FunctionThemeContextProvider, ThemeContext}//(provider, consumer)
