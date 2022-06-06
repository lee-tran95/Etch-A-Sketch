
for(let i = 0; i < 256; i++){
    let square = document.createElement('div');
    square.classList.add('square')
    square.setAttribute('onmousedown', 'return false')
    document.querySelector('.outter').appendChild(square)
}

let squares = document.querySelectorAll('.square');

let mousedown = false;

document.addEventListener('mousedown', () => {
    mousedown = true;
})
document.addEventListener('mouseup', () => {
    mousedown = false;
})

squares.forEach(square => {
    square.addEventListener('mouseenter',() => {
        if(mousedown){
            square.style.background = "black";
        }
    })
})


