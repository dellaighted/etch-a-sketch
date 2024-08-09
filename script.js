const container = document.querySelector(".container");
let size = 16;
createGrid(size);

function createGrid(size){
    if(size >= 2 && size <= 100){
        for (i = 0; i < size * size; i++){
            let cell = document.createElement("div");
            cell.style.width = (500 / size) + "px"
            cell.style.height = (500 / size) + "px";
            cell.classList.add("cell");
            container.appendChild(cell);
        
            cell.addEventListener("mouseenter", () => {
                cell.style.backgroundColor = "blue";
            });
        
        }
    }else{
        alert("Please select grid size between 2 and 100.");
    }
}

const button = document.querySelector(".button");
button.addEventListener("click", () => {
    for (i = 0; i < size * size; i++){
        const cell = document.querySelector(".cell");
        cell.remove();
    }
    size = prompt("Enter a new grid size.");
    createGrid(size);
});