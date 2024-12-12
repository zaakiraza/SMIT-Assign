let num=prompt("Enter decimal number:");
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let num1=prompt("Enter negative decimal number:");
console.log(Math.round(num1));
console.log(Math.floor(num1));
console.log(Math.ceil(num1));

let num2=prompt("Enter negative number:");
console.log(Math.abs(num1));

let num3=Math.ceil(Math.random() * 6);
console.log(num3);

let coin=Math.ceil(Math.random() * 2);
if(coin==1){
    console.log("heads")
}
else{
    console.log("tails")
}

let randomNumber=Math.ceil(Math.random()*100);
console.log(randomNumber);

let weight=prompt("Enter your weight:");
document.write(`Your weight is ${weight}`);

let numActual=Math.ceil(Math.random()*10);
let guess=prompt("Guess the number:");
if(numActual == guess){
    alert("Congratulation you win");
}
else{
    alert("You lose");
}