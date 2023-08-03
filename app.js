const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const apiKey = '4899a677789f75fbb6744686ec097d29'; // Replace with your actual API key

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const location = 'Moscow'; // Default location for initial testing
    const weatherData = await getWeatherData(location);
    res.render('index', { weather: weatherData });
  } catch (error) {
    res.render('index', { weather: null, error: 'Weather data not found.' });
  }
});

async function getWeatherData(location) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const response = await axios.get(apiUrl);
  const weatherData = response.data;
  return weatherData;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
