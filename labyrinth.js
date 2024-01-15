const labyrinth = document.getElementById("labyrinth-grid");
const character = document.getElementById("character");

/*const populateGrid = () => {
    
    const rowStart = Math.floor(Math.random() * 4);
    const rowEnd = Math.floor(Math.random() * 4);

    for (let index = 0; index < 16; index++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        labyrinth.appendChild(cell);

        if (rowStart * 4 == index) {
            cell.classList.add("start-cell");
        } else if (rowEnd * 4 + 3 == index) {
            cell.classList.add("end-cell");
        }

        if (!cell.classList.contains("end-cell") && !cell.classList.contains("start-cell") && Math.round(Math.random()) == 1 ) {
            cell.classList.add("blocked");
        }
    }

}*/

//populateGrid();

/*const addCharacter = () => {
    const character = document.createElement("div");
    character.classList.add("character");
    character.textContent = 'P';
    labyrinth.getElementsByClassName
}

addCharacter()
*/

labyrinth.addEventListener("keydown", () => {
    
})