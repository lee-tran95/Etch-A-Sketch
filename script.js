

let numberOfSquare = 0;

let grid = document.querySelector('.outter');

let mousedown = false;

document.addEventListener('mousedown', () => {
    mousedown = true;
})
document.addEventListener('mouseup', () => {
    mousedown = false;
})

function removeGrid(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

let promptButton = document.querySelector('.numSquare');

promptButton.addEventListener('click', createGrid);

function createGrid(){
    removeGrid(grid);

    numberOfSquare = prompt("Enter the number of square for each side")
    let basis = (1/numberOfSquare)*100;

    for(let i = 0; i < numberOfSquare*numberOfSquare; i++){
        let square = document.createElement('div');
        square.classList.add('square')
        square.style.flex = `1 0 ${basis}%`
        square.setAttribute('onmousedown', 'return false')
        grid.appendChild(square)
    }
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseenter',() => {
            if(mousedown){
                square.style.background = "black";
            }
        })
    })
}

let clear = document.querySelector('.clearButton')
clear.addEventListener('click', clearGrid)

function clearGrid(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.background = "white";
    })
}


