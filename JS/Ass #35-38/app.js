let curentDate=new Date();
console.log(curentDate);

function greeting(){
    let FName=prompt("Enter First Name:");
    let LName=prompt("Enter Last Name:");
    alert(`Welcome ${FName} ${LName}`);
}
greeting();

function Add(a,b) {
    return a+b;
}
let a=+prompt("Enter 1 number:");
let b=+prompt("Enter 2 number:");
console.log(Add(a,b));


function Calc(a, b, c) {
    switch (c) {
        case '+':
            return a + b;
            break;

        case '-':
            return a - b;
            break;

        case '*':
            return a * b;
            break;

        case '/':
            return a / b;
            break;

        default:
            return (alert("Wrong operator"));
            break;
    }
}
let num1 = +prompt("Enter 1 number:");
let num2 = +prompt("Enter 2 number:");
let oper = prompt("Enter operator");
console.log(Calc(num1, num2, oper));

function squares(a){
    return a*a;
}
console.log(squares(+prompt("Enter Number")));

function factorial(a){
    let fact=1;
    for(let i=a ; i>0 ; i--){
        fact=fact * i;
    }
    return fact;
}
console.log(factorial(+prompt("Enter Number")));

function counting(num3,num4) {
    for (let index = num3; index <= num4; index++) {
        console.log(index);        
    }
}
let num3=+prompt("Enter 1 num:");
let num4=+prompt("Enter 2 num:");
counting(num3,num4);    

function clacArea(base,perp) {
    console.log((base*base)+ (perp*perp));
}
function prompts() {
    let base=+prompt("Enter Base:");
    let perp=+prompt("Enter Perpendicular:");
    clacArea(base,perp);
}
prompts();


let height=+prompt("Enter Base:");
let lenght=+prompt("Enter Perpendicular:");
function Area(a,b) {
    return a*b;
}
console.log(Area(height,lenght));
console.log(Area(5,2));


function palindrome(str) {
    let str1="";
    let count=0;
    for (let j = str.length-1; j >= 0; j--) {
        str1=str1 + str[j];        
    }
    for(i=0 ; i<str.length ; i++){
        if(str[i] == str1[i]){
            count++;
            continue;
        }
        else{
            console.log("Not palindrome");
            break;
        }
    }
    if(count== str.length){
        console.log("Is Palidrome");
    }
}
let str="dad";
palindrome(str);