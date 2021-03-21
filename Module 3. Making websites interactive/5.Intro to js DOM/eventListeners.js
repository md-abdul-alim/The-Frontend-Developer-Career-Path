////Every event in js
// Object.keys(window).forEach(key => {
//     if (/^on/.test(key)) {
//         window.addEventListener(key.slice(2), event => {
//             console.log(event.type);
//         });
//     }
// });

var button = document.getElementById("button")
// button.addEventListener("click", function() {
//     console.log("The button was clicked!")
// })
////OR
function handleButtonClick() {
    console.log("The button was clicked!")
}

button.addEventListener("click", handleButtonClick)
//button.removeEventListener("click", handleButtonClick)

document.getElementById("header").addEventListener("dblclick", function() {
    console.log("The header was double clicked!")
    document.body.style.backgroundColor = "firebrick"
})