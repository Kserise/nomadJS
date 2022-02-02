const inputForm = document.querySelector("#inputForm");
const inputValue = inputForm.querySelector(".inputValue");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME = "username";

function handleSubmit(e){
    e.preventDefault();
    const username = inputValue.value;
    console.log(username);
    localStorage.setItem(USERNAME, username);
    inputForm.classList.add(HIDDEN_CLASS);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `welcome ${username} keep going`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem(USERNAME);

if(savedUserName === null){
    inputForm.addEventListener("submit", handleSubmit);
    inputForm.classList.remove(HIDDEN_CLASS);
}else {
    paintGreeting(savedUserName);
}