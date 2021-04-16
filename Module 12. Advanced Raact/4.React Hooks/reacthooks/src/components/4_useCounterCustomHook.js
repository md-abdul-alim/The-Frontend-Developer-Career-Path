import {useState} from 'react'
//we are not importing React. Because we are not going to render anything here.

function useCounterCustomHook(){
    // initialize state
    // create any functions we need for modifying the state
    // return whatever we want another component to have access to (count, increment)
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    // return whatever we want another component to have access to (count, increment)
    // return {count, increment}
    // return [count, increment] //returning an array.which just count the indexing
    ////OR
    return {count:count, increment: increment} //returning an object.which count real name of that object
}

export default useCounterCustomHook