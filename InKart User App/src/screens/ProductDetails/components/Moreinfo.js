/* eslint-disable prettier/prettier */
import React from "react";
import { useDimensionContext } from "../../../context";
import {  Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from "./style";
import colors from "../../../components/common/colors";


const Moreinfo = props => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
    return (
        <View style={responsiveStyle.outerView}>
                <View style={responsiveStyle.innerView}>
                    <Text style={responsiveStyle.starText,[{color:colors.black_level_3}]}>500g/₹24.00</Text>
                    <AntDesign name="down" size={25} color={colors.grey} />

                </View>
                <View style={responsiveStyle.innerView}>
                    <Text style={responsiveStyle.starText,[{color:colors.black_level_3}]}>Delivery Time</Text>
                    <AntDesign name="down" size={25} color={colors.grey} />

                </View>
              </View>

    )
}


export default Moreinfo;