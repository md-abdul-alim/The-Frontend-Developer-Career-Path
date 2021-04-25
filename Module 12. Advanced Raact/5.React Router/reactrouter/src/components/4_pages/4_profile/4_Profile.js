import React from "react"
import {Link, Switch, Route, useRouteMatch} from "react-router-dom"

import Settings from "./4_Settings"
import Info from "./4_Info"

function Profile() {
    const {path, url} = useRouteMatch()
    //const match = useRouteMatch()
    //console.log(match)

    // {
    //     path: "/user", 
    //     url: "/user", 
    //     isExact: true, 
    //     params: {}
    // }
    return (
        <div>
            <h1>Profile 4 Page</h1>
            <ul>
                <li><Link to={`${url}/info`}>Profile Info 4</Link></li>
                <li><Link to={`${url}/settings`}>Profile Settings 4</Link></li>
            </ul>
            
            <Switch>
                <Route path={`${path}/info`}>
                    <Info/>
                </Route>
                <Route path={`${path}/settings`}>
                    <Settings/>
                </Route>
            </Switch>
        </div>
    )
}

export default Profile