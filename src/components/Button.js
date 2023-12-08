import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({buttonStyle, textStyle, title}) => {
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
