import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const PrimaryButton = props => (
  <TouchableOpacity onPress={props.onPress} style={globalStyles.btnBg}>
    <Text style={globalStyles.medium}>{props.title}</Text>
  </TouchableOpacity>
);

export default PrimaryButton;
