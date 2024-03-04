import React, {useState} from 'react';
import { View,Text, Alert } from 'react-native';
import CustomButton from '../../components/CustomButton';
import colors from '../../common/colors';
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';



const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');




    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate("Login");
    }

    const handleSendOTP = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            console.log('Confirmation:', confirmation);
            navigation.navigate('Verification', { confirmation });
            // Navigate to OTP verification screen
            // You can handle navigation as per your app's navigation setup
            // Pass `confirmation` object to the OTP verification screen to confirm OTP
            // For example: navigation.navigate('Verification', { confirmation });
        } catch (error) {
            console.error('Error sending OTP:', error);
            Alert.alert('Error', 'Failed to send OTP. Please try again.');
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
            }}>SignUp..</Text>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:16,
                color:colors.black
            }}>There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form, by injected humour, 
                 or randomised words which don't look even slightly believable.</Text>

                <CustomTextInput type='primary' placeholder="Name" handleText={text => setName(text)}/>

                <CustomTextInput type='phone' placeholder="Phone Number" handleText={text => setPhoneNumber(text)} />
                <CustomTextInput type='email' placeholder="Email" handleText={text => setEmail(text)}/>

                <Text style={{
                    fontFamily:'Lato-Regular',
                    fontSize:18,
                    color:colors.black,
                    textAlign:'right',
                    paddingRight:8
                }}>Forget Password?</Text>
                <CustomButton title="Signup" 
                onPress={handleSendOTP}
                style={{textAlign:'center',justifyContent:'center',alignSelf:'center',width:85,backgroundColor:colors.secondaryGreen,marginTop: 30,title: { color: colors.primaryGreen,fontFamily:'Lato-Bold',fontSize:20 } }} />

                <Text style={{
                    fontFamily:'Lato-Regular',
                    fontSize:18,
                    color:colors.black,
                    textAlign:'center',
                    marginTop:35, 
                                       
                }}>Already have an Account?</Text>

                
            <CustomButton title="Login"  
                onPress={handlePress}
            style={{width:'100%',justifyContent:'center-end',alignItems:'center',marginTop:70, paddingVertical: 15,
    paddingHorizontal: 50,}} />

             </View>         
            
            
        </View>
     
    )

}

export default SignUp;