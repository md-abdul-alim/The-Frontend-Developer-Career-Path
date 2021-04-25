import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function Profile() {
    return (
        <div>
            <h1>Profile 2 Page</h1>
            <ul>
                <li><Link to="/profile2/info">Profile Info 2</Link></li>
                <li><Link to="/profile2/settings">Profile Settings 2</Link></li>
            </ul>
            
        </div>
    )
}

export default Profile