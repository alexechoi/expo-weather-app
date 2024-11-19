import { StyleSheet, ViewStyle } from 'react-native';
import MapView, { Marker, MapPressEvent, MarkerDragStartEndEvent } from 'react-native-maps';
import { LocationData } from '../types/weather';

interface WeatherMapProps {
  selectedCoords: LocationData;
  onLocationSelect: (latitude: number, longitude: number) => void;
  style?: ViewStyle; // Accepting dynamic styles for the map
}

export function WeatherMap({ selectedCoords, onLocationSelect, style }: WeatherMapProps) {
  const handleMapPress = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    onLocationSelect(latitude, longitude);
  };

  const handleMarkerDragEnd = (event: MarkerDragStartEndEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    onLocationSelect(latitude, longitude);
  };

  return (
    <MapView
      style={[styles.map, style]} 
      initialRegion={{
        latitude: selectedCoords.latitude,
        longitude: selectedCoords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      onPress={handleMapPress}
    >
      <Marker
        coordinate={{
          latitude: selectedCoords.latitude,
          longitude: selectedCoords.longitude,
        }}
        draggable
        onDragEnd={handleMarkerDragEnd}
        title={selectedCoords.name}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});