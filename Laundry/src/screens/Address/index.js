import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { View,Text,FlatList,ScrollView,TouchableOpacity} from 'react-native';
import colors from '../../common/colors';
import CustomButton from '../../components/CustomButton';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import AntDesign from 'react-native-vector-icons/AntDesign'; 




const Address = () => {
    const route = useRoute();
    const [fromValue, setFromValue ]= useState('');
    const [selectedAddresses, setSelectedAddresses] = useState([]);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Saved Address',
          headerTitleStyle: {
            fontFamily: 'Lato-Bold',
            fontSize: 22,
            color: colors.black,
          }, 
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Confirmation')}>
         <AntDesign name="arrowleft" size={20} color={colors.black} style={{ padding: 15 }} />
            </TouchableOpacity>
        ),
          
        });
      }, [navigation]);

      
    useLayoutEffect(() => {
      getItems();
    }, [])

    const getItems = async () => {
      await firestore().collection('Washing').get().then(( snapshot) => {
          if(!snapshot.empty){
              const result =[];
              snapshot.docs.forEach(doc => {
                  if (doc.exists){
                      
                      result.push(doc.data());
                  }
              });
              setFromValue(result);
          }
      }).catch(err => {
          console.log(err);
      });
  };

  const toggleSelectAddress = address => {
    const index = selectedAddresses.findIndex(item => item === address);
    if (index === -1) {
        // Address is not selected, add it to the selected addresses
        setSelectedAddresses([...selectedAddresses, address]);
    } else {
        // Address is already selected, remove it from the selected addresses
        const updatedAddresses = [...selectedAddresses];
        updatedAddresses.splice(index, 1);
        setSelectedAddresses(updatedAddresses);
    }
};


    return (
        
        <View style={{flex:1,padding:5}}>
                <ScrollView style={{backgroundColor:colors.white,}} nestedScrollEnabled showsVerticalScrollIndicator={false} >

              <FlatList data={fromValue}
              keyExtractor={(item, index) => index.toString()}
            
            showsVerticalScrollIndicator={false} 
            renderItem={({ item, index }) => {
                return ( 
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>          
                  <TouchableOpacity onPress={() => toggleSelectAddress(item.address)}> 
                    <View style={{padding:10,flexDirection:'row',backgroundColor:colors.white,marginTop:10,borderBottomEndRadius:5,borderBottomColor:colors.lightGrey,borderBottomWidth: 1}}>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:16,
                color:colors.black
            }}>{item.address}</Text>
             {selectedAddresses.includes(item.address) && (
                    <Icon name="check-circle" size={20} color={colors.primaryGreen} style={{ marginLeft: 10 }} />
                                )}
            </View>
            </TouchableOpacity> 
            {selectedAddresses.includes(item.address) && (
                                <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                    <TouchableOpacity onPress={() => {}}>
                                        <Icon name="edit" size={25} color={colors.primaryGreen} style={{ marginLeft: 10 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {}}>
                                        <Icon name="delete" size={25} color={colors.red} style={{ marginLeft: 3 }} />
                                    </TouchableOpacity>
                                </View>
                            )}


           </View>
             
                );
              
            } } />            
            <CustomButton title="+ Add Address"
                onPress={() => {}}
                 style={{textAlign:'center',justifyContent:'center',alignSelf:'center',width:'45%',backgroundColor:colors.secondaryGreen,marginTop: 30,title: { color: colors.primaryGreen,fontFamily:'Lato-Bold',fontSize:20 } }} />

          </ScrollView>
        </View>
     
    )

}

export default Address;