import React, { Component } from 'react'

import ClassHeader from './components/classComponents/ClassHeader'
class ClassApp extends React.Component{

    render(){
        return(
            <div>
                <ClassHeader/>
                <Header username="Milon"/>
                <Greeting/>
                <PropsState/>
            </div>
        )
    }
}


class PropsState extends React.Component{
    // https://scrimba.com/p/p4Mrt9/cQnMDHD
    //state component maintain. cannot change state value.
    constructor(){
        super()
        this.state = {
            answer: "Yes"
        }
    }
    render(){
        
        return(
            <div><h2>Is state important to know?{this.state.answer}</h2></div>
        )
    }
}
class Header extends React.Component{
    render(){
        return(
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greeting extends Component{
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}
export default ClassApp