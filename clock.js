const clock = document.querySelector("#clock");
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); // date객체는 숫자기 때문에 String으로 변환해줘야 padStart가 적용된다.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
getClock();
setInterval(getClock, 1000);


/* "1".padStart(2, "0") == padding을 문자열 앞쪽에 추가한다. 
문자열은 반드시 2개가 되어야하고 2보다 작을경우 문자열 앞에(padStart) "0"을 추가한다.!!!!!
*/