import { fetchWeatherApi } from 'openmeteo'

// Docs: https://open-meteo.com/en/docs
export async function getWeather() {
  const params = {
    latitude: 42.6975, // SOF coords
    longitude: 23.3241,
    current: ["temperature_2m", "is_day", "weather_code"],
  }

  const url = "https://api.open-meteo.com/v1/forecast";
  return (await fetchWeatherApi(url, params))[0];

}