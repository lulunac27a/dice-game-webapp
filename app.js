const numberOfDiceInput = document.getElementById('numDice');
const rollDiceButton = document.getElementById('rollDice');
const resultText = document.getElementById('result');
let total = 0;
let diceRolls = [];
rollDiceButton.addEventListener('click', () => {
    const numDice = numberOfDiceInput.value;
    total = 0;
    diceRolls = [];
    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        diceRolls.push(roll);
        total += roll;
    }
    resultText.innerText = `Dice Rolls: ${diceRolls.join(', ')}
Total Roll: ${total}`;
})