const container = document.querySelector('.container');
const LENGTH = 16;
const GRID_SIZE = LENGTH * LENGTH;
let squareSize;
for(let i = 0; i < GRID_SIZE; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    container.appendChild(square);
    // Need this to calculate container height/width later
    squareSize = square.offsetWidth;
}

// This allows the .square divs to change size while maintaining the
// square shape of the container, thanks to flex-wrap
const containerSize = squareSize * LENGTH;
container.setAttribute('style', `width: ${containerSize}px;
    height: ${containerSize}px;`);
