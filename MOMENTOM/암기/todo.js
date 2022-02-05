const toDoForm = document.querySelector("#todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todoList");
const TODO_KEY = "todos";

let toDos = [];


function saveToDoList(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDos(e){
    const deleteToDo = e.target.parentElement;
    toDos = toDos.filter((item) => item.id !== parseInt(deleteToDo.id));
    deleteToDo.remove();
    saveToDoList();
}

function paintToDo(toDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteToDos);
    deleteBtn.innerText = "😂";
    li.id = toDo.id;
    span.innerText = toDo.text;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
    toDoInput.value = "";
}

function handleTodoSubmit(e){
    e.preventDefault();
    const toDoText = toDoInput.value;
    const toDo = {
        text:toDoText,
        id:Date.now()
    }
    paintToDo(toDo);
    toDos.push(toDo);
    saveToDoList();
}

toDoForm.addEventListener("submit", handleTodoSubmit);


const getToDoList = JSON.parse(localStorage.getItem(TODO_KEY));

if(getToDoList){
    getToDoList.forEach(paintToDo);
    toDos = getToDoList;
}