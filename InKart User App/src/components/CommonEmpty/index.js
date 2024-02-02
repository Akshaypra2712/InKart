/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text, Image ,TouchableOpacity} from 'react-native';
import style from './style'
import { useDimensionContext } from "../../context";


const CommonEmpty = props => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
    return (
        <View style={responsiveStyle.container}>
            <Text style={responsiveStyle.title}>{props.title}</Text>

        </View>


    )

};

export default CommonEmpty;