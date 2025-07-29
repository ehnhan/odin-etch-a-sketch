const parent = document.querySelector(".container");

function createGrid(gridSize) {
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

parent.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        e.target.classList.add("clicked");
    }        
});