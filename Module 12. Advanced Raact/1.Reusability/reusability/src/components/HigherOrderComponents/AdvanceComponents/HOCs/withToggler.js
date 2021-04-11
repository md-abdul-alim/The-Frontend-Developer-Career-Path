// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities
import React, {Component} from 'react'

class Toggler extends Component{
    state = {
        on: this.props.defaultOnValue
    }
    toggle = ()=>{
        this.setState(prevState =>{
            return{
                on: !prevState.on
            }
        })
    }

    render(){
        // const C = this.props.component
        // OR
        const {component: C, defaultOnValue, ...props} = this.props
        return(
            // <C on={this.state.on} toggle={this.toggle} {...this.props}/>
            // OR
            <C on={this.state.on} toggle={this.toggle} {...props}/>
        )
    }
}
export function withToggler(component, optionsObj) {
    //const Toggler = component
    return function(props) {
        return (
            <Toggler component = {component} defaultOnValue={optionsObj.defaultOnValue} {...props}/>
        )
    }
}
