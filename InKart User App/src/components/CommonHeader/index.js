/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text, Image ,TouchableOpacity} from 'react-native';
import style from './style'
import colors from "../../components/common/colors";
import { useNavigation } from "@react-navigation/native";
import { useDimensionContext } from "../../context";


const CommonHeader = () => {
    const navigation = useNavigation();
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);

    
    return (
        <View style={responsiveStyle.container}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../../assets/images/sidebar.png')} style={responsiveStyle.sideIcon}/>
            </TouchableOpacity>
            <Image source={require('../../assets/images/inm.jpg')} style={responsiveStyle.logo}/>

        </View>
    )
};

export default CommonHeader;