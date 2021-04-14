import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext()

class ChangeProviderStateThemeContext extends Component{
    state = {
        theme: 'dark'
    }
    toggleTheme=()=>{
        this.setState(prevState=>{
            return{
                theme: prevState.theme === 'light' ? 'dark' : 'light'
            }
        })
    }
    render(){
        return(
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
                {/* <button onClick={this.toggleTheme}>Change Theme</button> */}
            </Provider>
        )
    }
}
export {ChangeProviderStateThemeContext, Consumer as ThemeContextChangeConsumerState}