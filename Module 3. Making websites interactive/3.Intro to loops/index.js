const name = 'Ania'
function autoComplete() {
    var age1 = 23
    let age2 = 23
    {
        var age1 = 24
        let age2 = 23
    }
    console.log('I, ' + name + ' can confirm, I am currently ' + age1 + ' years of age.' + age2 + '')
}
autoComplete()
////////////////////////////////////
//We need to write a function that will allow us to count books each we get a new one in a delivery.
//What variable would you assign the variable `bookCount` in the situation below.
//Please replace the ** to make the function work.

let bookCount = 0

function increment(){
    bookCount +=1
    console.log(bookCount)
}
increment()


//We have just sold 3 books and got 3 new ones! What would you have to do here to the `books` variable for the function to work so it would replace the current books array with our 3 new ones?
//Please make the function work.

let books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar']

function replaceBooks(){
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth']
    console.log(books)
}
replaceBooks()


//We need to text our a customer that their book is in. What would you have to do here in order for this function to work?
const firstName = 'Molly' 
function textCustomer() {
    console.log('Hi ' + firstName + ', your book is now in')
}
textCustomer()
/////////////////////////////////
for(let i =0; i <= 5; i++) {
    console.log( i)
}
/////////////////////////
const topLanguages = ['Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Portugese', 'Bengali', 'Russian', 'Japanese', 'Lahnda', 'Javanese', 'German', 'Korean', 'French', 'Telugu', 'Turkish', 'Tamil', 'Vietnamese', 'Urdu']

for (let i = 0; i < topLanguages.length; i++) {
    console.log(topLanguages[i])
}
/////////////////////////////////
const tableNumbers = [5, 14, 7, 10, 20, 11, 12, 15, 3]

for (let i =0; i < tableNumbers.length; i++) {
    if (tableNumbers[i] % 2 === 0) {
        console.log(tableNumbers[i])
    }
}

const people = 5

for (let i =1; i <= people; i++) {
    if (i % 2 === 0) {
        console.log('Person ' + i + ' is on the blue team')
    } else {
        console.log('Person ' + i + ' is on the red team')
    }
}
////////////////////////////////////////////
const squares = Array.from(document.querySelectorAll('.grid div'))
console.log(squares)

for(let i=0; i< squares.length;i++){
    if(i%2 === 0){
        squares[i].classList.add('even')
    }else{
        squares[i].classList.add('odd')
    }
}
///////////////////////////////////
const shopInventory = ['milk', 'Cheddar', 'mustard', 'ketchup', 'olive oil', 'cheddar', 'milk', 'garlic', 'mayo', 'carrots', 'cheddar', 'mustard', 'mayo', 'orange juice']

let count = 0
for (let i = 0; i < shopInventory.length; i++) {
    if ( shopInventory[i] === 'mustard') {
        count += 1
    }
}
console.log(count)
///////////////////////////////////

const nightClubRegister = [
    {
        name: 'Ahmed',
        lastname: 'Abdool',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Sally',
        lastname: 'Morgan',
        age: 18,
        gender: 'female'
    },
    {
        name: 'Dionne',
        lastname: 'Brown',
        age: 29,
        gender: 'female'
    },
    {
        name: 'Max',
        lastname: 'Forrester',
        age: 20,
        gender: 'male'
    }
]

for (let i=0; i < nightClubRegister.length; i++) {
    if (nightClubRegister[i].age < 21) {
        if (nightClubRegister[i].gender === 'male') {
            console.log('Sorry Mr ' + nightClubRegister[i].lastname + ', you are not old enough to attend')
        }
        if (nightClubRegister[i].gender === 'female') {
            console.log('Sorry Mrs/Miss ' + nightClubRegister[i].lastname + ', you are not old enough to attend')
        }
    }
    if (nightClubRegister[i].age >= 21) {
        if (nightClubRegister[i].gender === 'male') {
            console.log('Welcome Mr ' + nightClubRegister[i].lastname + ', you are on the list!')
        }
        if (nightClubRegister[i].gender === 'female') {
            console.log('Welcome Mrs/ ' + nightClubRegister[i].lastname + ', you are on the list!')
        }
    }
}
////////////////////////////////////
const buildings = 4

for (let i =0; i < buildings; i++) {
    console.log('building ' + (i +1))
    for (let j=0; j < 3; j++) {
        console.log('building ' + (i +1) + ' flat ' + (j +1))
    }
}