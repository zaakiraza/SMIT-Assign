function deleteRow(val) {
    document.querySelector('#val').remove();
}


let img1=document.querySelector("#img1");
function changemage(){
    img1.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFI451_VzftMWgG1Mfn8yE61kqxY_cErrqug&s")
}

function changemageAgain(){
    img1.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwmABxj_YeTl4BY7Ng0N197eWTeMD6fnoOA&s")
}


let count=document.querySelector('#count');
let counter=0;
function clickCount(){
    counter=counter+1;
    count.innerHTML=counter;
}