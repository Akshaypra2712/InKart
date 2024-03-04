import React, { useState } from 'react'
import { Text, View,TouchableOpacity,Image, FlatList } from 'react-native'
import colors from '../../common/colors';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const Confirmation= () => {

    const navigation = useNavigation();
   
    return (
      <View style={{flex:1,backgroundColor:colors.white,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../../assets/images/tik.png')} style={{width:50,height:50,overflow:'hidden'}}/>
        <Text style={{
            fontFamily:'Lato-Bold',
            fontSize:25,
            color:colors.black,
            textAlign:'center',
            padding:10
        }}>Booking Confirmed</Text>  
         <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:16,
            color:colors.black,
            textAlign:'center',
            padding:10
        }}>There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected humour.</Text>

        <CustomButton title="Close"
                onPress={() => navigation.navigate('MainPage')}
                 style={{textAlign:'center',justifyContent:'center',alignSelf:'center',width:75,backgroundColor:colors.white,marginTop: 30,title: { color: colors.red,fontFamily:'Lato-Bold',fontSize:20 } }} />    
        
    </View>
    )

};

export default Confirmation;