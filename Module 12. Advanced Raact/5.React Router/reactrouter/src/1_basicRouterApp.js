import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

import Home from './components/1_Home'
import About from './components/1_About'
import Contact from './components/1_Contact'

function basicRouterApp() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact" component={Contact}/>

      </Switch>
    </div>
  )
}

export default basicRouterApp;
