// VARIABLES

// Num variable: yourTotal, which will be tied to display h5 #your-total
var yourTotal = 0;

// Num variable: winCounter set to 0, which will be tied to display span #win-ct
var winCounter = 0;

//Num variable: lossCounter set to 0, which will be tied to display span #loss-ct
var lossCounter = 0;

// Num variable: randomNumber, which will be tied to display h5 #random-number
var randomNumber = 0;

// Num variable: pusheen1Value, which will be tied to img #pusheen-1
var pusheen1Value = 0;

//Num variable: pusheen2Value, which will be tied to img #pusheen-2
var pusheen2Value = 0;

// Num variable: pusheen3Value, which will be tied to img #pusheen-3
var pusheen3Value = 0;

// Num variable: pusheen4Value, which will be tied to img #pusheen-4
var pusheen4Value = 0;



// FUNCTIONS

// generate & display randomNumber function
    // A number between 19 and 120
function genRandomNumber() {
    randomNumber = (Math.floor(Math.random() * 101) + 19);
    $("#random-number").html(randomNumber);
}

// generate pusheen values function
    // a number between 1 and 12
function genPusheen() {
    pusheen1Value = (Math.floor(Math.random() * 11) + 1);
    pusheen2Value = (Math.floor(Math.random() * 11) + 1);
    pusheen3Value = (Math.floor(Math.random() * 11) + 1);
    pusheen4Value = (Math.floor(Math.random() * 11) + 1);
}

// Check if conditions are met to call the restart
    // If so, add to the appropriate win and loss counter, and call the restart function
function needRestart() {
    if (randomNumber === yourTotal) {
        winCounter++;
        restart();
    }

    else if (randomNumber < yourTotal) {
        lossCounter++;
        restart();
    }
}

// Update the display with the new total
function writeTotal() {
    $("#your-total").html(yourTotal);
}

// Restart game function
    // Empty yourTotal
    // Write new values to display
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

// Make sure document is loaded!
$(document).ready(function(){

    // Game generates randomNumber
    // Game generates values for Pusheens
    // Game displays randomNumber
    restart();

// .Click functions to listen for clicks on the Pusheens
// The clicked Pusheen's value gets pushed to yourTotal
// If yourTotal reaches randomNumber, the game restarts and adds a win
// If yourTotal becomes more than randomNumber, the game restarts and adds a loss

    $("#pusheen1").click(function(){

        if (randomNumber > yourTotal) {
            yourTotal = yourTotal += pusheen1Value;
            writeTotal();
            needRestart();
        }
    })

    $("#pusheen2").click(function(){
        if (randomNumber > yourTotal) {
            yourTotal = yourTotal += pusheen2Value;
            writeTotal();
            needRestart();
        }
    })

    $("#pusheen3").click(function(){
        if (randomNumber > yourTotal) {
            yourTotal = yourTotal += pusheen3Value;
            writeTotal();
            needRestart();
        }
    })

    $("#pusheen4").click(function(){
        if (randomNumber > yourTotal) {
            yourTotal = yourTotal += pusheen4Value;
            writeTotal();
            needRestart();
        }
    })
})