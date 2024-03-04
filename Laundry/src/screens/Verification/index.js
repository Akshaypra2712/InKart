import React, {useState} from 'react';
import { View,Text, Alert,Image,TextInput } from 'react-native';
import CustomButton from '../../components/CustomButton';
import colors from '../../common/colors';
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';



const Verification = ({ route, navigation }) => {

    const { confirmation } = route.params;
    const [otp, setOtp] = useState('');

    const handleVerifyOTP = async () => {
        try {
            await confirmation.confirm(otp);
            // OTP verified successfully
            // You can now navigate the user to the main app screen or perform any other actions
            navigation.navigate('Location');
        } catch (error) {
            console.error('Error verifying OTP:', error);
            Alert.alert('Error', 'Failed to verify OTP. Please try again.');
        }
    };  



    return (
        
        <View style={{flex:1,backgroundColor:colors.white}}>
            <View style={{ alignItems: 'flex-start', position: 'absolute', top: 30, borderRadius: 10, paddingHorizontal: 20,padding:5 }}>
            <CustomButton title="Laundry.io"  />
             </View>
             <View style={{marginTop:120}}>
             <Text style={{
                fontFamily:'Lato-Black',
                fontSize:35 ,
                color:colors.black,
                margin:10
            }}>Verification..</Text>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:16,
                color:colors.black
            }}>There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form, by injected humour, 
                 or randomised words which don't look even slightly believable.</Text>
                 <Image source={require('../../assets/images/otp.png')} style={{
                        width: "50%",
                        height: '40%',
                        alignSelf:'center',                        
                        overflow: 'hidden',
                        borderRadius: 10,
                    }} />

                <CustomTextInput type='phone' placeholder="Enter otp" handleText={text => setOtp(text)} />

                   

                <Text style={{
                    fontFamily:'Lato-Regular',
                    fontSize:18,
                    color:colors.primaryGreen,
                    textAlign:'right',
                    paddingRight:8
                }}>Resend otp?</Text>
                <CustomButton title="Verify otp" 
            onPress={handleVerifyOTP}
                style={{alignSelf:'center',width:'30%',backgroundColor:colors.secondaryGreen,marginTop: 30,title: { color: colors.primaryGreen,fontFamily:'Lato-Bold',fontSize:20 } }} />


         

             </View>         
            
            
        </View>
     
    )

}

export default Verification;