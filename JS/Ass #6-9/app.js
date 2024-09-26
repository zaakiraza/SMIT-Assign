var a=+prompt("enter value");
document.write("Result: <br>The Value of <b>a</b> is: "+a +
    "<br>.................................... <br><br>The value of <b>++a</b> is: " + ++a +
    "<br>Now the value of <b>a</b> is: " + a + 
    "<br><br>The value of <b>a++</b> is: "+ a++ +
    "<br>Now the value of <b>a</b> is: " + a +
    "<br><br>The value of <b>--a</b> is: "+ --a +
    "<br>Now the value of <b>a</b> is: " + a +
    "<br><br>The value of <b>a--</b> is: "+ a-- +
    "<br>Now the value of <b>a</b> is: " + a
);

var a=2,b=1;
var result= --a - --b + ++b + b--;
document.write("<b>--a</b> is: "+ --a +" <br><b>--b</b> is: " + --b + "<br><b>++b</b> is: " + ++b + "<br><b>b--</b> is: " + b-- + "<br>");
document.write("Fnal Result: "+ result);

let name=prompt("Enter your name");
alert("Welcome "+ name+ " on our wesite");

let num=+prompt("Enter the number")
if(num > 0 || num < 0){
    for(let i=0 ; i<=12; i++){
        document.write(num + "x" + i + "=" + num*i + "<br>");
    }
}
else{
    for(let i=0 ; i<=12; i++){
        document.write(5 + "x" + i + "=" + 5*i + "<br>");
    }
}

let sub1=prompt("Enter the subject 1");
let sub2=prompt("Enter the subject 2");
let sub3=prompt("Enter the subject 3");
let t_marks=100;

let obt1=prompt("Enter the marks of " + sub1)
let obt2=prompt("Enter the marks of " + sub2)
let obt3=prompt("Enter the marks of " + sub3)

let marks1=(obt1/t_marks)*100;
let marks2=(obt2/t_marks)*100;
let marks3=(obt3/t_marks)*100;

document.write("Marks of " + sub1 + "is "+ marks1 + "<br>" + "Marks of " + sub2 + "is "+ marks2 + "<br>" + "Marks of " + sub3 + "is "+ marks3)