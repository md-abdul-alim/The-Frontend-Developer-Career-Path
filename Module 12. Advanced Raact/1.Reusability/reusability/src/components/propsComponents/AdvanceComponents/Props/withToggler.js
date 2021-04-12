import React, {Component} from 'react'

class Toggler extends Component{
    state = {
        on: this.props.defaultOnValue
    }
    static defaultProps ={
        defaultOnValue: false
    }
    toggle = ()=>{
        this.setState(prevState =>({ on: !prevState.on }))
    }

    render(){
        return(
            <div>
                {/* {this.props.render(this.state.on, this.toggle)} */}
                {/* OR */}
                {this.props.render({
                    on:this.state.on, 
                    toggle: this.toggle
                })}
            </div>
        )
    }
}

// Toggler.defaultProps = {
//     defaultOnValue: false
// }
export default Toggler
