import React, { useCallback, useEffect, useLayoutEffect,useState } from 'react'
import { Text, View,TouchableOpacity,Image, FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import colors from '../../common/colors';


const Profile= () => {

    const navigation = useNavigation();

      const handleView = () => {
        navigation.navigate('ProfileInfo');
      }

  
    
 
    return (
      <View style={{flex:1,backgroundColor:colors.white,padding:10}}>
        <View style={{padding:10,flexDirection: 'row', alignItems: 'flex-start',backgroundColor:colors.white_level_2}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image 
  source={require('../../assets/images/profile.png')} 
  style={{ width: 50, height: 50, borderRadius: 20, marginLeft: 10,margin:5 }} 
/>
        <Text style={{
                fontFamily:'Lato-Bold',
                fontSize:20,
                color:colors.black,
                textAlign:'center'        
          }}>Philips Mathew</Text>
           </View>

           <TouchableOpacity onPress={handleView}>       
          <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:16,
                color:colors.primaryGreen,
                marginTop:45,
                marginHorizontal:-135
             
                
          }}>View Profile</Text>
          </TouchableOpacity>
            
          </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1}}>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:18,
                color:colors.black,
                
            }}>Phone Number</Text>
             <Text style={{ fontFamily: 'Lato-Regular', fontSize: 18, color: colors.black }}>
    483-930-7078
  </Text>
        </View>

        <TouchableOpacity 
        onPress={() => navigation.navigate('ProAddress')}
        style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1}}>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:18,
                color:colors.black,
            }}>Address</Text>
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.primaryGreen }}>
            81, Will Pines Apt 604,Egmore,Erod
  </Text>
        </TouchableOpacity>

        <TouchableOpacity 
         onPress={() => navigation.navigate('Payment')}
        style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1}}>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:18,
                color:colors.black,
            }}>Payments</Text>
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.primaryGreen }}>
            Axis Credit Card
  </Text>
        </TouchableOpacity>

        <TouchableOpacity 
         onPress={() => navigation.navigate('Notification')}
        style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1}}>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:18,
                color:colors.black,
            }}>Notification</Text>
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.primaryGreen }}>
            Notify by Process
  </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1}}>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:18,
                color:colors.black,
            }}>Support</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1}}>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:18,
                color:colors.black,
            }}>Share</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1}}>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:18,
                color:colors.black,
            }}>Terms and conditions</Text>
        </View>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
        style={{padding:15}}>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:18,
                color:colors.red,
                
            }}>Signout</Text>
        </TouchableOpacity>

       
        
    </View>
    )

};

export default Profile;