let section1=document.getElementById('main1');
let section2=document.getElementById('main2');
let section3=document.getElementById('main3');
let tag1=document.getElementById('tag1');
let tag2=document.getElementById('tag2');
let tag3=document.getElementById('tag3');

tag1.addEventListener('click', ()=>{
  tag1.style.color="red";
  tag2.style.color="black";
  tag3.style.color="black";
  section1.style.display="block";
  section2.style.display="none";
  section3.style.display="none";
});

tag2.addEventListener('click', ()=>{
  tag1.style.color="black";
  tag2.style.color="red";
  tag3.style.color="black";
  section1.style.display="none";
  section2.style.display="block";
  section3.style.display="none";
});

tag3.addEventListener('click', ()=>{
  tag1.style.color="black";
  tag2.style.color="black";
  tag3.style.color="red";
  section1.style.display="none";
  section2.style.display="none";
  section3.style.display="block";
});