const bgImage = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const imgs = document.createElement("img");

imgs.src = `imgs/${bgImage[Math.floor(Math.random() * bgImage.length)]}`

document.body.appendChild(imgs);