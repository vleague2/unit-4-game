// VARIABLES

// Num variable: yourTotal, which is tied to display h5 #your-total
var yourTotal;

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
    randomNumber = (Math.floor(Math.random() * 100) + 1);
    $("#random-number").html(randomNumber);
}

// generate pusheen values function
    // a number between X and Y 
function genPusheen() {
    pusheen1Value = (Math.floor(Math.random() * 10) + 1);
    pusheen2Value = (Math.floor(Math.random() * 10) + 1);
    pusheen3Value = (Math.floor(Math.random() * 10) + 1);
    pusheen4Value = (Math.floor(Math.random() * 10) + 1);
}

// Restart game function
    // Empty yourTotal
    // call genRandomNumber function
    // call genPusheen function
function restart() {
    yourTotal = 0;
    $("#your-total").html(yourTotal);
    genRandomNumber();
    genPusheen();
}



// GAME

// Game generates randomNumber
// Game generates values for Pusheens
// Game displays randomNumber
$(document).ready(function(){

restart();

// If yourTotal < randomNumber
    // .Click function to listen for clicks on the Pusheens
    // The clicked Pusheen's value gets pushed to yourTotal
if (randomNumber > yourTotal) {
    $("#pusheen1").click(function(){
        yourTotal += pusheen1Value;
        $("#your-total").html(yourTotal);
    });

    $("#pusheen2").click(function() {
        yourTotal += pusheen2Value;
        $("#your-total").html(yourTotal);
    });

    $("#pusheen3").click(function() {
        yourTotal += pusheen3Value;
        $("#your-total").html(yourTotal);
    });

    $("#pusheen4").click(function() {
        yourTotal += pusheen4Value;
        $("#your-total").html(yourTotal);
    });   
}

// If yourTotal === randomNumber
    // Add to winCounter
    // Restart game
else if (yourTotal === randomNumber) {
    winCounter++;
    restart();
}

// If yourTotal > randomNumber
    // Add to lossCounter
    // Restart game
else if (yourTotal > randomNumber) {
    lossCounter++;
    restart();
}
})