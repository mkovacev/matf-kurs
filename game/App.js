game = new Game();

let pomTable = game.table.getTableCells();

for(let cell in pomTable){
    console.log(cell[1])
    cell[1].addEventListener("click", () => game.checkLetter(cell[0]))
}