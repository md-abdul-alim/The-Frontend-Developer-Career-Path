import React from "react"
import {basicHOCs1} from './components/HigherOrderComponents/basicHOCs1'
import basicHOCs2 from './components/HigherOrderComponents/basicHOCs2'

function HOCsApp(props) {
    console.log(props)
    return (
        <div>Hello world!</div>
    )
}

// const basicHOCs = basicHOCs1(HOCsApp)
const basicHOCs = basicHOCs2(HOCsApp)
export default basicHOCs