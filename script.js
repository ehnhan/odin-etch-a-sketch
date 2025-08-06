const parent = document.querySelector(".container");

function randInt() {
    return Math.floor(Math.random() * 256);
}

function createGrid(gridSize) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }

    let counter = 0;
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");        

        for (let colIndex = 0; colIndex < gridSize; colIndex++) {
            let square = document.createElement("div");
            square.classList.add("square");
            //square.textContent = counter++;
            rowDiv.appendChild(square)
        }

        parent.appendChild(rowDiv);
    }
}

createGrid(16);

parent.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        e.target.classList.add("clicked");
        e.target.style.backgroundColor = `rgb(${randInt()}, ${randInt()}, ${randInt()})`;       

    }        
});

const resizeBtn = document.querySelector(".resizeBtn");

resizeBtn.addEventListener("click", (e) => {
    let size = Number(prompt("Please enter a number between 1-100."));

    if (size >= 1 && size <= 100) {
        createGrid(size);
    }
})