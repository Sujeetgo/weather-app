const API_KEY ="f34ae4de41e41de71f75a9bd7138100a";
const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

const getWeatherData = async(cityName) =>{

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);

        if(!response.ok){
            throw new Error("Network response was not ok!");
        }
        const data = await response.json();
        // console.log(data);

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}`,
            `Wind Speed: ${data.wind.speed}`,
        ];

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather-icon">
        `;

        weatherDataEl.querySelector(".temperatur").innerHTML = `${temperature}°C</div>
        `;

        weatherDataEl.querySelector(".description").innerHTML =`${description}`;

        weatherDataEl.querySelector(".details").innerHTML = details.map((detail)=>`  <div>${detail}</div>`).join("");






        
    } catch (error) {
        console.log(error);
        
    }
   
}
formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});

