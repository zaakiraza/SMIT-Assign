let city = prompt("Enter the name of your city");
alert("Welcome to the city of lights")

let gender = prompt("Enter your gender")
if (gender == "male") {
    alert("Good Morning Sir")
}
else if (gender == "female") {
    alert("Good Morning Ma'am")
}

let sig_color = prompt("Enter the color of signal")
if (sig_color == "red") {
    alert("Must stop")
}
else if (sig_color == "yellow") {
    alert("Ready to move")
}
else if (sig_color == "green") {
    alert("Move Now")
}

let fuel = prompt("Enter the fuel in litres");
if (fuel < 0.25) {
    alert("Please Refill the fuel in your car")
}

var a = 4;
if (++a === 5) {
    alert("Given condition for a variable a is true");
}
//true 

var b = 82;
if (b++ === 83) {
    alert("Given condition for a variable b is true");
}
//false

var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");
}
if (c === 13) {
    alert("Condition 2 is true");
}
if (++c === 13) {
    alert("Condition 3 is true");
}
if (c === 14) {
    alert("Condition 4 is true");
}

var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost;
if (totalCost === labourCost + materialCost) {
    alert("The Cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("false");
}

if ("car" < "cat") {
    alert("car is smaller than cat")
}


let num1 = +prompt("enter number");
let num2 = +prompt("enter number");
let oper = prompt("enter oper(+,-,*,/)");

if (oper == "+") {
    alert(num1 + num2);
}
else if (oper == "-") {
    alert(num1 - num2);
}
else if (oper == "*") {
    alert(num1 * num2);
}
else if (oper == "/") {
    alert(num1 / num2);
}

let temp = +prompt("Enter tempreature");
if (temp > 40) {
    alert("It is too hot outside")
}
else if (temp > 30) {
    alert("The wheater today is normal")
}
else if (temp > 20) {
    alert("today's wheather is cool")
}
else if (temp > 10) {
    alert("OMG! Today's wheater is so cool")
}

let number = +prompt("Enter number");
if (num % 2 == 0) {
    alert("Even")
}
else {
    alert("ODD")
}

if (number % 3 == 0) {
    alert("divisble by 3");
}

let gues = 7;
numguess = +prompt("Guess the number(1 - 10)");
if (numguess == gues) {
    alert("Bingo! Correct answer")
}
if (numguess == 8) {
    alert("Close enough to the correct answer")
}
if (numguess == gues) { }