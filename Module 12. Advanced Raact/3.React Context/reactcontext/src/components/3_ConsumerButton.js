import React from "react"
import PropTypes from 'prop-types'
function Button(props) {
    return (
        <button className={`${props.theme}-theme`}>Switch Theme</button>
    )
}

//This propTypes make a button more secure and stable
//this will show hints that what kind of color we should use
Button.propTypes = {
    theme: PropTypes.oneOf(['light','dark'])
}

//default button color
Button.defaultProps = {
    theme: 'light'
}

export default Button