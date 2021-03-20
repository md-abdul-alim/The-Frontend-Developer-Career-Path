const squares = Array.from(document.querySelectorAll('.grid div'))
console.log(squares)

let currentSnake = []

//add the number 0 to the currentSnake array to see what happens
// currentSnake.push()
// console.log(currentSnake)

//Challenge: draw the snake as 3 squares long on the third row down using unshift
currentSnake.unshift(19,20,21)
console.log(currentSnake)

//Challenge: add to the HEAD of the snake using push
currentSnake.push(22)
console.log(currentSnake)


currentSnake.forEach(element => squares[element].classList.add('snake'))
///////////////////////////array pop////////////////////////
planets = ['Earth', 'Mars', 'Saturn', 'Uranus', 'Pluto']
removedPlanet = planets.pop()
console.log(removedPlanet)
planets = [
    {
        name: 'Earth',
        position: 3
    },
        {
        name: 'Mars',
        position: 4
    },
        {
        name: 'Saturn',
        position: 6
    },
        {
        name: 'Uranus',
        position: 7
    },
        {
        name: 'Pluto',
        position: 9
    },
]
removedPlanet = planets.pop()
console.log(removedPlanet)
///////////////////////array shift////////////////////////
//returns that removed item 
//change the length 

let cars = [
    {
        name: 'ford',
        colour: 'black'
    },
    {
        name: 'volkswagen',
        colour: 'blue'
    },  
    {
        name: 'aston martin',
        colour: 'red'
    }
]

let car = cars.shift()

console.log(car)

console.log(cars)