import { View, StyleSheet, Alert, Text } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { WeatherMap } from './components/WeatherMap';
import { WeatherInfo } from './components/WeatherInfo';
import { CoordinatesModal } from '@/app/components/CoordinatesModal';
import { WeatherData, LocationData } from './types/weather';
import { weatherService } from './services/weatherService';
import { createLocation, parseCoordinates } from '@/app/utils/locationUtils';

export default function CurrentWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<LocationData>({
    latitude: 52.52,
    longitude: 13.41,
    name: 'Berlin',
  });

  const [selectedCoords, setSelectedCoords] = useState<LocationData>({
    latitude: 52.52,
    longitude: 13.41,
    name: 'Berlin',
  });

  const [locationPermission, setLocationPermission] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [manualCoords, setManualCoords] = useState({ latitude: '', longitude: '' });

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    updateWeatherForLocation(location);
  }, [location]);

  useEffect(() => {
    setLocation(selectedCoords);
  }, [selectedCoords]);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      setLocationPermission(true);
      const currentLocation = await Location.getCurrentPositionAsync({});
      setSelectedCoords({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        name: 'Current Location',
      });
    } else {
      Alert.alert('Permission Denied', 'Location permission is required to use the map feature.');
    }
  };

  const updateWeatherForLocation = async (location: LocationData) => {
    try {
      const weatherData = await weatherService.getLocationWeather(location);
      setWeather(weatherData);
    } catch (error: unknown) {
      Alert.alert('Error', (error as Error).message);
    }
  };

  const handleMapPress = (latitude: number, longitude: number) => {
    setSelectedCoords(createLocation(latitude, longitude));
  };

  const handleManualCoordsSubmit = () => {
    try {
      const location = parseCoordinates(manualCoords.latitude, manualCoords.longitude);
      setSelectedCoords(location);
      handleMapPress(location.latitude, location.longitude);
      setIsModalVisible(false);
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
    }
  };

  if (!weather) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      {/* Map View */}
      <View style={styles.mapContainer}>
        <WeatherMap
          selectedCoords={selectedCoords}
          onLocationSelect={handleMapPress}
        />
      </View>

      {/* Weather Info */}
      <View style={styles.infoContainer}>
        <WeatherInfo
          weather={weather}
          location={location}
          onManualEntry={() => setIsModalVisible(true)}
        />
      </View>

      {/* Modal for Coordinates Input */}
      <CoordinatesModal
        visible={isModalVisible}
        coordinates={manualCoords}
        onSubmit={handleManualCoordsSubmit}
        onCancel={() => setIsModalVisible(false)}
        onCoordinateChange={(field, value) =>
          setManualCoords((prev) => ({ ...prev, [field]: value }))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  infoContainer: {
    minHeight: 150,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
