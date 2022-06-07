
let promptButton = document.querySelector('.numSquare');

promptButton.addEventListener('click', createGrid);

let numberOfSquare = 0;

let grid = document.querySelector('.outter');


function createGrid(){
    numberOfSquare = prompt("Enter the number of square for each side")
    console.log(numberOfSquare)
    for(let i = 0; i < numberOfSquare; i++){
        let square = document.createElement('div');
        square.classList.add('square')
        square.setAttribute('onmousedown', 'return false')
        grid.appendChild(square)
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
}



