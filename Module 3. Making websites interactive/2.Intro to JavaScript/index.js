var pets = ["dog","cat","bird"]
console.log(pets)

var man={
    name:'milon',
    pets:["dog","cat","bird"],
    sayHello: function(){
        console.log("hello");
        console.log(this.name);
    }
}
console.log(man.name)
console.log(man.pets)
console.log(man.sayHello())

var car = {
    model: "honda",
    wheels: 4,
    honkSound: "beerp",
    registeredDrivers: ['jane', 'john'],
    hasHadAccident: false,
    honk: function(){
        console.log(this.honkSound)
    }
}

console.log(car.model)
console.log(car['wheels'])
car.honk()
///////////////////////////////////////
var name = "rick"
var age = 10

console.log(name === "dave")

console.log(age !== 10)

console.log(10 < age)

console.log(age >= 11)
/////////////////////////////////////
var username = 'rick123'
var password = 'aL8#klfo'

if(username !== 'rick123'){
    console.log('username is incorrect')
} else if(password !== 'aL8#klf'){
    console.log("password is incorrect")
} else {
    console.log("Access Granted")
}
/////////////////////////////////////
var user = {
    name: "DAVE",
    email: null,
    friends: ["rick", "sarah"],
    address: {
        street: "123 street",
        city: "gotham"
    },
    id: 1,//0
    nickname: undefined
}

if(user.id){
   console.log("It is true!")
} else {
   console.log("It is false!")
}
///////////////////////////
var username = "joe"
var password = "joe123"

// And
// &&
if(username === "joe" && password === "joe123"){
    console.log("Access granted")
} else {
    console.log("Username or password are incorrect")
}