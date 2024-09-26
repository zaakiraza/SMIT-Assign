let number=prompt("Enter a string");
if(number>=65 && number <=90){
    console.log("UpperCase")
} 
else if(number>=97 && number<=122){
    console.log("lower case");
}

let num1=+prompt("Enter num1");
let num2=+prompt("Enter num2");
if(num1>num2){
    console.log(`${num1} is greater than ${num2}`)
}
else{
    console.log(`${num2} is greater than ${num1}`)
}

let pos=+prompt("Enter the number")
if(pos>0){
    console.log(`${pos} is greater than zero`)
}
else{
    console.log(`${pos} is Less than zero`)
}

let char=prompt("Enter a character");
if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
    console.log(true)
}
else{
    console.log(false);
}

let pass="zakir";
let checkpass=prompt("Enter password");
if(checkpass==pass){
    console.log('Correct!')
}
else{
    console.log('Incorrect password')
}


var greeting;
var hour=13;
if(hour<18){
    greeting="Good day";
}

else{
    greeting="Good evening";
}

let time=+prompt("Enter time in 24 time format")
if(time >= 0 && time < 1200){
    console.log("Good morning!");
}
else if(time >= 1200 && time < 1700){
    console.log("Good afternoon!");
}
else if(time >= 1700 && time < 2100){
    console.log("Good evening!");
}
else if(time >= 2100 && time < 2359){
    console.log("Good night!");
}