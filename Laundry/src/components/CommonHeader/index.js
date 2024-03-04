/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text, Image ,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import colors from "../../common/colors";


const CommonHeader = props => {
    const {title,image,style} = props;
    const navigation = useNavigation();
    

    
    return (
        <View style={{
            flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 20,
        height: 50,
        backgroundColor:colors.white_level_1,
        paddingHorizontal:5,
        }}>
            
            <Text style={{textAlign:'left', fontFamily:'Lato-Bold',fontSize:30,color:colors.black}}>{title}</Text>
            
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../../assets/images/bell.png')} style={{width: 50,
        height:30,
        resizeMode:'contain',}}/>
            </TouchableOpacity>

            
        </View>
    )
};

export default CommonHeader;