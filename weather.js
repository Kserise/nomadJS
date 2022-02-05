const API_KEY = "40834007e5eac03bff511c0795a07fe1"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in ",lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url) // fetch는 promiss이기때문에 then, catch문을 사용해야한다.
        .then(response => response.json())
        .then((data) => {
            const name = document.querySelector("#weather span:first-child")
            const weather = document.querySelector("#weather span:last-child")
            name.innerText = `${data.name} / ${data.main.temp}`;
            weather.innerText = data.weather[0].main;
            console.log(name, weather);
    }); // 검사창의 network탭을 보면 js가 대신 url을 호출했다는 사실을 알수있다.
}
function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //https://openweathermap.org/api
