let firstPlayer;
let secondPlayer;
firstPlayer = "Zakir";
secondPlayer = "Raza";
// while(!firstPlayer || !secondPlayer){
//     firstPlayer = prompt("Enter The Name Of First Player:") ;
//     secondPlayer = prompt("Enter The Name Of Second Player:") ;
//     if(!firstPlayer || !secondPlayer){
//         alert("Any One Name Is Wrong Please Enter Your Names Again") ;
//     }
// }
// firstPlayer=firstPlayer.toUpperCase();
// secondPlayer=secondPlayer.toUpperCase();
document.getElementById('fstPlayer').innerText = firstPlayer;
document.getElementById('secPlayer').innerText = secondPlayer;
// document.getElementById('dscds').parentElement.children

const rollDice=(a)=>{
    let diceNumber=Math.ceil(Math.random()*6);
    let diceImage=document.getElementById('rollingDiceImage');
}