const apiKey = 'a588e74b18360bd7b2d9e18a0cd9a986';

function getCity(city){
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a588e74b18360bd7b2d9e18a0cd9a986`;
}

function getWeather(){
    const response = fetch(apiUrl);
    const data = response.json();

    console.log(data);
}