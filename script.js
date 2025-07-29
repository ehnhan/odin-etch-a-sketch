function createGrid(gridSize) {
    const parent = document.querySelector(".container");

    let counter = 0;
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");        

        for (let colIndex = 0; colIndex < gridSize; colIndex++) {
            let square = document.createElement("div");
            square.classList.add("square");        
            square.textContent = counter++;
            rowDiv.appendChild(square)
        }

        parent.appendChild(rowDiv);
    }
}

createGrid(16);