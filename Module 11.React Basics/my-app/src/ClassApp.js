import React, { Component } from 'react'
import "./css/ClassApp.css"
import ClassHeader from './components/classComponents/ClassHeader'
import TodoItem from './components/functionComponents/TodoItem';
import todoData from './data/todoData';
class ClassApp extends React.Component{

    render(){
        return(
            <div>
                {/* <ClassHeader/>
                <Header username="Milon"/>
                <Greeting/>
                <PropsState1/>
                <PropsState2/>
                <PropsState3/> */}
                {/* <ChangeState4/> */}
                <ToDoItem/>
            </div>
        )
    }
}


//Stage example 1
class PropsState1 extends React.Component{
    // https://scrimba.com/p/p4Mrt9/cQnMDHD
    //state component maintain. cannot change state value.
    constructor(){
        super()
        this.state = {
            answer: "Yes"
        }
    }
    render(){
        
        return(
            <div><h2>Is state important to know?{this.state.answer}</h2></div>
        )
    }
}
//Stage example 2
class PropsState2 extends Component {
    constructor(){
        super()
        this.state = {
            name: "Milon",
            age: 25
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <h3>{this.state.age} years old</h3>
            </div>
        )    
    }
}
//State Example 3
class PropsState3 extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: true,
        }
    }
    render() {
        let wordDisplay
        if (this.state.isLoggedIn){//if (this.state.isLoggedIn ===true){
            wordDisplay = "in"
        }else{
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

//State Example 4 (Changing State)
class ChangeState4 extends React.Component{
    constructor(){
        super()
        this.state={
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        //alert("Change!")
        // this.setState({count:1})
        this.setState(prevState =>{
            return{
                count: prevState.count + 1
            }
        })
    }
    render(){
        return(
            <div className="divClass">
                <h2 className="headerClass">{this.state.count}</h2>
                <button className="buttonClass" onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        return(
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greeting extends Component{
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

class ToDoItem extends React.Component{
    constructor(){
        super()
        this.state = {
            todo: todoData
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(id){
        //console.log("Change from App",id)
        this.setState(prevState=>{
            const updatedTodo = prevState.todo.map(todo =>{
                if(todo.id ===id){
                    //todo.completed = !todo.completed// we can not change the main state directly
                    return{
                        ...todo,//... this means give me all of the property from todo to manually override
                        completed: !todo.completed
                    }
                }
                return todo
            })
            console.log(prevState.todo)
            console.log(updatedTodo)
            return{
                todo: updatedTodo
            }
        })
    }
    render(){
        const todoItem = this.state.todo.map(
            item => <TodoItem 
                key={item.id} 
                item={item}
                handleChange = {this.handleChange}
            />
        )
        return(
            <div className="todo-list">
                {todoItem}
            </div>
        )
    }
}
export default ClassApp