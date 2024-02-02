import React from "react";
import {View, Text, TouchableOpacity,} from 'react-native';
import style from './style';
import { useDimensionContext } from "../../context";


const CommonButton = props => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    return (
        <TouchableOpacity 
        onPress={props.onButtonPress}
        style={responsiveStyle.container}>
            <Text style={responsiveStyle.text}> {props.buttonText}</Text>
        </TouchableOpacity>


    );


};

export default CommonButton;