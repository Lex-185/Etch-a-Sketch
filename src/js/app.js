// Vars
let color = 'var(--dark-blue)'  
let click = true;
const gridContainer = document.querySelector('.grid-container');
const emptyContainer = document.querySelector('.empty-container')
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
gridContainer.classList.add('hidden')
function createGrid(gridSize) {
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
    if (color === 'random-pen') {
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

// Hide Screen 
function displayScreen() {
    let gridContainer = document.querySelector('.grid-container');
    let gridScreen = gridContainer.querySelectorAll('div');
    gridScreen.forEach((div) => div.style.backgroundColor = 'var(--screen)')
}

// Clear Canvas
function clearCanvas() {
    displayScreen()
}

// Toggle screen
function toggleScreen() {
    bmoFace.toggleAttribute('hidden')
    gridContainer.classList.toggle('hidden')
    emptyContainer.classList.toggle('hidden')
}

// Show sketch board
const gameBtn = document.getElementById('toggle-screen');
gameBtn.addEventListener('click', () => {
    gameBtn.innerText = 'Toggle Screen'
    toggleScreen()
    displayScreen()
});


// Buttons
function changeColor(newColor) {
    color = newColor;
}

const selectBtn = document.getElementById('color-pen')
selectBtn.addEventListener('change', (e) => {
    color = selectBtn.value;
    e.currentTarget.style.backgroundColor = e.currentTarget.value;
});

document.getElementById('default-pen').addEventListener('click', () => {
    changeColor('var(--dark-blue)')
});

document.getElementById('random-pen').addEventListener('click', () => {
    changeColor('random-pen')
});

document.getElementById('eraser').addEventListener('click', () => {
    changeColor('var(--screen)')
});

document.getElementById('clear-canvas').addEventListener('click', clearCanvas)

