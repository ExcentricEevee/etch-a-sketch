div = document.querySelector('.grid-container');
btn = document.querySelector('button');

makeGrid(16);

btn.addEventListener('click', () => {
    let gridSize = Number(prompt('What do you want the grid size to be?'));
    clearGrid();
    makeGrid(gridSize);
});

function makeGrid(size) {
    for (let i = 0; i < (size**2); i++) {
        const box = document.createElement('div');

        box.classList.toggle('box');
        box.setAttribute('style', 'border: 1px solid gray; height: 10px; width: 10px;');

        box.addEventListener('mouseover', () => {
            box.classList.add('etched');
        });

        div.appendChild(box);
    }
    
    /* .grid-container has its own styling in style.css, but we need the variable to make the size work */
    div.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
}

function clearGrid() {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}