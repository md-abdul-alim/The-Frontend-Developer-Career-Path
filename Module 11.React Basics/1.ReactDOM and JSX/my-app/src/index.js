import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import './css/lifecycle.css'
import './css/styleMeme.css'
import FunctionApp from './FunctionApp'
import ClassApp from './ClassApp';
import EventsHandling from './components/functionComponents/EventsHandling';
import LifeCycle from './components/classComponents/LifeCycle'
import ConditionalRender1 from './components/classComponents/ConditionalRender1'
import ConditionalRender2 from './components/classComponents/ConditionalRender2'
import ConditionalRender3 from './components/classComponents/ConditionalRender3'
import ApiCallClassComponent from './components/apiComponents/ApiCallClassComponent';
import FormsBasic from './components/formsComponents/FormsBasic';
import FormsPractice from './components/formsComponents/FormsPractice';
import FormsApp from './components/formsComponents/ContainerAndComponentArchitecture/FormsApp';
import MemeGenerator from './components/Meme_Generator_Project/App'
import SimpleHooks from './components/hooks/SimpleHooks'
import HooksComplex from './components/hooks/HooksComplex'


// ReactDOM.render(<FunctionApp/>, document.getElementById('root'))
// ReactDOM.render(<ClassApp/>, document.getElementById("classComponent"))
// ReactDOM.render(<EventsHandling/>, document.getElementById("EventComponent"))
// ReactDOM.render(<LifeCycle/>, document.getElementById("LifeCycleMethod"))
// ReactDOM.render(<ConditionalRender1/>, document.getElementById("ConditionalRender1"))
// ReactDOM.render(<ConditionalRender2/>, document.getElementById("ConditionalRender2"))
// ReactDOM.render(<ConditionalRender3/>, document.getElementById("ConditionalRender3"))
// ReactDOM.render(<ApiCallClassComponent/>, document.getElementById("apiClassComponent"))
// ReactDOM.render(<FormsBasic/>, document.getElementById("formsBasic"))
// ReactDOM.render(<FormsPractice/>, document.getElementById("formsPractice"))
// ReactDOM.render(<FormsApp/>, document.getElementById("formsContainerAndComponentArchitecture"))
// ReactDOM.render(<MemeGenerator/>, document.getElementById("memeGeneratorProject"))
ReactDOM.render(<SimpleHooks/>, document.getElementById("hooksSimple"))
// ReactDOM.render(<HooksComplex/>, document.getElementById("hooksComplex"))