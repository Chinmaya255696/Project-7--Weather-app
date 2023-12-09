function getWeather() {
    const apiKey = '124e4098c8e3814189381cbfec8bc7a7'; // Replace with your API key
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfoElement = document.getElementById('weatherInfo');
    const weatherIconElement = document.getElementById('weatherIcon');

    // Check if the city input is not empty
    if (cityInput.trim() !== '') {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

        // Fetch weather data from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display weather information
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const cityName = data.name;
                const iconCode = data.weather[0].icon;

                const weatherInfo = `<p>Weather in ${cityName}: ${weatherDescription}</p><p>Temperature: ${temperature}°C</p>`;
                weatherInfoElement.innerHTML = weatherInfo;

                // Display weather icon
                const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
                const iconHtml = `<img src="${iconUrl}" alt="Weather Icon">`;
                weatherIconElement.innerHTML = iconHtml;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfoElement.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
                weatherIconElement.innerHTML = '';
            });
    } else {
        weatherInfoElement.innerHTML = '<p>Please enter a city name.</p>';
        weatherIconElement.innerHTML = '';
    }
}
