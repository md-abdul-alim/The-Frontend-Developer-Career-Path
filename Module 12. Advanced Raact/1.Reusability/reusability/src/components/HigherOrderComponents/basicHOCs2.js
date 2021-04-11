import React from "react"

function basicHOCs2(component) {
    const Component = component
    return function(props) {
        return (
            <Component anotherProp="Extra Property" {...props} />
        )
    }
}
export default basicHOCs2