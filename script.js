div = document.querySelector('.container');

// 16x16 is the etch-a-sketch grid size
for(let i = 0; i < (16*16); i++) {
    const box = document.createElement('div');

    box.classList.toggle('box');
    box.setAttribute('style', 'border: 1px solid gray; height: 10px; width: 10px;');

    box.addEventListener('mouseover', () => {
        box.classList.add('etched');
    });

    div.appendChild(box);
}