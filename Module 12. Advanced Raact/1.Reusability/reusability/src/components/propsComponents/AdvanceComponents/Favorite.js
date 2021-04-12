import React, {Component} from "react"
import WithToggler from './Props/withToggler'

function Favorite(props) {
    return(
        <WithToggler render={
            // function(on, toggle){
            //     return (
            //         <div>
            //             <h3>Click heart to favorite</h3>
            //             <h1>
            //                 <span onClick={toggle} >
            //                     {on ? "❤️" : "♡"}
            //                 </span>
            //             </h1>️️️
            //         </div>
            //     )
            // }
            ////Using error function
            // (on, toggle) =>(
            //     <div>
            //         <h3>Click heart to favorite</h3>
            //         <h1>
            //             <span onClick={toggle} >
            //                 {on ? "❤️" : "♡"}
            //             </span>
            //         </h1>️️️
            //     </div>
            // )
            // OR
            ({on, toggle}) =>(
                <div>
                    <h3>Click heart to favorite</h3>
                    <h1>
                        <span onClick={toggle} >
                            {on ? "❤️" : "♡"}
                        </span>
                    </h1>️️️
                </div>
            )
            
        }/>
    )
}

export default Favorite