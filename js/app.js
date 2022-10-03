// Vars
let color = 'var(--dark-blue)'

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

        gridScreen.addEventListener('mousemove', gridColor) 
    }
}

function gridColor() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color;
    }
}

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

const blackBtn = document.getElementById('black')
blackBtn.addEventListener('click', () => {
    changeColor('var(--dark-blue)')
})
blackBtn.innerText = 'Default';


const selectBtn = document.getElementById('select-color');
selectBtn.addEventListener('input', () => {
    color = selectBtn.value;
})

const randomBtn = document.getElementById('random')
randomBtn.addEventListener('click', () => {
    changeColor('random')
})
randomBtn.innerText = 'Random';

const eraser = document.getElementById('eraser')
eraser.addEventListener('click', () => {
    changeColor('var(--screen)')
});
eraser.innerText = 'Eraser';

const clearBtn = document.getElementById('clear-canvas')
clearBtn.addEventListener('click', clearCanvas)
clearBtn.innerText = 'Clear Canvas'
