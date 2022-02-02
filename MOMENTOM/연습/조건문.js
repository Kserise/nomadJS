const age = parseInt(prompt("How old are you?")); // 요새안씀; 얘는 사용자가 답하기전까지 자바스크립트 코드 실행을 멈춘다.



console.log(age); // 변수의 데이터형을 볼때 typeof 변수명 == typeof(변수명);

console.log(isNaN(age)); // 숫자면 false, 문자면 true;

if(isNaN(age)){
    console.log("please write a number");
}else if(age < 18){
    console.log("you are too young.");
}else if(age >= 18 && age <= 50){
    console.log("you can drink");
}else{
    console.log("you can drink");
}