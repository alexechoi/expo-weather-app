export interface WeatherData {
    current: {
      temperature_2m: number;
      wind_speed_10m: number;
      time: string;
    };
  }
  
  export interface LocationData {
    latitude: number;
    longitude: number;
    name: string;
  }