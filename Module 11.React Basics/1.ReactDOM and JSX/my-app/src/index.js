import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import FunctionApp from './FunctionApp'
import ClassApp from './ClassApp';



ReactDOM.render(<FunctionApp/>, document.getElementById('root'))
ReactDOM.render(<ClassApp/>, document.getElementById("classComponent"))