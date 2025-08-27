const container = document.querySelector("#con");
const resetButton = document.querySelector(".reset-button");
let side = container.offsetWidth;
let isDrawing = false;

function generateGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let squareSide = side / gridSize;
        squareSide = squareSide + "px";
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSide;
        square.style.height = squareSide;
        container.appendChild(square);

    }


    const grid = document.querySelectorAll(".square");



    grid.forEach((square) => {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        randomColor = '#' + randomColor;



        square.addEventListener("mousedown", (e) => {
            isDrawing = true;
            e.target.style.background = '#DBD7D2';
        });

        square.addEventListener("mouseover", (e) => {
            if (isDrawing) {
                e.target.style.background = '#DBD7D2';
            }
        });


    });

    document.addEventListener("mouseup", () => {
        isDrawing = false;
    });

}

generateGrid(16);

resetButton.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let side = prompt("Enter number of squares per side for the new grid, maximum 100");
    if(side>100){
        side = 100
    }
    console.log(side);
    generateGrid(side);





});