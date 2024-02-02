/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text, } from 'react-native';
import style from './style'
import { useDimensionContext } from "../../../../context";
import colors from "../../../../components/common/colors";


const OrderTotal = props => {
    const {total,charges} = props;
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    
    
    return(
        <View>
        <View style={responsiveStyle.container}>
            <View>
                <Text style={responsiveStyle.orderText}>Order Details</Text>
                <Text style={responsiveStyle.bagText}>Bag Total</Text>
                <Text style={responsiveStyle.bagText}>Bag Saving</Text>
                <Text style={responsiveStyle.bagText}>Coupon Discount</Text>
                <Text style={responsiveStyle.bagText}>Delivery</Text>
            </View>
            <View style={responsiveStyle.secondView}>
            <Text style={responsiveStyle.bagText} />
            <Text style={responsiveStyle.bagText}>₹ {parseFloat(total).toFixed(2)}</Text>
            <Text style={[responsiveStyle.bagText,{color:colors.primaryGreen}]}>₹ 0.00</Text>
            <Text style={[responsiveStyle.bagText,{color:colors.red}]}>Apply Coupon</Text>
            <Text style={responsiveStyle.bagText}>₹ {parseFloat(charges).toFixed(2)}</Text>
            </View>
           
        </View>
         <View style={responsiveStyle.lastView}>
         <Text style={responsiveStyle.orderText}>Order Details</Text>
         <Text style={responsiveStyle.orderText}>₹ {parseFloat(total + charges).toFixed(1)}</Text>
     </View>
      </View>
    );
};

export default OrderTotal;