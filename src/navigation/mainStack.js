import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';

const Main = createNativeStackNavigator();

const MainStack = () => {
  console.log('MAIN STACK IS WORKING......');
  return (
    <Main.Navigator
      initialRouteName="login"
      headerMode="none"
      options={{
        animationEnabled: false,
      }}>
      <Main.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
    </Main.Navigator>
  );
};

export default MainStack;
