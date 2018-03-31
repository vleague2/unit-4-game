// VARIABLES

// Num variable: yourTotal, which is tied to display h5 #your-total
var yourTotal = 0;

// Num variable: winCounter set to 0, which is tied to display span #win-ct
var winCounter = 0;

//Num variable: lossCounter set to 0, which is tied to display span #loss-ct
var lossCounter = 0;

// Num variable: randomNumber, which is tied to display h5 #random-number
var randomNumber = 0;

// Num variable: pusheen1Value, which is tied to img #pusheen-1
var pusheen1Value = 0;

//Num variable: pusheen2Value, which is tied to img #pusheen-2
var pusheen2Value = 0;

// Num variable: pusheen3Value, which is tied to img #pusheen-3
var pusheen3Value = 0;

// Num variable: pusheen4Value, which is tied to img #pusheen-4
var pusheen4Value = 0;



// FUNCTIONS

// generate & display randomNumber function
function genRandomNumber() {
    randomNumber = (Math.floor(Math.random() * 101) + 19);
    $("#random-number").html(randomNumber);
}

// generate pusheen values function
    // a number between X and Y 
function genPusheen() {
    pusheen1Value = (Math.floor(Math.random() * 11) + 1);
    pusheen2Value = (Math.floor(Math.random() * 11) + 1);
    pusheen3Value = (Math.floor(Math.random() * 11) + 1);
    pusheen4Value = (Math.floor(Math.random() * 11) + 1);
}

// Restart game function
    // Empty yourTotal
    // call genRandomNumber function
    // call genPusheen function
function restart() {
    yourTotal = 0;
    $("#your-total").html(yourTotal);
    $("#win-ct").html(winCounter);
    $("#loss-ct").html(lossCounter);
    genRandomNumber();
    genPusheen();
}

// GAME

// Game generates randomNumber
// Game generates values for Pusheens
// Game displays randomNumber
$(document).ready(function(){

    restart();

// .Click functions to listen for clicks on the Pusheens
// The clicked Pusheen's value gets pushed to yourTotal
// If yourTotal reaches randomNumber, the game restarts and adds a win
// If yourTotal becomes more than randomNumber, the game restarts and adds a loss

    $("#pusheen1").click(function(){
        if (randomNumber > yourTotal) {
            yourTotal = yourTotal += pusheen1Value;
            $("#your-total").html(yourTotal);
        }

        else if (randomNumber === yourTotal) {
            winCounter++;
            restart();
        }

        else {
            lossCounter++;
            restart();
        }
    })

    $("#pusheen2").click(function(){
        if (randomNumber > yourTotal) {
            yourTotal = yourTotal += pusheen2Value;
            $("#your-total").html(yourTotal);
        }

        else if (randomNumber === yourTotal) {
            winCounter++;
            restart();
        }

        else {
            lossCounter++;
            restart();
        }
    })

    $("#pusheen3").click(function(){
        if (randomNumber > yourTotal) {
            yourTotal = yourTotal += pusheen3Value;
            $("#your-total").html(yourTotal);
        }

        else if (randomNumber === yourTotal) {
            winCounter++;
            restart();
        }

        else {
            lossCounter++;
            restart();
        }
    })

    $("#pusheen4").click(function(){
        if (randomNumber > yourTotal) {
            yourTotal = yourTotal += pusheen4Value;
            $("#your-total").html(yourTotal);
        }

        else if (randomNumber === yourTotal) {
            winCounter++;
            restart();
        }

        else {
            lossCounter++;
            restart();
        }
    })

})