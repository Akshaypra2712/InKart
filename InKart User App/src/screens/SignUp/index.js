/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";
import {View, Text, ScrollView,Image} from 'react-native';
import style from './style'
import firestore from '@react-native-firebase/firestore';
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import colors from "../../components/common/colors";
import { useNavigation } from "@react-navigation/native";
import Snackbar from "react-native-snackbar";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { validateEmail, validatePhoneNumber } from "../../components/common/validations";


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
      
GoogleSignin.configure({
    webClientId: '617047277218-r7j8prn1mldv5cpkbketkacsfgjrj5m9.apps.googleusercontent.com',
  });
    
      }, [])
    

    const handleButtonPress = async () => {
        await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialo: true});
    }; 
    const navigation = useNavigation();

    const handleGotoLogin = () => {
        navigation.goBack();
    }; 

    
const handleSignUp = async () => {
        // Destructure variables and trim them
        const trimmedUsername = username.trim();
        const trimmedEmail = email.trim();
        const trimmedMobile = mobile.trim();
        const trimmedCPassword = cpassword.trim();
        const trimmedPassword = password.trim();
      
        // Check if all fields are filled
        if (trimmedUsername && trimmedEmail && trimmedMobile && trimmedCPassword && trimmedPassword) {
          // Validate email
          if (validateEmail(trimmedEmail)) {
            // Validate phone number
            if (validatePhoneNumber(trimmedMobile)) {
              // Check if passwords match
              if (trimmedPassword === trimmedCPassword) {
                // Check if the user already exists
                const userSnapshot = await firestore().collection('9SXjc0pjMzT48cJFbp9m')
                  .where('username', '==', trimmedUsername)
                  .where('email', '==', trimmedEmail)
                  .get();
      
                if (userSnapshot.empty) {
                  // Additional email and phone number validation
                  if (validateEmail(trimmedEmail) && validatePhoneNumber(trimmedMobile)) {
                    const userData = {
                      active: true,
                      username: trimmedUsername,
                      email: trimmedEmail,
                      mobilenumber: trimmedMobile,
                      password: trimmedPassword,
                      created: String(new Date()),
                      updated: String(new Date()),
                      active:1,
                    };
      
                    // Add user data to Firestore
                    await firestore().collection('9SXjc0pjMzT48cJFbp9m').add(userData);
      
                    // Show success message and navigate to Home
                    Snackbar.show({
                      text: 'A new account is created for you',
                      duration: Snackbar.LENGTH_SHORT,
                      backgroundColor: colors.red,
                      textColor: colors.white,
                    });
                    navigation.navigate('Home');
                  } else {
                    setError('Given mobile number is not valid');
                  }
                } else {
                  // User already exists
                  Snackbar.show({
                    text: 'This email is already existing in our system',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: colors.white,
                    textColor: colors.red,
                  });
                }
              } else {
                setError('Given passwords are not matching');
              }
            } else {
              setError('Given mobile number is not valid');
            }
          } else {
            setError('Given email is not valid');
          }
        } else {
          setError('Fill up all the fields to continue');
        }
      };
      

       
    return(
        <View style={style.container}>
            <Image 
            source={require('../../assets/images/in.jpg')} style={style.topBg} />
            <ScrollView style={style.ScrollView} showsVerticalScrollIndicator={false}>
            <Image 
            source={require('../../assets/images/inm.jpg')} style={style.logo} />
            <Text style={style.loginText}>Sign Up Account</Text>
            {error !== null ? (
            <View style={style.errorView}>
                <Text style={style.errorText}>{error}</Text>
            </View>) :null}
            <CustomTextInput             
             handleText={text => setUsername(text)} 
             placeholder="Username"/>

            <CustomTextInput 
            type='email'
             handleText={text => setEmail(text)} 
             placeholder="Email Address"/>

            <CustomTextInput 
            type='phone'
             handleText={text => setMobile(text)} 
             placeholder="Mobile Number"/>

            <CustomTextInput
             type='password'
              handleText={text => setPassword(text)} 
              placeholder="Password" />

            <CustomTextInput 
            type='password' 
            handleText={text => setCpassword(text)} 
            placeholder="Confirm Password" />

            <CustomButton
             type='primary' 
             handleButtonPress={handleSignUp}
              buttonText={'Sign Up'}/>


                    
        <View style={style.dottedLineContainer}>
  <View style={style.overflow} >
  <View style={style.dashedLine}/>
  </View>
    <View style={style.textContainer} >
    <Text style={style.dashedText} >Or login with </Text>
  
</View>
</View>

<CustomButton type='secondary' handleButtonPress={handleButtonPress} 
            buttonText={'Sign in with Google'}
            icon ={require('../../assets/images/google.png')}/>

            <Text style={style.createNew} onPress={handleGotoLogin} > Go to Login</Text>

        
        
</ScrollView>
        </View>
    )
};

export default SignUp;