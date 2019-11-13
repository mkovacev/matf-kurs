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

}

function hangman(hangmanState){
    var head = document.getElementById("head")
    var neck = document.getElementById("neck")
    var body = document.getElementById("body")
    var larm = document.getElementById("larm")
    var rarm = document.getElementById("rarm")
    var lleg = document.getElementById("lleg")
    var rleg = document.getElementById("rleg")

    if(hangmanState == 0){
        head.style.visibility = "hidden"
        neck.style.visibility = "hidden"
        body.style.visibility = "hidden"
        larm.style.visibility = "hidden"
        rarm.style.visibility = "hidden"
        lleg.style.visibility = "hidden"
        rleg.style.visibility = "hidden"        
    } else if (hangmanState == 1){
        head.style.visibility = "visible"
        neck.style.visibility = "hidden"
        body.style.visibility = "hidden"
        larm.style.visibility = "hidden"
        rarm.style.visibility = "hidden"
        lleg.style.visibility = "hidden"
        rleg.style.visibility = "hidden"         
    } else if (hangmanState == 2){
        head.style.visibility = "visible"
        neck.style.visibility = "visible"
        body.style.visibility = "hidden"
        larm.style.visibility = "hidden"
        rarm.style.visibility = "hidden"
        lleg.style.visibility = "hidden"
        rleg.style.visibility = "hidden" 
    } else if (hangmanState == 3){
        head.style.visibility = "visible"
        neck.style.visibility = "visible"
        body.style.visibility = "visible"
        larm.style.visibility = "hidden"
        rarm.style.visibility = "hidden"
        lleg.style.visibility = "hidden"
        rleg.style.visibility = "hidden" 
    } else if (hangmanState == 4){
        head.style.visibility = "visible"
        neck.style.visibility = "visible"
        body.style.visibility = "visible"
        larm.style.visibility = "visible"
        rarm.style.visibility = "hidden"
        lleg.style.visibility = "hidden"
        rleg.style.visibility = "hidden" 
    }else if (hangmanState == 5){
        head.style.visibility = "visible"
        neck.style.visibility = "visible"
        body.style.visibility = "visible"
        larm.style.visibility = "visible"
        rarm.style.visibility = "visible"
        lleg.style.visibility = "hidden"
        rleg.style.visibility = "hidden" 
    }else if (hangmanState == 6){
        head.style.visibility = "visible"
        neck.style.visibility = "visible"
        body.style.visibility = "visible"
        larm.style.visibility = "visible"
        rarm.style.visibility = "visible"
        lleg.style.visibility = "visible"
        rleg.style.visibility = "hidden" 
    } else {
        head.style.visibility = "visible"
        neck.style.visibility = "visible"
        body.style.visibility = "visible"
        larm.style.visibility = "visible"
        rarm.style.visibility = "visible"
        lleg.style.visibility = "visible"
        rleg.style.visibility = "visible" 
    }
}

function gameOver(){
    
}

function checkLetter(letter){
    // console.log("Kliknuto")
    var element = document.getElementById(letter)
    element.style.visibility = "hidden"
    console.log(guessingWord.includes(letter))

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



var clickedLetters = ""
var guessingWord = "DOCTORS"
var hangmanState = 0
console.log(hangmanState)
hangman(hangmanState)