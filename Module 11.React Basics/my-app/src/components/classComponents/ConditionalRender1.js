import React, {Component} from "react"
import ConditionalFunction1 from '../functionComponents/ConditionalFunction1'

class ConditionalRender1 extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading: false
            })
        },1500)
    }

    render(){
        return(
            <div>
                {/* <ConditionalFunction isLoading={this.state.isLoading}/> */}
                {this.state.isLoading ? <h2>True</h2> : <ConditionalFunction1/>}
            </div>
        )
    }
}

export default ConditionalRender1