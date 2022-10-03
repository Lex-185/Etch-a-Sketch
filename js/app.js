let gridContainer = document.querySelector('.grid-container');

// Create grid
function createGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize*gridSize; i++) {
        let gridScreen = document.createElement('div');
        gridScreen.style.backgroundColor = '--screen';
        gridContainer.appendChild(gridScreen);

        gridScreen.addEventListener('mousemove', () => {
            gridScreen.style.backgroundColor = '--dark-blue';
        }) 
    }
}

createGrid(16)