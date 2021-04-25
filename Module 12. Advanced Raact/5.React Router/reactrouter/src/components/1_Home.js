import React from 'react'
//Hook
import {useLocation, useParams, useHistory, useRouteMatch} from "react-router-dom"

function Home(props){
    console.log(props)
    return(
        <h1>Home page</h1>
    )
}

export default Home