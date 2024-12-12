// Question#1
let formSubmit=document.querySelector('#formSubmit');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');

formSubmit.addEventListener('click',()=>{
    alert("Form Submitted Successfully");
    alert(`Name= ${input1.value}`);
    alert(`Email= ${input2.value}`);
    alert(`Password= ${input3.value}`);
})


// Question#2
let para=document.getElementById('para');
let text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officiis, architecto blanditiis soluta quae fuga exercitationem. Ratione porro dicta tempore magnam. Ea pariatur, maxime laboriosam dolores illo id inventore? Amet."
let len=text.length;
para.innerText=text.slice(0,150);
showMore=()=>{
    para.innerText=text.slice(0,len-1);
    document.getElementById('btn1').style.display="none";
    document.getElementById('btn2').style.display="block";
}
showLess=()=>{
    para.innerText=text.slice(0,150);
    document.getElementById('btn1').style.display="block";
    document.getElementById('btn2').style.display="none";
}

// Question#3
const fun2=(id_Name)=>{
    let elem=document.getElementById(id_Name);
    elem.remove();
}

let dataShow1 = document.getElementById('dataShow1');
let dataShow2 = document.getElementById('dataShow2');
let dataShow3 = document.getElementById('dataShow3');
let count=1;
let table = document.getElementById('table1');
function fun() {
    let rowId = `row${count}`;
    table.innerHTML += `
        <tr id="${rowId}">
            <td>${input1.value}</td>
            <td>${input2.value}</td>
            <td>${input3.value}</td>
            <td onclick="fun2('${rowId}')">delete</td>
        </tr>
    `;
    input1.value = "";
    input2.value = "";
    input3.value = "";
    count++;
}