function putLetterInList(letter){
    if(clickedLetters == "")
    {
        clickedLetters = letter
    }else{
        clickedLetters = clickedLetters+", "+letter
    }

    var element = document.getElementById("clickedLetters")
    element.innerText = clickedLetters
}

function putLetterInWord(letter){
    var i = guessingWord.indexOf(letter)
    console.log(i.toString())
    while(i != -1){
        document.getElementById(i.toString()).innerHTML = letter
        guessingWord = guessingWord.replace(letter, "-")
        i = guessingWord.indexOf(letter)
    }
}

function hangman(hangmanState){
    var head = document.getElementById("head")
    var neck = document.getElementById("neck")
    var body = document.getElementById("body")
    var larm = document.getElementById("larm")
    var rarm = document.getElementById("rarm")
    var lleg = document.getElementById("lleg")
    var rleg = document.getElementById("rleg")

    if (hangmanState == 1){
        head.style.visibility = "visible"        
    } else if (hangmanState == 2){
        neck.style.visibility = "visible" 
    } else if (hangmanState == 3){
        body.style.visibility = "visible"
    } else if (hangmanState == 4){
        larm.style.visibility = "visible"
    }else if (hangmanState == 5){
        rarm.style.visibility = "visible"
    }else if (hangmanState == 6){
        lleg.style.visibility = "visible"
    } else {
        rleg.style.visibility = "visible" 
    }
}

function createTable(){
    var wrapper3 = document.getElementById("wrapper3")
    var table = document.createElement("table")

    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var k = 0
    for(let i = 0; i < 3; i++){
        var row = document.createElement("tr")
        for(let j = 0; j < 10; j++){
            if(i == 2){
                if(j == 0 || j == 1 || j == 8 || j == 9){
                    var cell = document.createElement("td")
                    cell.id == "none"
                    row.appendChild(cell)
                    continue
                }
            }
            var cell = document.createElement("td")
            cell.id = letters[k]
            cell.className = "word"
            var text = document.createTextNode(letters[k])
            cell.append(text)
            tableCells.set(letters[k], cell)
            row.appendChild(cell)
            k++
        }
        table.appendChild(row)
    }
    initEventListener()
    wrapper3.appendChild(table)
    
}

function initEventListener(){
    for(let cell of tableCells){
        cell[1].addEventListener("click", () => checkLetter(cell[0]))
    }
}

function gameOver(){
    document.getElementById("gameOver").style.visibility = "visible"
}

function initStatusWord(statusWord){
    var divToInsert
    var container = document.getElementById("wordToGuess")
    for(var i = 0; i < guessingWord.length; i++){
        divToInsert = document.createElement('div')
        divToInsert.innerHTML = "-"
        divToInsert.style.display = "inline-block"
        divToInsert.style.width = "5%"
        divToInsert.id = i.toString()
        container.appendChild(divToInsert)
    }

}

function checkLetter(letter){
    console.log("Kliknuto " + letter)
    var element = tableCells.get(letter)
    console.log(guessingWord.includes(letter))
    element.style.visibility = "hidden"
    putLetterInList(letter)
    if(guessingWord.includes(letter)){
        putLetterInWord(letter)
    } else {
        hangmanState = hangmanState + 1
        console.log(hangmanState)
        if(hangmanState == 7){
            hangman(hangmanState)
            gameOver()
        } else {
            hangman(hangmanState)
        }
        
    }      
}


var tableCells = new Map()
var clickedLetters = ""
var guessingWord = "DOCTORS"
var hangmanState = 0
var statusWord = ""
initStatusWord(statusWord)
createTable()
console.log(hangmanState)
//hangman(hangmanState)