let a = document.getElementById('logic');
a.focus();

let plus = document.getElementById('plus');
let del = document.getElementById('del');
let equal = document.getElementById('equal');
let minus = document.getElementById('minus');
let multi = document.getElementById('multi');
let mod = document.getElementById('mod');
let dot = document.getElementById('dot');
let divide = document.getElementById('divide');
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');


function clearscreen() {
    a.value = "";
}

const cross = () => {
    const myarr = Array.from(a.value);
    myarr.pop();
    a.value = myarr.join("")
}

function funAll(oper) {
    if (oper == "Math.cos()" || oper == "Math.sin()" || oper == "Math.tan()" || oper == "Math.pow()" || oper == "Math.sqrt()") {
        let currentValue = Array.from(oper);
        console.log(currentValue);
        currentValue.splice(0, 5);
        currentValue = currentValue.join('')
        currentValue = currentValue.toString();
        oper = currentValue;
    }
    a.value = a.value + oper
}

const funequal = () => {
    let inputValue = a.value;
    inputValue = inputValue.replace(/\b(sin|cos|tan|sqrt|pow)\b/g, 'Math.$1');
    try {
        clearscreen();
        a.value = eval(inputValue);
    } catch (error) {
        a.value = "Error";
    }
}

a.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        funequal();
    }
});