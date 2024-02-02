import React from "react";
import {  Text, View } from "react-native";
import style from "./style";
import { useDimensionContext } from "../../../context";
import CustomTextInput from "../../../components/CustomTextInput";






const DeliveryInfo = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
    return (
        <View>
            <Text style={responsiveStyle.descHeader}>Check Delivery</Text>
            <Text style={responsiveStyle.desc}>Enter Pincode to check delivery date/pickup option</Text>
            <CustomTextInput 
            type={'default'} 
            check={true}
            handleText={() => console.log('hello')}
             placeholder={"Pincode"} />
         <Text style={responsiveStyle.desc}>Free delivery on orders above 200.00 </Text>
         <Text style={responsiveStyle.desc}>Cash on delivery available</Text>
         <Text style={responsiveStyle.desc}>Easy 21 days return and exchange</Text>


        </View> 
    );
};


export default DeliveryInfo;