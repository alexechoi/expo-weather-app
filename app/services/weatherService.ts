import { WeatherData } from '../types/weather';

const BASE_URL = 'https://api.open-meteo.com/v1';

export const weatherService = {
  async getCurrentWeather(latitude: number, longitude: number): Promise<WeatherData> {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const data = await response.json();

      if (data && data.current_weather) {
        return {
          current: {
            temperature_2m: data.current_weather.temperature,
            wind_speed_10m: data.current_weather.windspeed,
            time: data.current_weather.time,
          },
        };
      }
      throw new Error('Weather data is unavailable for the selected location.');
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  },

  async getLocationWeather(location: { latitude: number; longitude: number }) {
    return this.getCurrentWeather(location.latitude, location.longitude);
  },
};