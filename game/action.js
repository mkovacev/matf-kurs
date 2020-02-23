'use strict'

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
        gameProgress++
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
    }else if (hangmanState == 7){
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
    wrapper3.appendChild(table)
    initEventListener()
}

function initEventListener(){
    for(let cell of tableCells){
        cell[1].addEventListener("click", () => checkLetter(cell[0]))
    }
}

function gameOver(){
    document.getElementById("gameOver").style.visibility = "visible"
}

function gameWon(){
    console.log("Game Won")
    var gameWonDiv = document.getElementById("gameWon")
    gameWonDiv.style.position = "fixed"
    gameWonDiv.style.left = "20%"
    gameWonDiv.style.top = "30%"
    gameWonDiv.style.height = "50%"
    gameWonDiv.style.width = "60%"
    gameWonDiv.style.display = "table-cell"
    gameWonDiv.style.verticalAlign = "middle"
    gameWonDiv.style.background = "green"
    gameWonDiv.style.border = "2px dotted black"
    gameWonDiv.style.textAlign = "center"
    // making congratulations text part
    var gameWonPara = document.createElement("p")
    gameWonPara.append(document.createTextNode("CONGRATULATIONS, YOU WON!"))
    // making score display part
    var scorePara = document.createElement("p")
    scorePara.appendChild(document.createTextNode("SCORE: " + score))
    // making enter nick part
    var enterNickPara = document.createElement("p")
    enterNickPara.appendChild(document.createTextNode("YOUR NICK: "))

    var input = document.createElement("input")
    input.id = "nickInput"

    var saveButton = document.createElement("button")
    saveButton.innerHTML = "SAVE"
    saveButton.addEventListener("click", () => onSaveButton())

    // appending parts to div
    gameWonDiv.appendChild(gameWonPara)
    gameWonDiv.appendChild(scorePara)
    gameWonDiv.appendChild(enterNickPara)
    gameWonDiv.appendChild(input)
    gameWonDiv.appendChild(saveButton)
    
}

function onSaveButton(){
    console.log("On save function")
    let nick = document.getElementById('nickInput').value

    let xmlRequest = new XMLHttpRequest()
    xmlRequest.open('POST', 'http://localhost:8787/users')
    xmlRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xmlRequest.onreadystatechange = () => {
        let DONE = XMLHttpRequest.DONE,
            OK = 200;
        if(xmlRequest.readyState === DONE){
            if(xmlRequest.status === OK){
                console.log(xmlRequest.responseText)
            }else{
                console.log("Ajax error: " + xmlRequest.status)
            }
        }
    }
    xmlRequest.send(`id=${1}&nick=${nick}&score=${score}`)

    
}

function initStatusWord(){
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

function setScore(score){
    var scoreDiv = document.getElementById("score")
    scoreDiv.innerText = "score: " + score
}

function checkLetter(letter){
    //console.log("Kliknuto " + letter)

    // getting table cell with selected letter
    var element = tableCells.get(letter) 
    //console.log(guessingWord.includes(letter))
    element.style.visibility = "hidden"
    putLetterInList(letter)
    if(guessingWord.includes(letter)){
        putLetterInWord(letter)
        score = score + 2
        console.log("Progress: " + gameProgress)
        console.log("Word length: " + guessingWordLength)       
        if(gameProgress == guessingWordLength){
            gameWon()
        }
        
    } else {
        score = score - 1
        hangmanState = hangmanState + 1
        //console.log(hangmanState)
        hangman(hangmanState)
        if(hangmanState == 7){
            gameOver()
        }
        
    }  
    setScore(score) 
    
}

var gameProgress = 0
var score = 0
var tableCells = new Map()
var clickedLetters = ""
var guessingWordsList = ["DOCTORS", "CONVERSATION", "TEMPERATURE", "SUPERMARKET"]
var guessingWord = "C"
var guessingWordLength = guessingWord.length
var hangmanState = 0
setScore(score)
initStatusWord()
createTable()
//console.log(hangmanState)
//hangman(hangmanState)