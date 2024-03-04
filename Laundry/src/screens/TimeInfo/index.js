import React, { useLayoutEffect } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import colors from '../../common/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';



const TimeInfo = () => {

    const route = useRoute();
    const dateInfo = route.params?.date;
    const addressInfo = route.params?.address;

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          title:dateInfo ,
          headerTitleStyle: {
            fontFamily: 'Lato-Bold',
            fontSize: 22,
            color: colors.black,
          }, 
                   
        });
      }, [navigation]);

    return (
        
        <View style={{flex:1,backgroundColor:colors.white,}}>
           <Text style={{
            fontFamily:'Lato-Bold',
            fontSize:25,
            color:colors.black,
            padding:10
           }}>Order Id</Text>
           <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:18,
            color:colors.black,
            padding:10
           }}>#LKJDBG2532658</Text>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between',
           padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1 }}>
           <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:18,
            color:colors.black,
            padding:10
           }}>Total</Text>
           <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:18,
            color:colors.primaryGreen,
            padding:10
           }}>800</Text>
           </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between',
        padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1 }}>
         <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:16,
            color:colors.black,
            padding:10
           }}>Cotton</Text>
            <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:16,
            color:colors.black,
            padding:10
           }}>200</Text>
           </View>

           <View style={{ 
            flexDirection: 'row', justifyContent: 'space-between',
            padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1 }}>
            <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:16,
            color:colors.black,
            padding:10
           }}>Lenin</Text>
            <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:16,
            color:colors.black,
            padding:10
           }}>200</Text>
           </View>
           
           <View style={{ flexDirection: 'row', justifyContent: 'space-between',padding:15,borderBottomColor:colors.lightGrey,borderBottomWidth: 1 }}>    
            <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:16,
            color:colors.black,
            padding:10
           }}>Polyster</Text>
            <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:16,
            color:colors.black,
            padding:10
           }}>200</Text>           
           </View>

           <Text style={{
            fontFamily:'Lato-Bold',
            fontSize:18,
            color:colors.black,
            padding:10
           }}>Status</Text>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',padding:5 }}>
  <TouchableOpacity onPress={() => {/* Handle onPress event */}}>
    <View style={{ alignItems: 'center' }}>
      <View style={{ width: 15, height: 15, borderRadius: 15, backgroundColor: colors.primaryGreen }} />
      <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: colors.black, marginTop: 5 }}>Washing</Text>
    </View>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={() => {/* Handle onPress event */}}>
    <View style={{ alignItems: 'center' }}>
      <View style={{ width: 15, height: 15, borderRadius: 15, backgroundColor: colors.primaryGreen }} />
      <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: colors.black, marginTop: 5 }}>Drying</Text>
    </View>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={() => {/* Handle onPress event */}}>
    <View style={{ alignItems: 'center' }}>
      <View style={{ width: 15, height: 15, borderRadius: 15, backgroundColor: colors.primaryGreen }} />
      <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: colors.black, marginTop: 5 }}>Ironing</Text>
    </View>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={() => {/* Handle onPress event */}}>
    <View style={{ alignItems: 'center' }}>
      <View style={{ width: 15, height: 15, borderRadius: 15, backgroundColor: colors.primaryGreen }} />
      <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: colors.black, marginTop: 5 }}>Delivered</Text>
    </View>
  </TouchableOpacity>
</View>

<Text style={{
            fontFamily:'Lato-Bold',
            fontSize:18,
            color:colors.black,
            paddingTop:15,
            padding:5
           }}>Delivered To</Text>

           
<Text style={{
            fontFamily:'Lato-Regular',
            fontSize:18,
            color:colors.black,
            paddingTop:15,
            padding:5
           }}>{addressInfo}</Text> 

           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>

<CustomButton title="Mail Invoice"               
                 style={{alignItems:'center',justifyContent:'flex-start',alignSelf:'flex-start',width:75,backgroundColor:colors.white_level_2,margin: 25,title: { color: colors.black,fontFamily:'Lato-Bold',fontSize:16 } }} />
<CustomButton title="Pay"               
                 style={{alignItems:'center',justifyContent:'flex-end',alignSelf:'flex-end',width:75,backgroundColor:colors.secondaryGreen,margin: 25,title: { color: colors.primaryGreen,fontFamily:'Lato-Bold',fontSize:16 } }} />

</View>

        </View>

     
    )

}

export default TimeInfo;