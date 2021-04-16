import {useState} from 'react'

function useToggler(defaultOnValue = false){
    const [isToggledOn, setIsToggledOn] = useState(defaultOnValue)

    function toggle(){
        setIsToggledOn(prev => !prev)
    }

    //returning an object
    // return{isToggledOn,toggle}

    //returning an array
    return[isToggledOn, toggle]
}

export default useToggler