/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import {View, Text, ScrollView,Image} from 'react-native';
import style from './style'
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import colors from "../../components/common/colors";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import Snackbar from "react-native-snackbar";
import { validateOtp, validatePhone } from "./controller";
import { useDimensionContext } from "../../context";


const LoginPhone = () => {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(null);
    const [showOtp, setShowOtpField] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const dimensions = useDimensionContext();
    const responsiveStyle = style(
        dimensions.windowWidth,
        dimensions.windowHeight);



    const handleButtonPress = async () => {
        try{
            setError(null);
            if(validatePhone(phone.trim())){
            const confirmation = await auth().signInWithPhoneNumber(phone);
            if(confirmation){
                Snackbar.show({
                    text: 'This email is already existing in our system',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: colors.white,
                    textColor:colors.red
                  });
                setConfirm(confirmation);
                 setShowOtpField(true);
            }
            } else {
                setError('Given number is incorrect');
            }            
        } catch(error) {
            setError('Given phone number is incorrect')
        }
        
        };
    const navigation = useNavigation();

    const handleGotoLogin = () => {
        navigation.navigate('Login')
    };
    const handleVerifyOtp = async () => {
        if(otp.trim() !== '' && validateOtp(otp.trim())){
          const res = await confirm.confirm(otp.trim());
          if(res){
            Snackbar.show({
                text: 'Your phone number is verified , Login successfull',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.white,
                textColor:colors.red,
              });
              navigation.navigate('Home ');
          }
        }else{
            setError('Entered otp is not valid');
        }
    }
    return(
        <View>
            <Image 
            source={require('../../assets/images/in.jpg')} style={responsiveStyle.topBg} />
            <ScrollView style={responsiveStyle.ScrollView} showsVerticalScrollIndicator={false}>
            <Image 
            source={require('../../assets/images/inm.jpg')} style={responsiveStyle.logo} />
            <Text style={responsiveStyle.loginText}>Login with Phone</Text>
            {error !== null?
            <Text style={responsiveStyle.errorText}>{error}</Text> :null}
             <CustomTextInput type='phone'  handleText={text => setPhone(text)} placeholder="Phone Number"/>
            {showOtp ? (
                 <CustomTextInput type='phone'  handleText={text => setOtp(text)} placeholder="Enter Otp"/>

            ): null}
            <CustomButton type='primary' handleButtonPress={showOtp ? handleVerifyOtp : handleButtonPress} buttonText={showOtp ? 'Verify OTP' : 'Sign Up with Phone'}/>
            <Text style={responsiveStyle.createNew} onPress={handleGotoLogin} > Go to Login</Text>
        
</ScrollView>
        </View>
    )
};

export default LoginPhone;