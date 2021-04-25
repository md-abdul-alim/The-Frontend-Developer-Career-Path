import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"

import BasicRouterApp from "./1_basicRouterApp"
import NestedRouterApp from "./2_nestedRouterApp"
import UseParamsRouterApp from "./3_useParamsRouterApp"
import UseRouteMatchApp from "./4_useRouteMatchRouterApp"
import UseHistoryMatchApp from "./5_useHistoryRouterApp"
import UseLocationApp from "./6_useLocationRouterApp"
import RedirectRouterApp from './7_redirectRouterApp'
import PracticeRouterApp from './8_practiceRouterApp'

import './css/2_styles.css'
////One(1)
// ReactDOM.render(
//   <Router>
//     <BasicRouterApp />
//   </Router>,
//   document.getElementById("basicRouter")
// )

////Two(2)
// ReactDOM.render(
//   <Router>
//     <NestedRouterApp />
//   </Router>,
//   document.getElementById("nestedRouter")
// )

////Three(3)
// ReactDOM.render(
//   <Router>
//     <UseParamsRouterApp />
//   </Router>,
//   document.getElementById("useParamsRouter")
// )

// ////Two(4)
// ReactDOM.render(
//   <Router>
//     <UseRouteMatchApp />
//   </Router>,
//   document.getElementById("useRouteMatchRouter")
// )

// ////Two(5)
// ReactDOM.render(
//   <Router>
//     <UseHistoryMatchApp />
//   </Router>,
//   document.getElementById("useHistoryRouter")
// )

// ////Six(6)
// ReactDOM.render(
//   <Router>
//     <UseLocationApp />
//   </Router>,
//   document.getElementById("useLocationRouter")
// )

////Seven(7)
// ReactDOM.render(
//   <Router>
//     <RedirectRouterApp />
//   </Router>,
//   document.getElementById("redirectRouter")
// )

////Seven(8)
ReactDOM.render(
  <Router>
    <PracticeRouterApp />
  </Router>,
  document.getElementById("practice1Router")
)