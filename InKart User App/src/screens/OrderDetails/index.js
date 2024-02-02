/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from "react";
import {View, Text, ScrollView, Modal, ActivityIndicator } from 'react-native';

import { useDimensionContext } from "../../context";
import style from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import CommonHeaderLeft from "../../components/CommonHeaderLeft";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';


import colors from "../../components/common/colors";
import CustomButton from "../../components/CustomButton";
import Snackbar from "react-native-snackbar";


const OrderDetails = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const navigation = useNavigation();
    const route = useRoute();
    const {item} = route.params;
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        
        navigation.setOptions({
            
            headerLeft: () => <CommonHeaderLeft 
            type={'back'} 
            action={() => navigation.navigate('Orders')}/>,
            title: 'Order Summary',
           
        })
      
    }, []);

    
  const reOrder = async () => {
    try 
    {
        setLoading(true);
    const smallId = Math.random();
    await firestore()
      .collection('Orders')
      .add({
        orderId: String(smallId).slice(4, 12).toUpperCase(),
        created: Date.now(),
        updated: Date.now(),
        orderStatus: 'Ordered',
        totalAmount: item.totalAmount,
        address: item.address,
        userId: item.userId,
        paymentMethod: 'online',
        cartItems: item.cartItems,
        userName:item.userName,
        userEmail: item.userEmail,
        userPhone: item.mobileNumber,
        expDelDate: '',
      })
      .then( async res => {
        if(res){
        setTimeout(() => {
            Snackbar.show({
                text: 'Your Order is successfully Placed.',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: colors.primaryGreen,
                textColor: colors.white,
              });
              setLoading(false);
      
            
        }, 1000);
    }
    });

    
        
    } catch (error) {
        console.log(error);
    }
  };
    
    return (
        <View style={responsiveStyle.container}>
            <Modal animationType="fade" transparent={true} visible={loading}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={colors.white} />
        </View>
      </Modal>
           <ScrollView 
           style={responsiveStyle.scrollview}
           contentContainerStyle={responsiveStyle.contentStyle}
           showsVerticalScrollIndicator={false}>
            <View style={responsiveStyle.greenBox}>

            <Feather name="box" size={50} color={colors.white} />

                    <View style={responsiveStyle.greenTextBox}>
                        <Text style={{fontFamily:'Lato-Regular',fontSize:16,color:colors.white}}>Order Id: {item?.orderId ?? 'UJUYTE'}</Text>
                        <Text style={{fontFamily:'Lato-Black',fontSize:20,color:colors.white}}>{item.orderStatus ?? ''}</Text>
                    </View>
              
            </View>


                <View style={{marginVertical:20 }}>
                    <Text style={{fontFamily:'Lato-Bold',fontSize:20,color:colors.primaryGreen}}>Items: </Text>
                    {item?.cartItems &&
                    item.cartItems.map((ele,index) => {
                        return <View key={index} style={{flexDirection:'row',alignItems:'center', marginVertical:5,justifyContent:'space-between'}}>
                            <View style={{backgroundColor:colors.primaryGreen,paddingHorizontal:15,paddingVertical:10,borderRadius:10,marginRight:15}}>
                                <Text style={{color:colors.white,fontFamily:'Lato-Bold',fontSize:18}}>{ele.quantity}</Text>
                            </View>
                            <FontAwesome5 name="star-of-life" size={14} color={colors.black_level_2} />

                            <View style={{width:'60%',overflow:'hidden',marginLeft:15}}>
                                <Text style={{color:colors.black,fontFamily:'Lato-Regular',fontSize:18}}>{ele.name}</Text>
                                <Text style={{color:colors.black_level_1,fontFamily:'Lato-Light',fontSize:15}}>{ele.description}</Text>
                            </View>
                            <View style={{width:'20%'}}>
                            <Text style={{color:colors.black_level_1,fontFamily:'Lato-Bold',fontSize:18}}>₹ {ele.price}</Text>
                        </View>
                        </View>
                    })}
                </View>


                <View style={{
                    marginVertical:15
                }}>
                    <Text style={{fontFamily:'Lato-Bold',fontSize:20,color:colors.primaryGreen}}>Payment Details</Text>
                    <View style={{
                        marginVertical:15,
                        justifyContent:'space-between',
                        flexDirection:'row',
                        alignItems:'center',
                        borderBottomColor:colors.black_level_3,
                        borderBottomWidth:1,
                        paddingBottom:20}}>
                        <View>
                            <Text  style={{
                                lineHeight:25,
                                fontFamily:'Lato-Regular',
                                fontSize:16,
                                color:colors.black}}>Bag Total</Text>
                            <Text style={{
                                lineHeight:25,
                                fontFamily:'Lato-Regular',
                                fontSize:16,
                                color:colors.black}}>Coupon Discount</Text>
                            <Text style={{
                                fontFamily:'Lato-Regular',
                                fontSize:16,
                                color:colors.black}}>Delivery</Text>
                        </View>
                        <View>
                           <Text style={{
                                lineHeight:25,
                                fontFamily:'Lato-Regular',
                                fontSize:16,
                                color:colors.red}}>₹ 1235</Text>
                            <Text style={{
                                lineHeight:25,
                                fontFamily:'Lato-Regular',
                                fontSize:16,
                                color:colors.red}}>Apply Coupon </Text>
                            <Text  style={{
                                lineHeight:25,
                                fontFamily:'Lato-Regular',
                                fontSize:16,
                                color:colors.black}}>₹ 50 </Text>
                        </View>
                    </View>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontFamily:'Lato-Bold',fontSize:18,color:colors.black}}>Total Amount</Text>
                        <Text style={{fontFamily:'Lato-Bold',fontSize:18,color:colors.black}}>₹ {item.totalAmount}</Text>
                    </View>
                </View>

                <View style={{
                    marginVertical:15
                }}>
                    <Text style={{fontFamily:'Lato-Bold',fontSize:20,color:colors.primaryGreen}}> Address: </Text>
                    <Text style={{fontFamily:'Lato-Regular',fontSize:16,color:colors.black,lineHeight:20}}>Rick Nelon</Text>
                    <Text style={{fontFamily:'Lato-Regular',fontSize:16,color:colors.black,lineHeight:20}}>HLK Appartment, 678 </Text>
                    <Text style={{fontFamily:'Lato-Regular',fontSize:16,color:colors.black,lineHeight:20}}> NK08, US, 87987</Text>



                </View>

                <View style={{
                    marginVertical:15
                }}>
                    <Text style={{fontFamily:'Lato-Bold',fontSize:20,color:colors.primaryGreen}}> Payment Method: </Text>
                    <View style={{
                        marginVertical:15,
                        justifyContent:'flex-start',
                        alignItems:'center',
                        flexDirection:'row'
                    }}>
                    <FontAwesome name="cc-visa" size={30} color={colors.black} />
                    <View style={{
                        marginLeft:15
                    }}>
                        <Text style={responsiveStyle.payText}>**** **** 7876</Text>
                        <Text style={{fontFamily:'Lato-Regular',fontSize:16,color:colors.black}}>{item?.payementMethod ?? ''}</Text>
                    </View>

                    </View>
                    
                </View>


           </ScrollView>
           <View style={{
            position:'absolute',
            bottom:0,
            width:"100%",
            padding:15,
            backgroundColor:colors.white
           }}>
            <CustomButton 
            type="primary"
            handleButtonPress = {reOrder}
            buttonText={"Reorder"}
                     />

           </View>
        </View>
    )
}


export default OrderDetails;