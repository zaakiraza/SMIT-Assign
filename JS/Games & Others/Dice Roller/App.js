let firstPlayer;
let secondPlayer;
let finishingScore;
while (!firstPlayer || !secondPlayer || !finishingScore) {
    firstPlayer = prompt("Enter the name of first player:");
    secondPlayer = prompt("Enter the name of second player:");
    finishingScore = prompt("Enter the finishing Score: ");
    if (!firstPlayer || !secondPlayer || !finishingScore) {
        alert("Any One Name Is Wrong Please Enter Your Names Again");
    }
}
firstPlayer = firstPlayer.toUpperCase();
secondPlayer = secondPlayer.toUpperCase();
finishingScore = Number(finishingScore);

document.getElementById('fstPlayer').innerText = firstPlayer;
document.getElementById('secPlayer').innerText = secondPlayer;

let diceNumber;
let turn = true;
let holdDice = 1;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currentScore = 0;
const rollDice = (a) => {
    diceNumber = Math.ceil(Math.random() * 6);
    let diceImage = document.getElementById('rollingDiceImage');
    diceImage.src = `Images/${diceNumber}.png`;
    scoreCalc();

}

const scoreCalc = () => {
    if (turn) {
        if (diceNumber == 1) {
            turn = !turn;
            currentScore = 0;
            holdDice++
            turnchecker();
            console.log(currentScore);
            scorePlayer1 = scorePlayer1;
            document.getElementById('comingScore1').innerText = currentScore;
            document.getElementById('totalScore1').innerText = scorePlayer1;
        }
        else {
            currentScore = currentScore + diceNumber;
            document.getElementById('comingScore1').innerText = currentScore;
            if ((scorePlayer1 + currentScore) >= finishingScore) {
                matchEnd(firstPlayer);
            }
        }
    }
    else {
        if (diceNumber == 1) {
            turn = !turn;
            currentScore = 0;
            holdDice++
            turnchecker();
            console.log(currentScore);
            scorePlayer2 = scorePlayer2 + currentScore;
            document.getElementById('comingScore2').innerText = currentScore;
            document.getElementById('totalScore2').innerText = scorePlayer2;
        }
        else {
            currentScore = currentScore + diceNumber;
            document.getElementById('comingScore2').innerText = currentScore;
            if ((scorePlayer2 + currentScore) >= finishingScore) {
                matchEnd(secondPlayer);
            }
        }
    }
}

const turnChanger = () => {
    holdDice++;
    // player 2
    if (holdDice % 2 != 0) {
        scorePlayer2 += currentScore;
        document.getElementById('comingScore2').innerText = 0;
        document.getElementById('totalScore2').innerText = scorePlayer2;
        turn = true;
        currentScore = 0;
    }
    // player 1
    else {
        scorePlayer1 += currentScore;
        document.getElementById('comingScore1').innerText = 0;
        document.getElementById('totalScore1').innerText = scorePlayer1;
        turn = false;
        currentScore = 0;
    }
    turnchecker();
}

const turnchecker = () => {
    if (turn) {
        document.querySelector('.portion1').style.backgroundColor = "#bdb1b1"
        document.querySelector('.portion3').style.backgroundColor = "white"
    }
    else {
        document.querySelector('.portion3').style.backgroundColor = "#bdb1b1"
        document.querySelector('.portion1').style.backgroundColor = "white"
    }
}
turnchecker();

function matchEnd(player) {
    alert(`Congratulations ${player} wins the match`);
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    holdDice = 1;
    turn = true;
    currentScore = 0;
    document.getElementById('comingScore1').innerText = currentScore;
    document.getElementById('totalScore1').innerText = scorePlayer1;
    document.getElementById('comingScore2').innerText = currentScore;
    document.getElementById('totalScore2').innerText = scorePlayer2;
    return;
}

const newGame = () => {
    let ans = confirm("Continue new Match:");
    if (ans) {
        scorePlayer1 = 0;
        scorePlayer2 = 0;
        holdDice = 1;
        turn = true;
        currentScore = 0;
        document.getElementById('comingScore1').innerText = currentScore;
        document.getElementById('totalScore1').innerText = scorePlayer1;
        document.getElementById('comingScore2').innerText = currentScore;
        document.getElementById('totalScore2').innerText = scorePlayer2;
    }
    else {
        scoreCalc();
    }
}