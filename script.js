grid = document.querySelector('.grid-container');
btn = document.querySelector('button');

/* default grid size on load */
makeGrid(16);

btn.addEventListener('click', () => {
    let gridSize = Number(prompt('What do you want the grid size to be?'));
    
    /* Anything bigger than 100 could cause slowdown or crashes, so protect the user */
    if (gridSize > 100) {
        alert('The max is 100, please pick a smaller number.');
    } else {
        clearGrid();
        makeGrid(gridSize);
    }
});

function makeGrid(size) {
    for (let i = 0; i < (size**2); i++) {
        const box = document.createElement('div');

        box.addEventListener('mouseover', () => {
            box.classList.add('etched');
        });

        grid.appendChild(box);
    }
    
    /* .grid-container has its own styling in style.css, but we need the variable to make the size work */
    grid.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}