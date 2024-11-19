import React from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';

type CoordinateField = 'latitude' | 'longitude';

interface CoordinatesModalProps {
  visible: boolean;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  onSubmit: () => void;
  onCancel: () => void;
  onCoordinateChange: (field: CoordinateField, value: string) => void;
}

export const CoordinatesModal: React.FC<CoordinatesModalProps> = ({
  visible,
  coordinates,
  onSubmit,
  onCancel,
  onCoordinateChange,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="Latitude"
            value={coordinates.latitude}
            onChangeText={(value) => onCoordinateChange('latitude', value)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Longitude"
            value={coordinates.longitude}
            onChangeText={(value) => onCoordinateChange('longitude', value)}
            keyboardType="numeric"
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onCancel} />
            <Button title="Submit" onPress={onSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});