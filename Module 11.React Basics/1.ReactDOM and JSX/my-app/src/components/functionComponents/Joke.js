import React from 'react'

function Joke(props){
    return(
        <div>
            <h3 style={{color: !props.punchLine && "#888888"}}>Question: {props.question}</h3>
            
            <h4 style={{display: props.punchLine ? "block" : "none"}}>Answer: {props.punchLine}</h4>
            {/* <h4 style={{display: !props.punchLine && "none"}}>Answer: {props.punchLine}</h4> */}
            <hr/>
        </div>
    )
}
export default Joke