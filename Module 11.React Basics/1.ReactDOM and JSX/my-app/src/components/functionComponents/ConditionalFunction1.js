import React from "react"
function ConditionalFunction1(props){
    //condition ? statement if true : statement if false
    
    /*if(props.isLoading === true){
        return(
            <h2>true</h2>
        )
    }else{
        return(
            <h2>False</h2>
        )
    }*/
    //OR
    /*return(
        <div>
            //{props.isLoading === true ? <h2>true</h2> : <h2>False</h2>}
            {props.isLoading ? <h2>true</h2> : <h2>False</h2>}
        </div>
    )*/
    //OR
    return(
        <div>
            <h2>False</h2>
        </div>
    )
}
export default ConditionalFunction1