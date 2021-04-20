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

    while(userNumbers.length < userLengthMax){
        var userInput = prompt("Inserisci un numero tra " + minNumber + " e " + maxNumber + ".");
        var inputIsValid = checkUserInput(userInput);

        if(!inputIsValid){

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
        return false;
    }

    return result;
}

// Creazione numeri della macchina
function createAiNumbers(){
    do{
        var numeroRandom = generateRandomNumbers(minNumber, maxNumber);
        // Se non gia presente nell'array lo inserisce
        if(aiNumbers.indexOf(numeroRandom) === -1){
            aiNumbers.push(numeroRandom);
        }        
    } while (aiNumbers.length < aiNumbersLength)

    console.log(aiNumbers);
}

// Numeri randomici
function generateRandomNumbers(min, max){
    return Math.floor(Math.random() * max) + min;
}

createAiNumbers();


})()