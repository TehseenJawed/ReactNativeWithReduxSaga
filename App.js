/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './src/navigation/router';
import { globalStyles } from './src/styles/globalStyles';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const persisitor = persistStore(store)
function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <PersistGate persistor={persisitor}>
          <View style={globalStyles.rootContainer}>
            <Router />
          </View>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
