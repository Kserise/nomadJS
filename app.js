const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // String만 포함된 변수는 대문자로 작성한다. 관습같은것 
const USERNAME_KEY = "username";

function onLoginSubtmit(event){
    const username = loginInput.value;
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}

/////////////////// localstorage ////////////////
/*
    localStorage.setItem("key", value), 
    localStorage.getItem("key"), 
    localStorage.removeItem("key")

    // jsp session.setAttribute()랑 비슷한? 거의 똑같은 개념인듯
*/

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username){
    greeting.innerText = `Hello ${username} keep going`; // greeting.innerText = "Hello "+username;
    // `` == 백틱 == 탭위에있는 키 == 변수를 문자열로 표현해준다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubtmit);
}else {
    paintGreetings(savedUsername);
}