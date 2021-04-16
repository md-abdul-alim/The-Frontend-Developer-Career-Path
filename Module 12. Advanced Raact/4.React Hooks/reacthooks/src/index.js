import React from "react"
import ReactDOM from "react-dom"
import SpeedTypingRowHookApp from "./1_SpeedTypingRowHookApp"

import ClassContextHookApp from "./2_ClassContextHookApp"
import {ClassThemeContextProvider} from './components/2_ClassThemeContextHook'

import FunctionContextHookApp from "./3_FunctionContextHookApp"
import {FunctionThemeContextProvider} from './components/3_FunctionThemeContextHook'

import CustomHookApp from './4_CustomHookApp'

import TogglerByHook from './5_TogglerByHookApp'

import SpeedTypingCustomHookApp from "./6_SpeedTypingCustomHookApp"

import './css/1_style.css'
// import './css/2_style.css'

////1
// ReactDOM.render(<SpeedTypingRowHookApp />, document.getElementById("speedTypingRowHook"))

////2
////Class base function
// ReactDOM.render(
//     <ClassThemeContextProvider>
//         <ClassContextHookApp />
//     </ClassThemeContextProvider>,
//     document.getElementById("classContextHook")
// )

////3
////Function base same task with hook.and it is best use of hook
// ReactDOM.render(
//     <FunctionThemeContextProvider>
//         <FunctionContextHookApp />
//     </FunctionThemeContextProvider>,
//     document.getElementById("functionContextHook")
// )


////4
////Custom Hook
// ReactDOM.render(<CustomHookApp />, document.getElementById("customHook"))

////5
// ReactDOM.render(<TogglerByHook />, document.getElementById("togglerByHook"))

////6
ReactDOM.render(<SpeedTypingCustomHookApp />, document.getElementById("speedTypingCustomHook"))