import React from 'react';
const {Provider, Consumer} = React.createContext()

class FinalUserContextProvider extends React.Component{
    state={
        username: "adminmilon"
    }
    
    changeUsername = (username) => {
        this.setState({username})
    }
    render(){
        const {username} = this.state
        return(
            <Provider value={{username, changeUsername: this.changeUsername}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {FinalUserContextProvider, Consumer as FinalUserContextConsumer}