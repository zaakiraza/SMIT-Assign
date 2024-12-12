let firstName=prompt("Enter your first name:");
let lastName=prompt("Enter your first name:");
let fullName=firstName + " " + lastName;
alert(`Hello ${fullName}`);

let phone=prompt("Enter your first name:");
alert(`My Favourite phone is : ${phone} and lenght is ${phone.length}`)

let str1=prompt("Enter string");
console.log(str1.indexOf('n'))

let str2='hello world';
console.log(str2.lastIndexOf('l'));

let str3='Pakistani';
console.log(str3.charAt('3'));

let firstName1=prompt("Enter your first name:");
let lastName1=prompt("Enter your first name:");
firstName1=firstName1.concat(' ');
let fullName1=firstName1.concat(lastName1);
alert(fullName1);

let city='Hyderabad';
console.log(city);
city=city.replace('Hyder','islam');
console.log(city);

let number1=123;
console.log(number1)
console.log(typeof(number1))
let strconvert=toString(number1);
console.log(strconvert)
console.log(typeof(strconvert));

let ask=prompt("Enter string:");
let askupper=ask.toUpperCase;
console.log(askupper);

let ask1=prompt("Enter string:");
let askupper1=ask1.toLowerCase;
console.log(askupper1);

let number2="123";
console.log(number2)
console.log(typeof(number2))
let strconvert2=+(number2);
console.log(strconvert2)
console.log(typeof(strconvert2));