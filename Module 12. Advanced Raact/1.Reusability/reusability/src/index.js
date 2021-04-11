import React from "react"
import ReactDOM from "react-dom"
import ChildrenApp from "./ChildrenApp"
import BasicHOCs from './BasicHOCs'
import AdvanceHOCs from './AdvanceHOCs'
import './styles.css'

// ReactDOM.render(<ChildrenApp />, document.getElementById("Children"))
// ReactDOM.render(<BasicHOCs />, document.getElementById("basicHOCs"))
ReactDOM.render(<AdvanceHOCs />, document.getElementById("advanceHOCs"))
