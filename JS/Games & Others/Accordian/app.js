fun=(i)=>{
    document.getElementById(`box${i}`).style.backgroundColor="#B9FF65";
    document.getElementById(`ending${i}`).style.display="block";
    document.getElementById(`plus${i}`).style.display="none";
    document.getElementById(`minus${i}`).style.display="flex";
}

fun1=(j)=>{
    document.getElementById(`box${j}`).style.backgroundColor="#F3F3F3";
    document.getElementById(`ending${j}`).style.display="none";
    document.getElementById(`plus${j}`).style.display="flex";
    document.getElementById(`minus${j}`).style.display="none";
}