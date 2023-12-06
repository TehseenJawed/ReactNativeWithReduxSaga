import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './mainStack';

const Router = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Router;
