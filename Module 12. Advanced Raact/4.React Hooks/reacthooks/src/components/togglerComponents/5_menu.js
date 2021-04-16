import React from "react"
import Toggler from "./5_toggler"
import useTogglerCustomHook from './5_useTogglerCustomHook'

// render the Toggler inside the Menu, and use the render prop to determine what will get displayed
// remember to bring in the "goodies" (state and methods) to that function so you can make this work

//Using props class component
// function Menu(props) {
//     return (
//         <Toggler defaultOnValue={true} render={({on, toggle}) => (
//             <div>
//                 <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
//                 <nav style={{display: on ? "block" : "none"}}>
//                     <h6>Signed in as Coder123</h6>
//                     <p><a>Your Profile</a></p>
//                     <p><a>Your Repositories</a></p>
//                     <p><a>Your Stars</a></p>
//                     <p><a>Your Gists</a></p>
//                 </nav>
//             </div>
//         )}/>
//     ) 
// }


//Using custom hook
function Menu(props) {
    const [isToggledOn, toggle] = useTogglerCustomHook(true)
    return (
        <div>
            <button onClick={toggle}>{isToggledOn ? "Hide" : "Show"} Menu </button>
            <nav style={{display: isToggledOn ? "block" : "none"}}>
                <h6>Signed in as Coder123</h6>
                <p><a>Your Profile</a></p>
                <p><a>Your Repositories</a></p>
                <p><a>Your Stars</a></p>
                <p><a>Your Gists</a></p>
            </nav>
        </div>
    ) 
}
export default Menu