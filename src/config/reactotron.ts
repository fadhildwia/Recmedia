/* eslint-disable prettier/prettier */
import {NativeModules} from 'react-native';
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {scriptURL} = NativeModules.SourceCode;
const hostName = scriptURL.split('://')[1].split(':')[0];

reactotron
  .setAsyncStorageHandler!!(AsyncStorage)
  .configure({host: hostName})
  .useReactNative();

export default reactotron;
