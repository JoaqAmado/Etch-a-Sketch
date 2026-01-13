function createGrid(size){
    let div;
    let square;
    for (let i = 0; i<size; i++){
        div = document.createElement("div");
        for (let j = 0; j<size; j++){
            square = document.createElement("div");
            square.classList.add("square");
            div.appendChild(square);
        }
    }
}