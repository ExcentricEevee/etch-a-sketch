div = document.querySelector('.container');

// 16x16 is the etch-a-sketch grid size
for(let i = 0; i < (16*16); i++) {
    const box = document.createElement('div');
    box.classList.toggle('box');
    box.textContent = `${i}`;
    //box.setAttribute('style', 'border: 1px solid black;');
    div.appendChild(box);
}