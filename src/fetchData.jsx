function getWeatherData(city) {
  const apiKey = process.env.REACT_APP_API_KEY;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // const temp = Math.round(data.main.temp);
      // const time = new Date(data.dt * 1_000);
      // const description = data.weather[0].description;
      // const humidity = data.main.humidity;
      // const windspeed = data.wind.speed;
    })
    .catch(error => console.log(error));
}
