export const createLocation = (latitude: number, longitude: number) => ({
    latitude,
    longitude,
    name: 'Custom Location',
  });

export const parseCoordinates = (latitude: string, longitude: string) => {
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lon)) {
        throw new Error('Invalid coordinates');
    }

    return { latitude: lat, longitude: lon, name: 'Custom Location' };
    };
  
  