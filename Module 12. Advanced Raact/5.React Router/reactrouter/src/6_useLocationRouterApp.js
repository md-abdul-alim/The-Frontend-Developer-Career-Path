import React from "react"

import Header from "./components/3_header/3_Header"
import Home from "./components/3_pages/3_Home"
import ServicesList from "./components/6_pages/6_ServicesList"
import ServicesDetail from "./components/5_pages/5_ServiceDetail"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/services" >
                    <ServicesList />
                </Route>
                <Route path="/services/:serviceId" >
                    <ServicesDetail />
                </Route>
            </Switch>
        </div>
    )
}

export default App