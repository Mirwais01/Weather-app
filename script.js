const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const btnSearch = document.querySelector(".btn-search");
const searchInput = document.querySelector(".search-input");
const weatherIcon = document.querySelector(".weather-icon");


function renderWeather(data){
    cityName.innerHTML = data.name.split(' ')[0];
    temp.textContent = Math.trunc(data.main.temp) + "°C";
    wind.textContent = Math.trunc(data.wind.speed) + "km/h";
    humidity.textContent = data.main.humidity + "%";

    if(data.weather[0].main === 'Clouds'){
      console.log(weatherIcon.innerHTML);
      weatherIcon.src =   "images/clouds.png" 
    }else if(data.weather[0].main === 'Rain'){
        weatherIcon.src =  "images/rain.png" 
    }else if(data.weather[0].main === 'Clear' ){
      weatherIcon.src =   "images/clear.png" 
    }else if(data.weather[0].main === 'Snow'){
      weatherIcon.src =  "images/snow.png" ;
    }else if(data.weather[0].main === 'Mist'){
      weatherIcon.src =  "images/mist.png" 
    }else if(data.weather[0].main === 'Drizzle'){
      weatherIcon.src =  "images/drizzle.png" 
    }else{
      weatherIcon.src = "images/clear.png" 
    }
}

function getWeather(city) {

  const p = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a588e74b18360bd7b2d9e18a0cd9a986&units=metric`
  );
  p.then((response) => {
    return response.json();
  })
  .then((data) => {
    renderWeather(data);
  })

  .catch((err) => console.log(err));

}


const givingUser = function(){
  const userCity = searchInput.value;
  userCity.toString();
  getWeather(userCity);
}

btnSearch.addEventListener('click', ()=>{
  givingUser();
})

searchInput.addEventListener('keydown' , (e)=>{
  if(e.key === 'Enter'){
    givingUser();
  }
})