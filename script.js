function createGrid(size) {
    const LENGTH = size;
    const container = document.querySelector('.container');
    const CONTAINER_SIZE = container.offsetWidth;
    const SQUARE_SIZE = CONTAINER_SIZE / LENGTH;
    
    for(let rows = 0; rows < LENGTH; rows++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for(let squares = 0; squares < LENGTH; squares++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.setAttribute('style', `width: ${SQUARE_SIZE}px; height: ${SQUARE_SIZE}px;`);
            square.addEventListener('mouseover', () => {
                square.setAttribute('class', 'hovered');
            });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function clearGrid() {
    const container = document.querySelector('.container');
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    //const size = prompt('What size grid? (Max 100)', '16');
    clearGrid();
});

createGrid(16);