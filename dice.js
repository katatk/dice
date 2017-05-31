// function that rolls two dice until 2 sixes occur
var rolls = 0;

//get the div to print the roll message to
var messageContainer = document.getElementById("roll-message");

// get container to add dice to
var div = document.getElementById("dice-container");

// get a random number between 1 and 6, including 1 and 6
function diceNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// dice numbers
var dieNumberOne;
var dieNumberTwo;

function createDice() {

    // reset dice container to empty
    div.innerHTML = "";

    rolls = 0;
    // while dice do not both equal 6, continue to roll
    do {
        // set dice numbers
        dieNumberOne = diceNumber(1, 6);
        dieNumberTwo = diceNumber(1, 6);

        console.log(dieNumberOne);
        console.log(dieNumberTwo);

        // create a container for two dice
        diceContainer = document.createElement("div");

        // create two img tag
        var die1 = document.createElement("div");
        var die2 = document.createElement("div");

        // assign a class
        die1.className = "dice dice-" + dieNumberOne;
        die2.className = "dice dice-" + dieNumberTwo;

        // append dice divs to their container
        diceContainer.appendChild(die1);
        diceContainer.appendChild(die2);

        // add the dice div to the container div
        div.appendChild(diceContainer);

        // add one to roll
        rolls++;
            
    }
    // while dice do not both equal 6, continue to roll
    while (dieNumberOne + dieNumberTwo != 12);
    
    // if dice 1 and dice 2 are both six, print message to the page
    messageContainer.innerHTML = "It took you " + rolls + " rolls to get double sixes";

}
