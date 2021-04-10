import React, {useState} from 'react'


function HooksComplex(){
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])


    function handleChange(event) {
        const {name, value} = event.target
        // setInputData(prevInputData => ({...prevInputData, [name]: value}))
        //OR
        setInputData(prevInputData =>{
            return{
                ...prevInputData,
                [name]: value
            }
        })
    }
    console.log(inputData)
    
    function handleSubmit(event) {
        event.preventDefault()
        setContactsData(prevContacts =>[...prevContacts, inputData])
    }
    console.log(contactsData)

    const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Last Name"
                    name="lastName" 
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add contact</button>
            </form>
            {contacts}
        </div>
        
    )
}

export default HooksComplex