'use strict'

class LettersTable{
	constructor(){
        console.log("Letters table")
        let wrapper3Div = document.getElementById('wrapper3');
        let table = document.createElement('table');

        this.tableCells = new Map();
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let k = 0;
        for(let i = 0; i < 3; i++){
            let row = document.createElement('tr');
            for(let j = 0; j < 10; j++){
                if(i == 2){
                    if(j == 0 || j == 1 || j == 8 || j == 9){
                        let cell = document.createElement('td');
                        cell.id == 'none';
                        row.appendChild(cell);
                        continue;
                    }
                }
                let cell = document.createElement('td');
                cell.id = this.letters[k];
                cell.className = 'word';
                let text = document.createTextNode(this.letters[k]);
                cell.append(text);
                this.tableCells.set(this.letters[k], cell);
                row.appendChild(cell);
                k++;
            }
            table.appendChild(row);
        }
        wrapper3Div.appendChild(table);
        
    }

    getTableCells(){
        return this.tableCells;
    }
}
