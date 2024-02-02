/* eslint-disable prettier/prettier */
import React,{useEffect, useState} from "react";
import {View, Text, Image, FlatList, TouchableOpacity, } from 'react-native';
import style from './style'
import colors from "../../components/common/colors";
import { useDimensionContext } from "../../context";
import CustomSearch from "../../components/CustomSearch";
import CommonHeaderLeft from "../../components/CommonHeaderLeft";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import { useSelector } from "react-redux";


const Orders = () => {
    const navigation = useNavigation();
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const [ordersArray,setOrdersArray] = useState();
    const userId = useSelector(state => state.userId);
    const isFocused = useIsFocused();
    
    useEffect(() => {
           if(isFocused) {
            getOrders();
           }
    }, [isFocused]);
    useEffect(() => {
        getOrders();
        navigation.setOptions({
            
            headerLeft: () => <CommonHeaderLeft/>,
           
        })      
    }, []);

    const getOrders = async () => {
        await firestore().collection('Orders').where('userId', '==', userId).get().then(snapshot => {
            if (snapshot.empty) {
                setOrdersArray([]);
            } else {
                const objArray = [];
                snapshot?.docs.forEach(document => {
                    if(document.exists){
                        const result = {id: document.id, ...document?.data()};
                        objArray.push(result);
                    }
                });
                setOrdersArray(objArray)
            }
                });
            };
                
    const handleSearch = async text => {
        await firestore()
        .collection('Orders')
        .where('userId', '==', userId)
        .orderBy('orderId')
        .startAt(String(text))
        .endAt(String(text) + '\uf8ff')
        .get().then( snapshot => {
            if (snapshot.empty){
                setOrdersArray([]);
               
            } else {
                const objArray = [];
                snapshot?.docs.forEach(document => {
                    if(document.exists){
                        const result = {id: document.id, ...document?.data()};
                        objArray.push(result);
                    }
                });
                setOrdersArray(objArray);
            }
        })
    };

    const navigateToDetails = item => {
        navigation.navigate('OrderDetails', {item: item});
    }
    return(
        <View style={responsiveStyle.container}>
            <CustomSearch filter={true} 
            placeholder={'Search using order id'} 
            mike={false} 
            onChangeText={() => handleSearch()}/> 
            <FlatList 
            data={ordersArray}
            extraData={ordersArray}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:20}}
            ListEmptyComponent={() => {
                return (
                    <View style={{padding:15,justifyContent:'center',alignItems:'center'}}>
                        <Text  style={{
                            fontFamily:'Lato-Bold',
                            fontSize:18,
                            color:colors.primaryGreen}}>No data</Text>

                          </View>
                )
            }}
            
            renderItem={({item,index}) => {
                return (
                    <TouchableOpacity onPress={() => navigateToDetails(item)}
                    style={responsiveStyle.outerview}>
                    <View style={responsiveStyle.innerview}>
        
                        <View>
                            <Text style={responsiveStyle.text}>{item.orderId}</Text>
                            <Text style={[responsiveStyle.text,{color:colors.primaryGreen,fontFamily:'Lato-Regular',fontSize:14}]}> Ordered on: {item.created}</Text>
                            <Text style={[responsiveStyle.text,{color:colors.grey,fontFamily:'Lato-Regular',fontSize:14}]}>{item.address1}</Text>
                            <Text style={[responsiveStyle.text,{color:colors.grey,fontFamily:'Lato-Regular',fontSize:14}]}>{item.address2}</Text>
                            <Text style={[responsiveStyle.text,{color:colors.grey,fontFamily:'Lato-Regular',fontSize:14}]}>Paid: <Text style={[responsiveStyle.text,{color:colors.primaryGreen,fontFamily:'Lato-Regular',fontSize:16}]}>{item.totalAmount}</Text>, Items: <Text style={[responsiveStyle.text,{color:colors.primaryGreen,fontFamily:'Lato-Regular',fontSize:16}]}>{item.cartItems.length}</Text></Text>
                        </View>
                        <Image source={require('../../assets/images/map.jpeg')} style={responsiveStyle.image} />
                    </View>
                
                    <View >
                        
                        <View style={responsiveStyle.secondsectionView}>
                            <Text style={[responsiveStyle.text,{color:colors.black_level_3,fontFamily:'Lato-Regular',fontSize:14}]}>Order Shipped</Text>
                            <Text style={[responsiveStyle.text,{color:colors.black_level_3,fontFamily:'Lato-Regular',fontSize:14}]}>Rate & Review PRoducts</Text>
                            
                        </View>
                        <View></View>
                    </View>
                    </TouchableOpacity >
                )
            }}
            keyExtractor={(item,index) => String(index)}/>

        
        </View>
    )
};

export default Orders;