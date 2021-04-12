import React from "react"
import ReactDOM from "react-dom"
import ChildrenApp from "./1_ChildrenApp"
import BasicHOCs from './2_BasicHOCs'
import AdvanceHOCs from './3_AdvanceHOCs'
import BasicPropsApp from './4_BasicPropsApp'
import AdvancePropsApp from './5_AdvancePropsApp'
import PracticeAdvancePropsApp from './6_PracticeAdvancePropsApp'
import './styles.css'

// ReactDOM.render(<ChildrenApp />, document.getElementById("Children"))
// ReactDOM.render(<BasicHOCs />, document.getElementById("basicHOCs"))
// ReactDOM.render(<AdvanceHOCs />, document.getElementById("advanceHOCs"))
// ReactDOM.render(<BasicPropsApp />, document.getElementById("props"))
// ReactDOM.render(<AdvancePropsApp />, document.getElementById("advanceProps"))
ReactDOM.render(<PracticeAdvancePropsApp />, document.getElementById("practiceAdvanceProps"))
