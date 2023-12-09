import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Dashboard from '../screens/Dashboard/Dashboard';
import BottomTabNavigation from './bottomStack';

const Main = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Main.Navigator
      initialRouteName="dashboard"
      headerMode="none"
      options={{
        animationEnabled: false,
      }}>
      <Main.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="home"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
    </Main.Navigator>
  );
};

export default MainStack;
