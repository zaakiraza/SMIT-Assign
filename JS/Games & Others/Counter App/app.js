let counter=document.getElementById('count');
let count=0;
const increaseCount=()=>{
    count++
    counter.innerText=count;
}
const ResetCount=()=>{
    count=0;
    counter.innerText=count;

}
const decreaseCount=()=>{
    count--;
    counter.innerText=count;
}