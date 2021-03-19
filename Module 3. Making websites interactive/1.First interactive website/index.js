// var myHeader = document.getElementById("myHeader");
// myHeader.style.background='red';
// myHeader.style.color='green';

var myButton = document.getElementById('btn')
var title = document.getElementById('title')
var count = 0;
myButton.addEventListener("click",function(){
    //alert("hi");
    //myButton.style.background='red';
    //title.textContent = "Hello JavaScripts."
    count +=1
    title.textContent = count
});