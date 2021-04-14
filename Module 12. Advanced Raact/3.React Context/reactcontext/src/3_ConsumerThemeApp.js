import React from "react"

import Header from "./components/3_ConsumerHeader"
import Button from "./components/3_ConsumerButton"
import ConsumerThemeContext from './components/context/3_consumerThemeContext'
function App() {
    return (
        <div>
            <Header />

            <ConsumerThemeContext.Consumer>
                {theme=>(
                    <Button theme={theme}/>
                )}
            </ConsumerThemeContext.Consumer>

            <Button theme='dark'/>

            {/* Button secure test */}
            <ConsumerThemeContext.Consumer>
                {()=>(
                    <Button/>
                )}
            </ConsumerThemeContext.Consumer>
            <Button/>
            <Button theme="nothing"/>

        </div>
    )
}

export default App