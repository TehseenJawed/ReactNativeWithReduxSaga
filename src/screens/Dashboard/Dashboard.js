import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import DisplayCard from '../../components/DisplayCard'

const Dashboard = ({navigation}) => {
    console.log('Navigation ... ',navigation);
  return (
    <View style={{...globalStyles.rootContainer, ...styles.dashboardContainer}}>
        <DisplayCard handlePress={() => navigation.navigate('home')} label={'Product Catalogue Fashion'}/>
        <DisplayCard label={'Product Catalogue Standard'}/>
        <DisplayCard label={'Product Detail Page | Config'}/>
        <DisplayCard label={'Product Detail Page | Simple'}/>
        <DisplayCard label={'Cart Page'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        backgroundColor:'#B7D635',
        justifyContent:'center',
    }
})

export default Dashboard