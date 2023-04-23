      const API_KEY = "06362abbf757402ffae9686038facb28";
      const form = document.querySelector("form");
      const weatherContainer = document.querySelector("#weather");
      const getWeatherButton = document.querySelector("#getWeather");

      form.addEventListener("submit", event => {
        event.preventDefault();
        const city = document.querySelector("#city").value;
        getWeather(city);
      });

      getWeatherButton.addEventListener("click", event => {
        event.preventDefault();
        const city = document.querySelector("#city").value;
        getWeather(city);
      });

      function getWeather(city) {
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(URL)
          .then(response => response.json())
          .then(data => {
            const { name, main, weather } = data;
            const [description] = weather;
            const { temp, humidity } = main;
            weatherContainer.innerHTML = `
              <p>City: ${name}</p>
              <p>Temperature: ${temp} &#8451;</p>
              <p>Humidity: ${humidity}%</p>
              <p>Description: ${description.main} - ${description.description}</p>
            `;
          })
          .catch(error => {
            console.error(error);
            weatherContainer.innerHTML = "<p>Failed to retrieve weather information.</p>";
          });
      }