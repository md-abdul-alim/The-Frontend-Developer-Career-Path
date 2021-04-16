import React, {Component} from "react"
import Toggler from "./5_toggler"
import useTogglerCustomHook from './5_useTogglerCustomHook'

//Using props class component
// function Favorite(props) {
//     return (
//         <Toggler render={
//             ({on, toggle}) => (
//                 <div>
//                     <h3>Click heart to favorite</h3>
//                     <h1>
//                         <span 
//                             onClick={toggle}
//                         >
//                             {on ? "❤️" : "♡"}
//                         </span>
//                     </h1>
//                 </div>
//             )
//         }/>
//     ) 
// }

//Using Custom Hook
function Favorite(props) {
    //Using object
    // const {isToggledOn, toggle} = useTogglerCustomHook()

    //Using Array
    const [on, toggle] = useTogglerCustomHook(false)
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span 
                    onClick={toggle}
                >
                    {/* {isToggledOn ? "❤️" : "♡"} */}
                    {on ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    ) 
}
export default Favorite
