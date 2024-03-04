/* eslint-disable prettier/prettier */
import React, {  useEffect } from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { useDimensionContext } from "../context";
import style from "./style";
import colors from "../../common/colors";



const CustomFooter = ({state, descriptors,navigation}) => {
    const dimensions = useDimensionContext();
    
     
    return(
        <View style={{
            height:80,
            flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:colors.primaryGreen,
        marginVertical:3,
        padding:5,
        overflow:'hidden'}} >

            {state.routes.map((route, index)=> {
                const isFocused = state.index === index;
                const icon = route.name == 'MainPage' ? require('../../assets/images/new.png') : 
                route.name === 'Washing' ? require('../../assets/images/washing.png') :
                route.name === 'Timer' ? require('../../assets/images/timer.png') :
                route.name === 'Profile' ? require('../../assets/images/dots.png') :
                require('../../assets/images/view.png');
                return (
                    <TouchableOpacity  key={index}
                    onPress={() => navigation.navigate(route.name)}
                     style={{justifyContent:'center',
                     alignItems:'center',
                     }}>
                         
                         
                    <Image source={icon} style={{ width:"70%",
        height:50 ,
        resizeMode:'contain'
        }}/>
                    <Text style={{ color:colors.white,
        fontSize:16,
        fontFamily:'Lato-Bold',
        marginTop: 5 ,}}>{route.name}</Text>
                   
                </TouchableOpacity>
                )
            })}
            
        </View>
    )
};

export default CustomFooter;