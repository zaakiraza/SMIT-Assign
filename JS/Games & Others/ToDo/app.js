let taskArr = [];
let count = 1;
let input = document.getElementById('input');

document.getElementById('addtask').addEventListener("mouseenter", () => {
    input.value ? (document.getElementById('addtask').style.cursor = "pointer") : (document.getElementById('addtask').style.cursor = "not-allowed")
})

addtask = () => {
    let obj = {
        taskName: input.value,
        taskId: count
    }
    taskArr.push(obj);
    input.value = "";
    document.getElementById('task_list').innerHTML += `
    <div class="taskItem" id="task${count}">
        <div class="task_detail">
            <h1 id="serialNo">${count}</h1>
            <h1 id="taskName">${obj?.taskName}</h1>
        </div>
        <div class="task_opt">
            <i class="fa-solid fa-trash" onclick="deleteTask(this)"></i>
            <i class="fa-solid fa-pen" onclick="editTask(this)"></i>
        </div>
    </div>
    `
    count++;
}

const editTask = (a) => {
    let elem = a.parentElement.parentElement;
    let text = elem.querySelector('.task_detail').querySelector('#taskName')?.innerText;
    input.value = text;
    input.focus();
    input.setSelectionRange(0, (text.length));
    document.getElementById('addtask').style.display = "none";
    document.getElementById('tickBtn').style.display = "block";
    text = input.value;
    document.getElementById('addtask').addEventListener("mouseenter", () => {
        input.value ? (document.getElementById('addtask').style.cursor = "pointer") : (document.getElementById('addtask').style.cursor = "not-allowed")
    })
    document.getElementById('editTask').addEventListener("click", () => {
        text = input.value;
        elem.querySelector('.task_detail').querySelector('#taskName').innerText = text;
        document.getElementById('addtask').style.display = "block";
        document.getElementById('tickBtn').style.display = "none";
        input.value="";
        let taskNo=elem.querySelector('.task_detail').querySelector('#serialNo').innerText;
        for(let i=0 ; i<taskArr.length; i++){
            if(taskArr[i].taskId == taskNo){
                taskArr[i].taskName=text;
                return
            }
        }
    })

}

const deleteTask=(a)=>{
    let elem = a.parentElement.parentElement;
    elem.remove();
    let taskNo=elem.querySelector('.task_detail').querySelector('#serialNo').innerText;
    for(let i=0 ; i<taskArr.length; i++){
        if(taskArr[i].taskId == taskNo){
            taskArr.splice(i,1);
            return
        }
    }
}