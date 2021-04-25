import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile1">Profile1</Link></li>
                <li><Link to="/profile2">Profile2</Link></li>
            </ul>
        </header>
    )
}

export default Header