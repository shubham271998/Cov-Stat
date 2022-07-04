import {Alert} from 'react-native';
import GetLocation from 'react-native-get-location';

const useFetchLocation = () => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      const {latitude, longitude} = location;
      Alert.alert(
        JSON.stringify(`latitude: ${latitude} longitude: ${longitude}`),
      );
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
    });
};

export default useFetchLocation;
