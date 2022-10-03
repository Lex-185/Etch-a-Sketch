// Vars

// Buttons
document.getElementById('black').innerText = 'Black'
document.getElementById('select-color').innerText = 'Select Color'
document.getElementById('random').innerText = 'Random'
document.getElementById('eraser').innerText = 'Eraser'
document.getElementById('clear-canvas').innerText = 'Clear Canvas'

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

        gridScreen.addEventListener('mousemove', () => {
            gridScreen.style.backgroundColor = 'var(--dark-blue)';
        }) 
    }
}

function editGrid(input) {
    createGrid(input)
}

createGrid(16)
