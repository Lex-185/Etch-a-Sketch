// Vars
let color = 'var(--dark-blue)'  
let click = true;
const mode =  document.querySelector('.mode')
const bmoFace = document.querySelector('.bmo-face')
document.querySelector('body').addEventListener('click', (e) => { 
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
           mode.innerText = 'Mode: Not Coloring';
        } else {
            mode.innerText= 'Mode: Coloring';
        }
    }
})

// Create grid
function createGrid(gridSize) {
    let gridContainer = document.querySelector('.grid-container');
    let square = gridSize * gridSize;
    let gridScreen = gridContainer.querySelectorAll('div');
    gridScreen.forEach((div) => div.remove())
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


    for (let i = 0; i < square; i++) {
        let gridScreen = document.createElement('div');
        gridScreen.style.backgroundColor = 'var(--screen)';
        gridContainer.insertAdjacentElement('beforeend', gridScreen);

        gridScreen.addEventListener('mousemove', gridColor);
    }
}

function gridColor() {
    if (click) return
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color;
    }
}

// Grid constraints
function editGrid(input) {
    if (input >= 2 && input <= 100) {
    createGrid(input)
    } else {
        document.getElementById('value').value = '...'
    }
}

createGrid(16)

// Clear Canvas
function clearCanvas() {
    let gridContainer = document.querySelector('.grid-container');
    let gridScreen = gridContainer.querySelectorAll('div');
    gridScreen.forEach((div) => div.style.backgroundColor = 'var(--screen)')
}

// Buttons
function changeColor(newColor) {
    color = newColor;
}

const selectBtn = document.getElementById('select-color')
selectBtn.addEventListener('change', () => {
    color = selectBtn.value;
});

document.getElementById('black').addEventListener('click', () => {
    changeColor('var(--dark-blue)')
});

document.getElementById('random').addEventListener('click', () => {
    changeColor('random')
});

document.getElementById('eraser').addEventListener('click', () => {
    changeColor('var(--screen)')
});

document.getElementById('clear-canvas').addEventListener('click', clearCanvas)


