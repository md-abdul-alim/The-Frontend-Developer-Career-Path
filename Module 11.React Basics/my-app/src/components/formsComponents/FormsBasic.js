import React, {Component} from 'react'

class FormsBasic extends  Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    // handleChange(event){
    //     const {name, value} = event.target
    //     this.setState({
    //         [name] : value
    //         //OR
    //         // [event.target.name]: event.target.value //[event.target.name] here we are using [] because name property is also a string.so to hold an string we are using [] this.
    //     })
    // }
    ////For Checkbox manage complex function
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name] : value})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                />

                <br/>

                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                />

                <br/>

                <textarea 
                    value={"some value"}
                    onChange={this.handleChange}    
                />

                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly
                </label>

                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>

                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                {/* Formik react library */}

                <br/>
                
                <label>Favorite Color: </label>
                <select 
                    name="favColor" 
                    value={this.state.favColor} 
                    onChange={this.handleChange}
                >
                    <option value="blue">Blue</option>
                    <option value="pink">Pink</option>
                    <option value="green">Green</option>
                </select>

                <h2>
                    {this.state.firstName} 
                    {this.state.lastName}
                </h2>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favColor}</h2>
                <button>Submit</button>
            </form>
        )
    }
}
export default FormsBasic