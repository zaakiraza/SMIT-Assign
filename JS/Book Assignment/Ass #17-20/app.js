let arr=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
for (i=0 ;i<3;i++){
    for(j=0 ;j<3 ;j++){
       document.write(arr[i][j]+" ");
    }
    document.write("<br>");
}


for(let j=1 ; j<=10 ;j++){
    console.log(j);
}


let num=prompt("Enter number");
let len=prompt("Lenght of table");
for(j=1; j<=len ;j++){
    console.log(num + "x" + j + "=" + num*j )
}


let fruits=["Apple", "banana","mango","orange","strawberry"]
for(i=0 ;i<5 ;i++){
    console.log("Element at index " + i + " is " + fruits[i]);
}

// 1-10
for(i=1 ; i<=15 ; i++){
    console.log(i);
}
10-1
for(i=10 ; i>=1 ; i--){
    console.log(i);
}


// Even
for(i=0 ;i<=20;i++){
    if(i%2 ==0){
        console.log(i);
    }
    else{
        continue;
    }
}


// ODD
for(i=0 ;i<=20;i++){
    if(i%2 !=0){
        console.log(i);
    }
    else{
        continue;
    }
}


// Series
for(i=2000 ; i<=20000; i+2000){
    console.log(i)
}


// searching
let A=["cake","apple pie","cookie","chips","patties"]
let search=prompt("Enter string");
for(let j=0 ;j<=5 ;j++){
    if(search == A[j]){
        console.log(search + " is available at index " + j + " in our bakery");
    }
    else{
        console.log("We are sorry." + search + " is not available in our bakery");
    }
}


// largest 
let B=[24,53,78,91,12];
console.log("Array Items: " + B);
for(i=0;i<5;i++){
    if(B[i] > B[0]){
        B[0]=B[i];
    }
}
consle.log("The Largest number is " + B[0]);


// Samallest
let C=[24,53,78,91,12];
console.log("Array Items: " + B);
for(i=0;i<5;i++){
    if(C[i] < C[0]){
        C[0]=C[i];
    }
}
console.log("The Samallest number is " + B[0]);


// Multiple of 5
for(i=0 ;i<=20; i++){
    console.log(i*5);
}