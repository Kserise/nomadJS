document.title = "hi"; // js는 html문서를 document객체로 만듦. 객체처럼 document.obj로 접근해서 값을 변경하거나 추가할수 있음
const h1 = document.querySelector(".hello:first-child h2"); // css선택자처럼 요소를 찾는다.
console.dir(h1); // 여기서 on뒤에붙은 얘들은 다 이벤트라고 볼수있다. 해당요소의 이벤트를 보고싶다면 on어쩌구를 봐라.
function handleTitleClick(){
    // const clickedClass = "clicked" // "clicked"라는 문자열보다 clickedClass라는 변수를 넣음으로써, 코드의 간략화, 변수명을 잘못쓸경우 console에서 오류를 띄우기때문에 디버깅이 쉽다. 2가지 장점!
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick); //handleTitleClick() 이런식으로 실행버튼 ( "()")를 넘겨주면 안된다. 자바스크립트가 "click" 이벤트일때 대신 실행버튼을 눌러주기 때문. 함수명만 써라