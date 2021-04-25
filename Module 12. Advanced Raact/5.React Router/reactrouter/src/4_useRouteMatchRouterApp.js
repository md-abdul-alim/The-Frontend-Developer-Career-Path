import React from "react"
import Header from "./components/4_headerFooter/4_Header"
import Footer from "./components/4_headerFooter/4_Footer"
import Home from "./components/4_pages/4_Home"
import Profile4 from "./components/4_pages/4_profile/4_Profile"

import {Switch, Route} from "react-router-dom"

function UseRouterMatchApp() {    
    // https://reacttraining.com/blog/react-router-v5-1/#useroutematch
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile4 />
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default UseRouterMatchApp
