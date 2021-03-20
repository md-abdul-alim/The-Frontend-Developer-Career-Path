const quoteDisplay = document.querySelector('#quote')
const button = document.querySelector('button')

const quotes = [
    'Do something today that your future self will thankyou for',
    "Don't worry, be happy!",
    'Your limitation is only your imagination'
]

function showQuote(){
    let randomNumber = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomNumber]
    quoteDisplay.innerHTML = randomQuote
}
button.addEventListener('click', showQuote);
/////////////////Array Slice/////////////////////////
const films = ['Elf', 'Borat', 'It', 'Split', 'Us']

//get the last 2 films from the array and put them in the thriller section
const thriller = films.slice(3, 5)
console.log(thriller)
console.log(films)

//get the 3rd and 4th film from the array and put them in the horror section
const horror = films.slice(2,4)
console.log(horror)

//get the first 2 films from the array and put them in the comedy section
const comedy = films.slice(0,2)
console.log(comedy)
//////////////////////Array push///////////////////////
let books = ['Moby Dick', 'Life of Pi', 'Sapiens']

//adds new items to the END of an exisitng array
//it mutates that exisitng array
//change the length of that array

books.push('The Hungry Caterpillar')

console.log(books)

//push new numbers into my lottery number log:

let lottery = [34, 67, 39, 67, 23]

let number = 49
lottery.push(number)
console.log(lottery)
//////////////////////Array Unshift///////////////////////
let lotter = [5, 7, 8, 10, 12]

//unshift adds new items to the START of an array
//it will change the length of the array
const num = 34
lotter.unshift(num)
console.log(lotter)
//Add another object to the start of our gardenPlant array:
let gardenPlants = [ 
    {
        name: 'roses', 
        origin: 'China'
    },
    {
        name: 'tulips', 
        origin: 'Asia'
    },
]
console.log(gardenPlants)
const plant = {
    name: 'daffodil',
    origin: 'Spain'
}
gardenPlants.unshift(plant)
console.log(gardenPlants)