import React, {Component} from 'react'
/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */
class FormsPractice extends  Component{
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        //Without checkbox this is perfectly work
        // const {name, value} = event.target
        // this.setState({
        //     [name]:value
        // })

        // If we have checkbox than follow this way
        const {name, value, type, checked} =event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }
    
    render() {
        return (
            <main>
                <form>
                    <input name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" /><br />
                    <input name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" /><br />
                    <input name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age" /><br />
                    
                    <label>
                        <input type="radio" name="gender" value="male" checked={this.state.gender ==="male"} onChange={this.handleChange}/> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" checked={this.state.gender ==="female"} onChange={this.handleChange}/> Female
                    </label>
                    <br />
                    
                    <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                        <option value="">-- Please Choose a destination</option>
                        <option value="norway">Norway</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="germany">Germany</option>
                    </select>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        />Vegan
                    </label>
                    <br />

                    <label>
                        <input 
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        />Kosher
                    </label>
                    <br />

                    <label>
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        />LactoseFree
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p> {/*react doesn't print boolean value*/}
                    <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                    <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
                </p>
            </main>
        )
    }
}
export default FormsPractice