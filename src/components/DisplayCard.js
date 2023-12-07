import React from 'react'
import {
    TouchableOpacity,
    Text,
} from 'react-native'
import { globalStyles } from '../styles/globalStyles'

const DisplayCard = ({label, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={globalStyles.cardContainer}>
        <Text style={globalStyles.cardText}>{label}</Text>
    </TouchableOpacity>
  )
}


export default DisplayCard