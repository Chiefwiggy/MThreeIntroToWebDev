function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let numSides = prompt("How many sides does the die have?");
let times = prompt("How many times would you like to roll");

for (let i = 0; i < times; ++i) {
    console.log(rollDice(numSides));
}