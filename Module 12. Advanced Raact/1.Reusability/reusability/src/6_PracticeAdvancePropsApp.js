import React from "react"
import DataFetcher from "./components/propsComponents/practiceComponent/DataFetcher"

function PracticeAdvancePropsApp() {    
    return (
        <div>
            <DataFetcher url="https://swapi.dev/api/people/1">
                {(obj) =>{
                    return(
                        obj.loading ? <h1>Loading...</h1> : <p>{JSON.stringify(obj.data)}</p>
                    )
                }}
            </DataFetcher>
        </div>
    )
}

export default PracticeAdvancePropsApp