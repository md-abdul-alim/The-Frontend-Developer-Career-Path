import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext()

class OwnProviderThemeContext extends Component{
    render(){
        return(
            <Provider value="dark">
                {this.props.children}
            </Provider>
        )
    }
}
export {OwnProviderThemeContext, Consumer as ThemeContextConsumer}