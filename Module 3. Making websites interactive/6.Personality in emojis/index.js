const myEmojis = ["👨‍💻","⛷","🍲"]
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis(){

    emojiContainer.innerHTML = ""
    for(let i = 0;i<myEmojis.length; i++){
        console.log(myEmojis[i])
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

//add new emoji add the first of the array
const unshiftBtn = document.getElementById("unshift-btn")

unshiftBtn.addEventListener("click",function(){
    const emojiInput = document.getElementById("emoji-input")
    console.log(emojiInput.value)
    if(emojiInput.value){
        myEmojis.unshift(emojiInput.value)
        emojiInput.value =""
        renderEmojis()
    }
})

//add new emoji add the last of the array
const pushBtn = document.getElementById("push-btn")

pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    console.log(emojiInput.value)
    if(emojiInput.value){
        myEmojis.push(emojiInput.value)
        emojiInput.value =""
        renderEmojis()
    }
})

//remove new emoji add the first of the array
const popBtn = document.getElementById("pop-btn")

popBtn.addEventListener("click", function(){
    myEmojis.pop()
    renderEmojis()
})

//remove new emoji add the last of the array
const shiftBtn = document.getElementById("shift-btn")

shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmojis()
})