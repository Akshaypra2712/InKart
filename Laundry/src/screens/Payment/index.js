import React, { useState } from 'react'
import { Text, View,TouchableOpacity,Image, FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import colors from '../../common/colors';
import CustomButton from '../../components/CustomButton';


const Payment= () => {

    const navigation = useNavigation();
    const [selectedCards, setSelectedCards] = useState(null);

    const cards = [
        { id: 1, card: 'Axix bank Credit Card' },
        { id: 2, card: 'Indian bank Master Card' },
       
      ];

      const handleSelectCard = (payId) => {
        setSelectedCards(payId);
      };
    
     
 
    return (
      <View style={{flex:1,backgroundColor:colors.white,padding:10}}>
        <Text style={{
            fontFamily:'Lato-Bold',
            fontSize:30,
            color:colors.black,
            textAlign:'left',
            padding:10
        }}>Saved Cards</Text>   
        <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:18,
            color:colors.black,
            textAlign:'left',
        }}>choose your default payment cards</Text> 

{cards.map((card) => (
        <TouchableOpacity
          key={cards.id}
          onPress={() => handleSelectCard(card.id)}
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
              borderColor: selectedCards === card.id ? colors.primaryGreen : colors.lightGrey,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}
          >
            {selectedCards === card.id && (
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
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 18, color: colors.black }}>{card.card}</Text>
        </TouchableOpacity>
      ))}

      
    <CustomButton title="+ Add New Card"
                onPress={() => {}}
                 style={{textAlign:'center',justifyContent:'center',alignSelf:'center',width:'45%',backgroundColor:colors.secondaryGreen,marginTop: 30,title: { color: colors.primaryGreen,fontFamily:'Lato-Bold',fontSize:20 } }} />

        
    </View>
    )

};

export default Payment;