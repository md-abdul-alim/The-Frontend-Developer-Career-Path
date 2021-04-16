import React, {useState, Component} from "react"
import useCounterCustomHook from './components/4_useCounterCustomHook'
//Class base 
// class App extends Component {   
//     state = {
//         count: 0
//     }
    
//     increment = () => {
//         this.setState(prevState => ({count: prevState.count + 1}))
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>The count is {this.state.count}</h1>
//                 <button onClick={this.increment}>Add 1</button>
//             </div>
//         )
//     }
// }

//function base hook
// function CustomHookApp () {   
//     const [count, setCount] = useState(0)
    
//     function increment () {
//         setCount(prevCount => prevCount + 1)
//     }

//     return (
//         <div>
//             <h1>The count is {count}</h1>
//             <button onClick={increment}>Add 1</button>
//         </div>
//     )

// }

// export default CustomHookApp

//Custom hook base

function CustomHookApp () {
    const {count, increment} = useCounterCustomHook ()
    // const [number, increment] = useCounterCustomHook () //we can use any name here.because we are holding data by index number
    return (
        <div>
            <h1>The count is {count}</h1>
            <button onClick={increment}>Add 1</button>
        </div>
    )

}

export default CustomHookApp