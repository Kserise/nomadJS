const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

console.log(bgImage);

bgImage.src = `imgs/${chosenImage}`;

document.body.appendChild(bgImage); //appendChild == 자싟요소의 가장 마지막에 요소를 위치시킨다.
// prepend == 자식요소의 가장 앞쪽에(첫번째) 요소를 위치시킨다.