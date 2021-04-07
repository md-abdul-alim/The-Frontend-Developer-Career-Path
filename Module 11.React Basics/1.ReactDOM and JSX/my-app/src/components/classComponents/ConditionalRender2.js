import React, {Component} from "react"
import ConditionalFunction2 from '../functionComponents/ConditionalFunction2'

class ConditionalRender2 extends Component{
    constructor(){
        super()
        this.state = {
            unreadMessages: [
                "A",
                "V"
            ]
        }
    }

    // && 
    // true && False

    render(){
        return(
            <div>
                {/* {
                this.state.unreadMessages.length > 0 ?
                <h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
                null
                } */}
                {/* OR */}
                {this.state.unreadMessages.length > 0 && 
                <h2>You have {this.state.unreadMessages.length} unread messages!</h2>}
                
            </div>
        )
    }
}

export default ConditionalRender2