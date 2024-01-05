import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import { theme } from '../styles';
import { HomeNavigator } from './HomeNavigator';

const RootNavigator = () => {
  const scheme = 'light';

  return (
    <NavigationContainer theme={theme[scheme]}>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
