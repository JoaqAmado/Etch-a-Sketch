function createGrid(size){
    let row;
    let square;
    let container = document.createElement("div");
    let body = document.querySelector("body");

    container.classList.add("container");
    for (let i = 0; i<size; i++){
        row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j<size; j++){
            square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    body.appendChild(container);
}

function deleteGrid(){
    let container = document.querySelectorAll("div");
    container.forEach((div) => {
        div.remove();
    });
}


let enterButton = document.querySelector("button");
let size = 16;
createGrid(size);
enterButton.addEventListener("click", () => {
    size = Number(prompt("Enter new size!"));
    deleteGrid();
    createGrid(size);
});