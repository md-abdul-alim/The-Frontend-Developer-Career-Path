import React from "react"

function BasicProps(props) {
    return (
        <div>
            {/* {props.render("Milon")} */}
            {/* {props.render(-42)} */}
            {props.render(true, 42)}
        </div>
    )
}

export default BasicProps