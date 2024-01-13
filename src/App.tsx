/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigator from './navigations';
import { ReactQueryProvider } from './utils/ReactQueryProvider';
import reactotron from './config/reactotron';

if (__DEV__) {
  reactotron.connect();
}

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ReactQueryProvider>
        <RootNavigator />
      </ReactQueryProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
