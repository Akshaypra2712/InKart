import React, {useState} from 'react';
import { View,Text, Alert,Image, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/CustomButton';
import colors from '../../common/colors';
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation, useRoute } from '@react-navigation/native';
import firebase from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';



const Location = () => {  
    const route = useRoute();
  const selectedAddress = route.params?.selectedAddress;
    const [address, setAddress] = useState(selectedAddress);
    const navigation = useNavigation();

    const handleTextChange = (text) => {
        setAddress(text);
      };

    return (
        
        <View style={{flex:1,backgroundColor:colors.white}}>
          
             <View style={{padding:15}}>
             <Text style={{
                fontFamily:'Lato-Black',
                fontSize:35 ,
                color:colors.black,
                margin:10
            }}>Update your resident and Continue..</Text>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:16,
                color:colors.black
            }}>There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form, by injected humour.</Text>
                
                 <CustomTextInput  type='primary' placeholder="Address" multiline={true} handleText={handleTextChange}/>

                <TouchableOpacity
                onPress={() => navigation.navigate('Map')} 
                >
                <Text style={{
                    fontFamily:'Lato-Regular',
                    fontSize:16,
                    color:colors.primaryGreen,
                    textAlign:'right',
                    paddingRight:8
                }}>Select place by map</Text>
                </TouchableOpacity>

                <CustomButton title="Continue"             
                style={{alignSelf:'center',width:'30%',backgroundColor:colors.secondaryGreen,marginTop: 80,title: { color: colors.primaryGreen,fontFamily:'Lato-Bold',fontSize:20 } }} />

                    <View style={{marginVertical:200,alignItems:'center'}}>

                    <Text style={{
                    fontFamily:'Lato-Regular',
                    fontSize:16,
                    color:colors.primaryGreen,
                    
                    paddingRight:8
                }}>Terms and Conditions</Text>
                </View>

             </View>   
               
            
            
        </View>
     
    )

}

export default Location;