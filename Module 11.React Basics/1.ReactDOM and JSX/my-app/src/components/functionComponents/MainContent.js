import React from 'react'

function MainContent(){
    const firstName = "Abdul"
    const lastName = "Alim"
    const date = new Date()
    // const date = new Date(2021, 4, 2 , 13) //custom date
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        backgroundColor:"purple",
        fontSize: "20px" /* 20 */
    }
    if(hours< 12){
        timeOfDay = "morning"
        styles.color="white"
    }else if (hours >=12 && hours <17){
        timeOfDay = 'afternoon'
        styles.color = "yellow"
    }else{
        timeOfDay = "night"
        styles.color = "black"
    }
    
    return(
        <main>
            <h2 style={{color: "#FF8C00", backgroundColor:"skyblue"}}>Main Content</h2>
            {/* <h2>Hello {firstName +" "+lastName}</h2> */}
            <h3 style={styles}>Hello {`${firstName} ${lastName}`}. Good {timeOfDay}. Now time is {date.getHours() % 12}p.m .</h3>
        </main>
    )
}
export default MainContent