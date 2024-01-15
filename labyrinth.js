const labyrinth = document.getElementById("labyrinth-grid");

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

populateGrid();