
class Game{
    constructor(){
        this.score = 0;
        this.stickmanState = 0;
        this.table = new LettersTable();
        this.stickman = new Stickman();
        this.guessingWordsList = ["DOCTORS", "CONVERSATION", "TEMPERATURE", "SUPERMARKET"];
        let randNum = Math.floor(Math.random()*this.guessingWordsList.length);
        this.guessingWord = new WordToGuess(this.guessingWordsList[randNum]);
        this.setScore(this.score)
        this.initEventListener();
        console.log(this.table.tableCells)
    }

    

    checkLetter(letter){
        this.table.getTableCells().get(letter).style.visibility = 'hidden';
        this.guessingWord.putLetterInList(letter);
        if(this.guessingWord.getGuessingWord().includes(letter)){
            this.guessingWord.putLetterInWord(letter);

            this.score += 2;
            if(this.guessingWord.checkProgress()){
                this.gameWon();
            }
        }else{
            this.score -= 1;
            this.stickmanState += 1;
            this.stickman.plotStickman(this.stickmanState);
            if(this.stickmanState == 7){
                this.gameOver();
            }

        }
        this.setScore(this.score);
    }

    initEventListener(){
        for(let cell of this.table.tableCells){
            cell[1].addEventListener("click", () => this.checkLetter(cell[0]))
        }
    }

    gameOver(){
        document.getElementById("gameOver").style.visibility = "visible"
    }

    gameWon(){
        let gameWonDiv = document.getElementById('gameWon');
        gameWonDiv.style.visibility = 'visible';

        // making congratulations text part
        let gameWonPara = document.createElement("p")
        gameWonPara.append(document.createTextNode("CONGRATULATIONS, YOU WON!"))
        // making score display part
        let scorePara = document.createElement("p")
        scorePara.appendChild(document.createTextNode("SCORE: " + this.score))
        // making enter nick part
        let enterNickPara = document.createElement("p")
        enterNickPara.appendChild(document.createTextNode("YOUR NICK: "))

        let input = document.createElement("input")
        input.id = "nickInput"

        let saveButton = document.createElement("button")
        saveButton.innerHTML = "SAVE"
        saveButton.addEventListener("click", () => this.onSaveButton())

        // appending parts to div
        gameWonDiv.appendChild(gameWonPara)
        gameWonDiv.appendChild(scorePara)
        gameWonDiv.appendChild(enterNickPara)
        gameWonDiv.appendChild(input)
        gameWonDiv.appendChild(saveButton)
    
    }

    onSaveButton(){
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
                    let successDiv = document.getElementById("successSaveDiv")
                    var gameWonDiv = document.getElementById("gameWon")
                    gameWonDiv.style.visibility = 'hidden'
                    successDiv.style.visibility = 'visible'
                    let textPara = document.createElement("p")
                    textPara.appendChild(document.createTextNode("SUCCESSFULY SAVED!"))
    
                    let newGameButton = document.createElement("button")
                    newGameButton.innerHTML = "NEW GAME"
                    newGameButton.addEventListener('click', () => {window.location.reload()})
    
                    successDiv.appendChild(textPara)
                    successDiv.appendChild(newGameButton)
                }else{
                    console.log("Ajax error: " + xmlRequest.status)
                }
            }
        }
        xmlRequest.send(`nick=${nick}&score=${this.score}`)
    }

    setScore(score){
        document.getElementById('score').innerText = "score: " + score
    }
}

