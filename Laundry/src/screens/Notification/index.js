import React, { useCallback, useLayoutEffect,useState } from 'react'
import { Text, View,TouchableOpacity,Image, FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import colors from '../../common/colors';


const Notification= () => {

    const navigation = useNavigation();
    const [selectedNoti, setSelectedNoti] = useState(null);

    const notifications = [
        { id: 1, data: 'Notify me on every Process' },
        { id: 2, data: 'Notify me only at the time of delivery' },
        { id: 3, data: 'All Notification' },
       
      ];

      const handleSelectNoti = (notId) => {
        setSelectedNoti(notId);
      };
    
     
 
    return (
      <View style={{flex:1,backgroundColor:colors.white,padding:10}}>
        <Text style={{
            fontFamily:'Lato-Bold',
            fontSize:30,
            color:colors.black,
            textAlign:'left',
            padding:10
        }}>Notifications</Text>   
        <Text style={{
            fontFamily:'Lato-Regular',
            fontSize:18,
            color:colors.black,
            textAlign:'left',
        }}>Select your notification preference</Text> 

{notifications.map((data) => (
        <TouchableOpacity
          key={notifications.id}
          onPress={() => handleSelectNoti(data.id)}
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
              borderColor: selectedNoti === data.id ? colors.primaryGreen : colors.lightGrey,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}
          >
            {selectedNoti === data.id && (
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
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 18, color: colors.black }}>{data.data}</Text>
        </TouchableOpacity>
      ))}  

        
    </View>
    )

};

export default Notification;