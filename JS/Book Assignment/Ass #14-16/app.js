let arr2;
let arr=[];
arr=["zakir","raza","ali"];
arr2=[1,2,4,2,4,8];
let decbol=[true,false];
let mix=[1,"mango",65,"size"];
let edu=["SSC","HSC","BSC","BS"];
for(let i=0;i<4;i++){
    document.write(i+")"+edu[i]+"\n");
}

let student=["zakir","raza","ali"];
let score=[499,313,400];
for(let i=0;i<3;i++){
    console.log("score of"+student[i]+" is "+(score[i]/500)*100)
}

let colors=["white","pink","blue","green"];
document.write(colors);
let updatedcolor=prompt("enter the color you want to put in begining");
colors[0]=updatedcolor;
document.write(colors);
let updatedcolorend=prompt("enter the color you want to put in end");
colors[0]=updatedcolorend;
document.write(colors);
colors.push("red","yellow");
document.write(colors);
colors.pop();
document.write(colors);
let index=+prompt("enter the index in which you want to add color")
updatedcolor=prompt("enter the color")
colors[index]=updatedcolor;
document.write(colors);
index=+prompt("enter the index in which you want to delete color")
colors[index]=Null;
document.write(colors);


let scores=[12,421,232,21,43];
console.log(scores)
scores.sort((a, b) => a - b);
console.log(scores)

let cities=["karachi","lahore","pindi","islamabad"];
let selectedcities;
selectedcities[0]=cities[0];
selectedcities[1]=cities[1];
selectedcities[2]=cities[2];
console.log(cities);
console.log(selectedcities);

arr2=["this ","is ","my ","cat"];
document.write(arr2.join(""));  

let a=[];
a[0]="white";
a[1]="black";
a[2]="green";
a[3]="blue";