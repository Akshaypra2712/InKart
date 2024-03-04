import React, { useCallback, useLayoutEffect,useState } from 'react'
import { Text, View,TouchableOpacity,Image, FlatList } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import colors from '../../common/colors';
import CustomButton from '../../components/CustomButton';


const ProAddress= () => {

    const navigation = useNavigation();
    const [selectedAddress, setSelectedAddress] = useState(null);

    const addresses = [
        { id: 1,head:'Home', address: '81, Will Pines Apt 604,Egmore,Erod' },
        { id: 2,head:'Azar Apartments', address: '238 alahabadh street,sanitorium,chennai' },
        { id: 3,head:'Azar Apartments', address: '75 Dubai street,sanitorium,Dubai' },
      ];

      const handleSelectAddress = (addressId) => {
        setSelectedAddress(addressId);
      };   
    
 
    return (
      <View style={{flex:1,backgroundColor:colors.white,padding:10}}>
        <Text style={{
            fontFamily:'Lato-Bold',
            fontSize:30,
            color:colors.black,
            textAlign:'left',
            padding:10
        }}>Address</Text>   
        <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:18,
            color:colors.black,
            textAlign:'left',
        }}>choose your default pickup address</Text> 

{addresses.map((address) => (
        <TouchableOpacity
          key={address.id}
          onPress={() => handleSelectAddress(address.id)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
            margin:10
          }}
        >

          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: selectedAddress === address.id ? colors.primaryGreen : colors.lightGrey,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}
          >
            {selectedAddress === address.id && (
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: colors.primaryGreen,
                }}
              />
            )}
          </View>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 18, color: colors.black }} numberOfLines={1}>{address.address}</Text>
     
        </TouchableOpacity>
     
      ))}

      
    <CustomButton title="+ Add Address"
                onPress={() => {}}
                 style={{textAlign:'center',justifyContent:'center',alignSelf:'center',width:'45%',backgroundColor:colors.secondaryGreen,marginTop: 30,title: { color: colors.primaryGreen,fontFamily:'Lato-Bold',fontSize:20 } }} />

        
    </View>
    )

};

export default ProAddress;