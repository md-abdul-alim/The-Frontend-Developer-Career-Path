import React from "react"
import BasicProps from "./components/propsComponents/BasicProps"

function PropsApp() {
    return (
        <div>
            <BasicProps  render={
                // function(name){
                //     // return <h1>Hey There, {name}</h1>
                //     // return(<h1>{name ? "Good day" : "Good evening"}, Milon!</h1>)
                //     return(<h1>{name >=0 ? "positive" : "negative"}</h1>)
                // }
                function(bool, number){
                    return(
                        <div>
                            <h1>{number}</h1>
                            <h2>{bool ? "true" : "false"}</h2>
                        </div>
                    )
                }
            }/>
        </div>
    )
}

export default PropsApp