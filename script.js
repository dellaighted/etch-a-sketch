const container = document.querySelector(".container");

let size = 16;

for (i = 0; i < size * size; i++){
    let cell = document.createElement("div");
    // console.log(cell.style.width = (500 / size) + "px");
    cell.style.width = (500 / size) + "px"
    cell.style.height = (500 / size) + "px";
    cell.classList.add("cell");
    container.appendChild(cell);
}