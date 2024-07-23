let container = document.querySelector("#container");

// create 16 div rows
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.className = "row";

    // create 16 div elements in each row
    for (let j = 0; j < 16; j++ ) {
        let square = document.createElement("div");
        square.className = "square";
        row.appendChild(square);

        // event listener for mouse over 
        square.addEventListener("mouseenter", () => {
            draw(square);
        })
    }
    container.appendChild(row);
}

function draw(square) {

    // generate random colour
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);

    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
