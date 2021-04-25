import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Settings from "./2_Settings"
import Info from "./2_Info"

function Profile() {
    return (
        <div>
            <h1>Profile 1 Page</h1>
            <ul>
                <li><Link to="/profile1/info">Profile Info 1</Link></li>
                <li><Link to="/profile1/settings">Profile Settings 1</Link></li>
            </ul>
            
            <Switch>
                <Route path="/profile1/info">
                    <Info/>
                </Route>
                <Route path="/profile1/settings">
                    <Settings/>
                </Route>
            </Switch>
        </div>
    )
}

export default Profile