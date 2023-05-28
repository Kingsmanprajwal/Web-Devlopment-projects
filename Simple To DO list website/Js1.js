const addBtn=document.querySelector("#add-btn");
const newTaskInput=document.querySelector("#wrapper input");
const taskContainer=document.querySelector("#tasks");
const error=document.getElementById("error-msg");
const countValue=document.querySelector(".number-of-task");
let taskcount=0;

const displayCount=(taskCount)=>{
    countValue.innerText=taskCount;
};

const addTask=()=>{
    const taskName=newTaskInput.value.trim();
    error.style.display="none";
    if(!taskName){
        setTimeout(()=>{
            error.style.display="block";
        },200);
        return;
    }
    
    const task=`<div class="task">
    <input type="checkbox" class="task-check"/>
    <span class="taskname">${taskName}</span><button class="edit"><i class="fa-sharp fa-solid fa-pen-to-square" style="color: #1f512e;"></i></button>
     <button class="delete"> <i class="fa-sharp fa-solid fa-trash fa-fade" style="color: #0643ac;"></i></button>
    </div>`;
    taskContainer.insertAdjacentHTML("beforeend",task);
    

    const deletebtn=document.querySelectorAll(".delete");
    deletebtn.forEach((button)=>{
        button.onclick=()=>{
            button.parentNode.remove();
            taskcount-=1;
            displayCount(taskcount);
        };
    });



    const editbuttons=document.querySelectorAll(".edit");
    editbuttons.forEach((editBtn)=> {
        editBtn.onclick=(e) => {
            let targetElement=e.target;
            if(!(e.target.className=="edit")){
                targetElement=e.target.parentElement;
            }
            newTaskInput.value=targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();
            taskcount-=1;
            displayCount(taskcount);

        };
    });




const taskCheck=document.querySelectorAll(".task-check");
taskCheck.forEach((checkBox)=>{
    checkBox.onchange=()=>{
        checkBox.nextElementSibling.classList.toggle("completed");

        if(checkBox.checked){
            taskcount-=1;

        }
        else{
            taskcount+=1;
        }
        displayCount(taskcount);
    };
});

taskcount+=1;
displayCount(taskcount);
newTaskInput.value="";
};

addBtn.addEventListener("click", addTask);

window.onload=()=>{
    taskcount=0;
    displayCount(taskcount);
    newTaskInput.value=""
}


