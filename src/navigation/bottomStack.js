/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-unstable-nested-components */
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/Home';
import {View} from 'react-native';
import CartIcon from '../assets/icons/navigationIcons/cart_icon.svg';
import AccountIcon from '../assets/icons/navigationIcons/account_icon.svg';
import PromotionIcon from '../assets/icons/navigationIcons/promotion_icon.svg';
import CategoryIcon from '../assets/icons/navigationIcons/category_icon.svg';
import HomeIcon from '../assets/icons/navigationIcons/home_icon.svg';
import Layout from '../components/Layout.js';
import Home from '../screens/Home/Home';
import BottomTabHeader from '../components/BottomTabHeader.js';

const Tab = createBottomTabNavigator();
function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Auction"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      screenOptions={({route}) => ({
        header: props => <BottomTabHeader {...props} />,
        headerShown: true,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          padding: 15,
          paddingBottom: 10,
          height: 80,
          // borderTopRightRadius: 25,
          // borderTopLeftRadius: 25,
        },
        tabBarIcon: ({}) => {
          if (route.name == 'Home') {
            return <HomeIcon width={30} height={25} />;
          } else if (route.name == 'Categories') {
            return <CategoryIcon width={30} height={25} />;
          } else if (route.name == 'Promotions') {
            return <PromotionIcon width={30} height={25} />;
          } else if (route.name == 'Account') {
            return <AccountIcon width={30} height={25} />;
          } else if (route.name == 'Cart') {
            return <CartIcon width={30} height={25} />;
          }
          return <View width={25} height={25} />;
        },
      })}
      barStyle={{backgroundColor: '#040404'}}
      tabBarOptions={{
        color: 'black',
        labelStyle: {fontSize: 11},
        activeTintColor: '#B7D635',
        keyboardHidesTabBar: true,
        inactiveTintColor: '#040404',
      }}>
      <Tab.Screen
        name="Home"
        component={props => (
          <Layout {...props}>
            <Home {...props} />
          </Layout>
        )}
      />
      <Tab.Screen
        name="Categories"
        component={props => (
          <Layout {...props}>
            <Home {...props} />
          </Layout>
        )}
      />
      <Tab.Screen
        name="Promotions"
        component={props => (
          <Layout {...props}>
            <Home {...props} />
          </Layout>
        )}
      />
      <Tab.Screen
        name="Account"
        component={props => (
          <Layout {...props}>
            <Home {...props} />
          </Layout>
        )}
      />
      <Tab.Screen
        name="Cart"
        component={props => (
          <Layout {...props}>
            <Home {...props} />
          </Layout>
        )}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
