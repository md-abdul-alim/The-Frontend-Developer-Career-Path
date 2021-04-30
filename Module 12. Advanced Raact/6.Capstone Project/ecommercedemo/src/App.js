import React from "react"
import Header from "./components/header/Header"
import Cart from "./components/pages/Cart"
import Photos from "./components/pages/Photos"

import { Switch, Route } from 'react-router-dom'

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App