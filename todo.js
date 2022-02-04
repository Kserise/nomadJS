const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify(obj) == 객체든 배열이든 뭐든 문자열로 만들어준다.
}


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "😢"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the turn item"+item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos); // "" 제거해주는 녀석 == 문자, 객체를 문자열로 저장하고 이걸 다시 되돌릴때 사용한다.
    toDos = parsedToDos;
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    // parsedToDos.forEach(sayHello); 랑 같다고 볼수있다.
    parsedToDos.forEach(paintToDo); // js에서 알아서 item을 매개변수에 담아서 함수를 호출한다. 똑똑하군.
    // == parsedToDos.forEach((item) => paintToDo(item));
}

// function sexyFilter(){
//     return true;
// }
// [1,2,3,4].filter(sexyFilter); // filter() == forEach() 처럼 배열의 갯수만큼 함수를 실행한다.
// true를 반환하면 배열유지, false를 반환하면 해당 아이템을 배열에서 제외한다.!!!
// function sexyFilter(item){ return item !== 3 } == item이 3이 아닐경우 true를 리턴한다는 의미
// function sexyFunction(item) { return item <= 1000 } == item이 1000보다 작거나 같으면 true를 리턴한다.
// .filter()는 기존 array를 수정하지않고 새로운 배열을 만든다..!!!!!!!!!

