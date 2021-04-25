import React from "react"
import Header from "./components/2_headerFooter/2_Header"
import Footer from "./components/2_headerFooter/2_Footer"
import Home from "./components/2_pages/2_Home"
import Profile1 from "./components/2_pages/2_profile/2_Profile1"
import Profile2 from "./components/2_pages/2_profile/2_Profile2"
import Info from './components/2_pages/2_profile/2_Info'
import Settings from './components/2_pages/2_profile/2_Settings'

import {Switch, Route} from "react-router-dom"

function NestedRouterApp() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile1">
                    <Profile1/>
                </Route>
                <Route exact path="/profile2">
                    <Profile2/>
                </Route>
                <Route path="/profile2/info">
                    <Info/>
                </Route>
                <Route path="/profile2/settings">
                    <Settings/>
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default NestedRouterApp
