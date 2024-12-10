let a = document.getElementById('logic');
let plus = document.getElementById('plus');
let del = document.getElementById('del');
let equal = document.getElementById('equal');
let minus = document.getElementById('minus');
let multi = document.getElementById('multi');
let mod = document.getElementById('mod');
let dot = document.getElementById('dot');
let divide = document.getElementById('divide');
function clearscreen() {
    a.value = "";
}

const cross = () => {
    const myarr = Array.from(a.value);
    console.log(myarr);
    myarr.pop();
    a.value = myarr.join("")
}

const funplus = () => {
    a.value = a.value + '+';
}

const funminus = () => {
    a.value = a.value + '-';
}

const funmulti = () => {
    a.value = a.value + '*';
}

const fundvide = () => {
    a.value = a.value + '/';
}

const fundot = () => {
    a.value = a.value + '.';
}

const funmod = () => {
    a.value = a.value + '%';
}

let zero = document.getElementById('zero');
const fun = () => {
    a.value = a.value + '0';
}


let one = document.getElementById('one');
const fun1 = () => {
    a.value = a.value + '1';
}

let two = document.getElementById('two');
const fun2 = () => {
    a.value = a.value + '2';
}

let three = document.getElementById('three');
const fun3 = () => {
    a.value = a.value + '3';
}

let four = document.getElementById('four');
const fun4 = () => {
    a.value = a.value + '4';
}
const fun5 = () => {
    let five = document.getElementById('five');
    a.value = a.value + '5';
}
const fun6 = () => {
    let six = document.getElementById('six');
    a.value = a.value + '6';
}
const fun7 = () => {
    let seven = document.getElementById('seven');
    a.value = a.value + '7';
}
const fun8 = () => {
    let eight = document.getElementById('eight');
    a.value = a.value + '8';
}
const fun9 = () => {
    let nine = document.getElementById('nine');
    a.value = a.value + '9';
}


const funequal = () => {
    let arr = Array.from(a.value);
    clearscreen();
    a.value = eval(arr.join(""));
}

a.addEventListener('keypress', enterhit = (event) => {
    let arr = Array.from(a.value);
    if (event.key === "Enter") {
        event.preventDefault();
        a.value = eval(arr.join(""))
    }
});