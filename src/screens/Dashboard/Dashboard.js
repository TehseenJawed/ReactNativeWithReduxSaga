import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import DisplayCard from '../../components/DisplayCard';

const Dashboard = ({navigation}) => {
  return (
    <View style={{...globalStyles.rootContainer, ...styles.dashboardContainer}}>
      <DisplayCard
        handlePress={() => navigation.navigate('home')}
        label={'Product Catalogue Fashion'}
      />
      <DisplayCard
        handlePress={() => navigation.navigate('home')}
        label={'Product Catalogue Standard'}
      />
      <DisplayCard
        handlePress={() => navigation.navigate('home')}
        label={'Product Detail Page | Config'}
      />
      <DisplayCard
        handlePress={() => navigation.navigate('home')}
        label={'Product Detail Page | Simple'}
      />
      <DisplayCard
        handlePress={() => navigation.navigate('home')}
        label={'Cart Page'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    backgroundColor: '#B7D635',
    justifyContent: 'center',
  },
});

export default Dashboard;
