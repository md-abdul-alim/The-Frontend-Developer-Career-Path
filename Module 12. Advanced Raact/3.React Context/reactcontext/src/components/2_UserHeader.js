import React, {Component} from 'react';
import UserContext from './context/2_userContext';

class UserHeader extends Component{
    static contextType = UserContext
    render(){
        return(
            <header>
                <p>Welcome, {this.context}</p>
            </header>
        )
    }
}

export default UserHeader

// UserHeader.contextType = UserContext