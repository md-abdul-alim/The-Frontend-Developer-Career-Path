import React from 'react'

function ContactCard1(props){
    console.log(props)
    return(
        <div className="contact-card">
            <img src={props.imgUrl} alt="Cat"/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard1