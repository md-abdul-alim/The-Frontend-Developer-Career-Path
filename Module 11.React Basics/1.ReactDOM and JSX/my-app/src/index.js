import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import './css/lifecycle.css'
import FunctionApp from './FunctionApp'
import ClassApp from './ClassApp';
import EventsHandling from './EventsHandling';
import LifeCycle from './LifeCycle'


// ReactDOM.render(<FunctionApp/>, document.getElementById('root'))
// ReactDOM.render(<ClassApp/>, document.getElementById("classComponent"))
// ReactDOM.render(<EventsHandling/>, document.getElementById("EventComponent"))
ReactDOM.render(<LifeCycle/>, document.getElementById("LifeCycleMethod"))