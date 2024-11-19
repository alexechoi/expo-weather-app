import { View, Text, Button, StyleSheet } from 'react-native';
import { WeatherData, LocationData } from '../types/weather';

interface WeatherInfoProps {
  weather: WeatherData;
  location: LocationData;
  onManualEntry: () => void;
}

export function WeatherInfo({ weather, location, onManualEntry }: WeatherInfoProps) {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.location}>{location.name}</Text>
      <Text style={styles.temperature}>
        {weather.current.temperature_2m}°C
      </Text>
      <Text style={styles.wind}>
        Wind Speed: {weather.current.wind_speed_10m} km/h
      </Text>
      <Text style={styles.time}>
        Last Updated: {new Date(weather.current.time).toLocaleString()}
      </Text>
      <Button title="Enter Coordinates Manually" onPress={onManualEntry} />
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  location: {
    fontSize: 24,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  wind: {
    fontSize: 18,
    marginBottom: 10,
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});