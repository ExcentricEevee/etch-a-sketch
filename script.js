const container = document.querySelector('.container');
const GRID_SIZE = 16 * 16;
for(let i = 0; i < GRID_SIZE; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    container.appendChild(square);
}