let container = document.querySelector("#container");
let containerStyle = window.getComputedStyle(container);
let containerHeight = containerStyle.getPropertyValue("height");

function drawGrid(number) {
    // clear the grid
    container.textContent = "";

    // create x div rows
    for (let i = 0; i < number; i++) {
        let row = document.createElement("div");
        row.className = "row";

        // create x div elements in each row
        for (let j = 0; j < number; j++ ) {
            let square = document.createElement("div");
            square.className = "square";

            // dynamic squares based on container size
            let size = parseFloat(containerHeight) / parseFloat(number);
            square.style.height = `${size}px`;
            square.style.width = `${size}px`;

            row.appendChild(square);

            // event listener for mouse over 
            square.addEventListener("mouseenter", () => {
                fill(square);
            })
        }
        container.appendChild(row);
    }
}

function fill(square) {

    // generate random colour
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);

    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

drawGrid(16);

let editGridBtn = document.querySelector("#editGridBtn");
editGridBtn.addEventListener("click", function changeGrid() {
    let gridSize = prompt("Enter grid size between 1 and 100 (e.g. '10' for a 10x10):");
    if (gridSize < 1 || gridSize > 100) {
        changeGrid();
    }
    drawGrid(gridSize);
})

let eraseGridBtn = document.querySelector("#eraseGridBtn");
eraseGridBtn.addEventListener("click", () => {
    squareNodeListArray = Array.from(document.getElementsByClassName("square"));
    squareNodeListArray.forEach((square) => {
        square.style.backgroundColor = `rgb(255,255,255)`;
    })
})