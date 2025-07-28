function createGrid(gridSize) {
    const parent = document.querySelector(".container");

    for (let row = 0; row < gridSize; row++) {
        let square = document.createElement("div");
        square.classList.add("square");        
        square.textContent = row;
        parent.appendChild(square);
    }
}

createGrid(5);