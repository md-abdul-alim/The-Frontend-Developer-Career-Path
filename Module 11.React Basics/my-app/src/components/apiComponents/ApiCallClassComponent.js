import React, {Component} from 'react';
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
class ApiCallClassComponent extends Component{
    constructor(){
        super()
        this.state = {
            loading: false,//this is for checking that api is calling or not
            character: {}//we will hold api data in this state
        }
    }

    componentDidMount(){
        this.setState({loading: true})//here we are confirm that api is calling
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())//resolving the fetch promise.we are converting the data into json format(javaScript object)
            //.then(data => console.log(data))//here we are receiving the data we want
            .then(data => {//we are holding data into our state.
                this.setState({
                    loading: false, //as api is called.so we are change the loading status false again.
                    character: data
                })
            })
        }
    render(){
        const text = this.state.loading ? "loading..." : this.state.character.name
        return(
            <div>
                {/* {this.state.character.name} */}
                <p>{text}</p>
            </div>
        )
    }
}

export default ApiCallClassComponent