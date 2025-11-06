const numberOfDiceInput = document.getElementById("numDice"); //number of dice input
const numberOfSidesInput = document.getElementById("numSides"); //number of sides input
const rollDiceButton = document.getElementById("rollDice"); //roll dice button
const resultText = document.getElementById("result"); //result output text
let total = 0; //set total to 0
let diceRolls = []; //set list of dice rolls to empty list
rollDiceButton.addEventListener("click", () => {
    //when roll dice button is clicked
    const numDice = parseInt(numberOfDiceInput.value, 10); //get number of dice input value as integer
    const numSides = parseInt(numberOfSidesInput.value, 10); //get number of sides input value as integer
    total = 0; //reset total to 0
    diceRolls = []; //reset dice rolls to empty list
    for (let i = 0; i < numDice; i++) {
        //repeat for each dice
        const roll = Math.floor(Math.random() * numSides) + 1; //get random dice number based on number of sides
        diceRolls.push(roll); //add roll to list of dice rolls
        total += roll; //add rolled dice to total
    }
    resultText.innerText = `Dice Rolls: ${diceRolls.join(", ")}
Total Roll: ${total}`; //update result output text
});
