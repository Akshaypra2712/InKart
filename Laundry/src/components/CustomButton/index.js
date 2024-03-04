import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import colors from '../../common/colors';
import styles from './style';

const CustomButton = props => {
  const {title, onPress, style} = props;
  
  const textStyle = [
    styles.buttonText,
    style && style.title, // Apply additional title styles from prop
  ];
  return (
    <TouchableOpacity style={[{ color: colors.white,backgroundColor: colors.primaryGreen, padding: 10, borderRadius: 5 }, style]} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
