const player = {
    name:"nico",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name) // == console.log(player["name"]);

console.log(player["name"]);

player.fat = false; // const 객체 내부의 값을 바꾸는것은 전혀 문제가 없이 동작한다.
// player = false; == 얘는 객체 자체를 변경하는 것이기 때문에 오류가 발생한다.

console.log(player);

player.lastName = "potato"; // obj에 값을 추가한다.
player.points = player.points + 15;
console.log(player);
