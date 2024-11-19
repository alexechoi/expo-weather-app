import { useState } from 'react';
import { WeatherData, LocationData } from '../types/weather';
import { weatherService } from '../services/weatherService';

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const fetchWeather = async (location: LocationData) => {
    try {
      const weatherData = await weatherService.getLocationWeather(location);
      setWeather(weatherData);
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to fetch weather data');
    }
  };

  return { weather, fetchWeather };
};