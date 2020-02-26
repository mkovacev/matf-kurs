'use strict'

class WordToGuess{
    constructor(word){
        this.wordProgress = 0;
        this.guessingWord = word;
        this.clickedLetters = "";
        this.wordLength = this.guessingWord.length;

        this.clickedLettersDiv = document.getElementById("clickedLetters");
        this.WordToGuessDiv = document.getElementById("wordToGuess");

        this.initStatusWord();
    }

    getGuessingWord(){
        return this.guessingWord;
    }

    checkProgress(){
        if(this.wordProgress == this.wordLength){
            return true;
        }else{
            return false;
        }
    }

    initStatusWord(){
        let divToInsert;
        for(let i = 0; i < this.wordLength; i++){
            divToInsert = document.createElement('div');
            divToInsert.innerHTML = "-";
            divToInsert.style.display = "inline-block";
            divToInsert.style.width = "5%";
            divToInsert.id = i.toString();
            this.WordToGuessDiv.appendChild(divToInsert);
        }
    }

    putLetterInList(letter){
        if(this.clickedLetters == ""){
            this.clickedLetters = letter;
        }else{
            this.clickedLetters = this.clickedLetters + ", " + letter;
        }

        this.clickedLettersDiv.innerText = this.clickedLetters;
    }

    putLetterInWord(letter){
        var i = this.guessingWord.indexOf(letter)
        console.log(i.toString())
        while(i != -1){
            this.wordProgress++
            document.getElementById(i.toString()).innerHTML = letter
            this.guessingWord = this.guessingWord.replace(letter, "-")
            i = this.guessingWord.indexOf(letter)
        }
    }
}