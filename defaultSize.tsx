import { Dimensions, Platform } from 'react-native';

export const basicDimensionsIos = {
  height: 667,
  width: 375,
};

export const basicDimensionsAndroid = {
  height: 640,
  width: 360,
};

export const height: any = (
  Platform.OS === 'android'
    ? Dimensions.get('window').height * (1 / basicDimensionsAndroid.height)
    : Dimensions.get('window').height * (1 / basicDimensionsIos.height)
).toFixed(2);

export const width: any = (
  Platform.OS === 'android'
    ? Dimensions.get('window').width * (1 / basicDimensionsAndroid.width)
    : Dimensions.get('window').width * (1 / basicDimensionsIos.width)
).toFixed(2);