const squares = Array.from(document.querySelectorAll('.grid div'))

console.log(squares)

const layout = [
    's','c','r','a','b','b','l','e','','','','','',
    '','o','','','','','','','','','','','',
    '','w','i','n','n','e','r','','','','','','',
    '','','','','','','i','','','','','','',
    '','','','','','','n','','','','','','',
    '','','','','','','g','o','a','t','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
]

// declare a variable to store the letter
// innerHTML
// style the div with a class

for (let i=0; i < squares.length; i++) {
    let letter = layout[i]
    squares[i].innerHTML = letter
    if (letter !== '') squares[i].classList.add('tile')
}