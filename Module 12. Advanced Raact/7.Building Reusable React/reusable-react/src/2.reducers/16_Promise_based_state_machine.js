import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

/*

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

*/
//Reducer
function useAuth(){
    let [state, dispatch]= useReducer((state, action)=>{
        switch(action.type){
            case 'LOADING': {
                return { ...state, loading: true }
            }
            case 'RESOLVED': {
                return {
                    ...state,
                    loading: false,
                    response: action.response,
                    error: null
                }
            }
            case 'ERROR':{
                return {
                    ...state,
                    loading: false,
                    response: null,
                    error: action.error
                }
            }
            default:{
                return state
            }
        }
    }, {
        loading: false,
        response: null,
        error: null
    })


  //useEffect for api calling
  useEffect(()=>{
    let isCurrent = true
    dispatch({type: 'LOADING'})
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        if (isCurrent){
            // setUser(json)
            dispatch({type: 'RESOLVED', response: json})
        }
    }).catch(error => {
        // console.log('error')
        dispatch({ type: 'ERROR', error})
    })

    //clean up function
    return () =>{
        isCurrent = false
    }
    
  }, [])// [] empty dependency

  return [state.loading, state.response, state.error]
}


const App = () => {
   //   let [user, setUser] = useState(null);
  //   let { loading, response, error } = state
  let [ loading, response, error ] = useAuth()
  
  return (
    <section>
      <h2>Get User Data</h2>
      <div className="user">
          { loading && <div>Loadding...</div>}
          { error && <div className="error">ERROR OH NO</div>}
        {response && <>
          User ID: {response.id} <br />
          User Title: {response.title}
        </>}
      </div>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('promiseBasedStateMachine'));