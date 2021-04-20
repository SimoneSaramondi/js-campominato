(function(){

/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.

In seguito deve chiedere all’utente (100 - 16) volte di inserire
un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.

Se il numero è presente nella lista dei numeri generati, la partita termina, 
altrimenti si continua chiedendo all’utente un altro numero.

La partita termina quando il giocatore inserisce un numero “vietato” 
o raggiunge il numero massimo possibile di numeri consentiti.

Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

var minNumber = 1;
var maxNumber = 100;
var aiNumbersLength = 16;

var aiNumbers = [];
var userNumbers = [];

// Chiede il numero all'utente
function askUserNumber(){
    var userLengthMax = maxNumber - aiNumbersLength; // Poichè l'utente non dovrebbe immettere gli stessi numeri del pc
    var gameOver = false;

    while(userNumbers.length <= userLengthMax && !gameOver){
        var userInput = prompt("Inserisci un numero tra " + minNumber + " e " + maxNumber + ". (" + userNumbers.length + ")");
       
        if(userInput == null){
            gameOver = true;
        }        
        if(userNumbers.length === userLengthMax){
            gameOver = true;
            alert("Hai vinto!!!");
        }

        var inputIsValid = checkUserInput(userInput);

        if(!inputIsValid && inputIsValid !== "GAME OVER" ){
            alert("Numero inserito non valido");
        } else if( inputIsValid === "GAME OVER"){
            gameOver = true;
            alert("Hai perso dopo aver inserito " + userNumbers.length + " numeri.");
        } else{
            userNumbers.push(parseInt(userInput));
            console.log(userNumbers)
        }
    }
}

// Controlla il numero inserito
function checkUserInput(inputValue){
    var result = true;
    var numerToCheck = parseInt(inputValue);

    if(isNaN(numerToCheck)){
        return false;
    }
    if(numerToCheck < minNumber || numerToCheck > maxNumber){
        return false;
    }
    if(userNumbers.indexOf(numerToCheck) > -1){        
        return "GAME OVER";
    }

    return result;
}

// Creazione numeri della macchina
function createAiNumbers(){
    while (aiNumbers.length < aiNumbersLength){
        var numeroRandom = generateRandomNumbers(minNumber, maxNumber);
        // Se non gia presente nell'array lo inserisce
        if(aiNumbers.indexOf(numeroRandom) === -1){
            aiNumbers.push(numeroRandom);
        }        
    } 

    console.log(aiNumbers);
}

// Numeri randomici
function generateRandomNumbers(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

createAiNumbers();
askUserNumber();

})()