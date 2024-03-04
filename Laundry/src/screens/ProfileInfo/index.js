import React, { useLayoutEffect } from 'react';
import { View,Text,TouchableOpacity,Image } from 'react-native';
import colors from '../../common/colors';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const ProfileInfo = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Profile',
          headerTitleStyle: {
            fontFamily: 'Lato-Bold',
            fontSize: 22,
            color: colors.black,
          }, 
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
        <Text style={{fontFamily:'Lato-Regular', fontSize:18,color:colors.primaryGreen}}>Edit</Text>
            </TouchableOpacity>
        ),
          
        });
      }, [navigation]);
   

    return (
        
        <View style={{flex:1,backgroundColor:colors.white,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../../assets/images/profile.png')} style={{width:50,height:50,overflow:'hidden'}}/>
            <Text style={{
            fontFamily:'Lato-Bold',
            fontSize:25,
            color:colors.black,
            textAlign:'center',
            padding:10
        }}>Philips Mathew</Text> 
        <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:20,
            color:colors.black,
            textAlign:'center',
            padding:10
        }}>483-930-7078</Text> 
         <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:20,
            color:colors.black,
            textAlign:'center',
            padding:10
        }}>81-will pines Apt 604,Egmore,Erod</Text>  
        <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:20,
            color:colors.black,
            textAlign:'center',
            padding:10
        }}>Saint Helena</Text>  
        </View>
     
    )

}

export default ProfileInfo;