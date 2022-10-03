// Vars
let gridContainer = document.querySelector('.grid-container');

// Buttons
const blackBtn = document.getElementById('black');
blackBtn.innerText = 'Black'
const colorBtn = document.getElementById('select-color');
colorBtn.innerText = 'Select Color'
const randomBtn = document.getElementById('random');
randomBtn.innerText = 'Random'
const eraserBtn = document.getElementById('eraser');
eraserBtn.innerHTML = 'Eraser'
const clearBtn = document.getElementById('clear-canvas');
clearBtn.innerText = 'Clear Canvas'

// Create grid
function createGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize*gridSize; i++) {
        let gridScreen = document.createElement('div');
        gridScreen.style.backgroundColor = 'var(--screen)';
        gridContainer.insertAdjacentElement('beforeend', gridScreen);

        gridScreen.addEventListener('mousemove', () => {
            gridScreen.style.backgroundColor = 'var(--dark-blue)';
        }) 
    }
}

createGrid(16)