const robot = document.querySelector('.robot')

let number = 50
function moveRobot(){
    number +=50
    robot.style.left = number +'px';
}

robot.addEventListener('click', moveRobot)

