document.body.style.backgroundColor = "skyblue"

var things = document.getElementsByClassName("things")
console.log(things)
for(var i=0; i< things.length; i++){
    console.log(things[i].innerText)
}
console.log("---------------------")
////////////////////////////////
// querySelector
// Select a single element from the page. (Returns the first element it finds that matches the query)
var result = document.querySelector("#favorite-things")
console.log(result)
console.log("---------------------")
var result1 = document.querySelector("ol#favorite-things > li")
console.log(result1)
console.log(result1.innerText)
console.log("---------------------")
// querySelectorAll
// Select all elements from the page that match the query.
var result2 = document.querySelectorAll("ol#favorite-things > li")
console.log(result2)
console.log(Array.from(result2))
for(var i= 0; i<result2.length ;i++){
    result2[i].innerText = "** REDACTED **"
}
console.log("---------------------")
//////////////////Modifying an element's text//////////////////
// innerHTML - security risk
// innerText - "expensive"
// textContent - better than other
var person = {name:"milon"}
person.name = "alim"
console.log(person.name)

var header1 = document.querySelector("#header").textContent
document.querySelector("#paragraph").textContent = header1
console.log("---------------------")

var header2 = document.getElementById("header")
console.log(typeof header2.style)
console.log(Object.keys(header2.style))
header2.style.color = 'red'
header2.style.backgroundColor = 'green'
/////////Modifying ClassName and ClassList////////

console.log("----Modifying ClassName and ClassList----")
var className = document.querySelector("#titleId").className
console.log(className)
//adding class
var newClass = document.querySelector("#titleId").className += " new-class"
console.log(newClass)
//classList is better than className

document.querySelector("#titleId").classList.add("new-class")
console.log(document.querySelector("#titleId").className)
//remove class
document.querySelector("#titleId").classList.remove("another")
console.log(document.querySelector("#titleId").className)

//add or remove.if not have, than add
document.querySelector("#titleId").classList.toggle("another")
console.log(document.querySelector("#titleId").className)
// if have, than remove.
document.querySelector("#titleId").classList.toggle("another")
console.log(document.querySelector("#titleId").className)