let startingBet = document.getElementById("startingBet");
let luckySevens = document.forms["luckySevens"]
let results = document.getElementById("results");

const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}

function validate() {
    let startBet = parseFloat(startingBet.value);
    let currentRolls = 0;
    let highestWinnings = startBet;
    let rollCountAtHighestWinnings = 0;

    if (!luckySevens.checkValidity()) {
        luckySevens.className="was-validated"
        return false;
    }

    let currentMoney = startBet;

    while (currentMoney > 0) {
        currentRolls++;
        if (rollDice() + rollDice() === 7) {
            currentMoney += 4;
            if (currentMoney > highestWinnings) {               
                highestWinnings = currentMoney;
                rollCountAtHighestWinnings = currentRolls;
            }
        } else {
            currentMoney -= 1;
        }
    }
    
    document.getElementById("startingBetAmount").innerHTML = startBet;
    document.getElementById("totalRollsAmount").innerHTML = currentRolls;
    document.getElementById("highestWon").innerHTML = highestWinnings;
    document.getElementById("rollCountAtHighestWon").innerHTML = rollCountAtHighestWinnings;

    results.style.display = "block";
    return false;

}