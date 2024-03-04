import React, {useEffect,useState} from 'react';
import { View,Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import colors from '../../common/colors';
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Snackbar from "react-native-snackbar";
import { validateEmail } from '../../common/validations';




const Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const handlePress = () => {
        navigation.navigate("SignUp");
    }

    
    function onAuthStateChanged(user) {
        console.warn(user);
       }
     
     useEffect(() => {
         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
         return subscriber; 
     }, [])


     const handleLogin = async () => {
        if(email.trim() !== '' && password.trim() !== ''){
            if(validateEmail(email.trim())){
             await firestore().collection('9SXjc0pjMzT48cJFbp9m')
            .where('email', '==',email.trim().toLocaleLowerCase())
                    .get().then(async snapshot => {
                        if(snapshot.empty){
                            Snackbar.show({
                                text: 'This user is not registered with us,try create a new account',
                                duration: Snackbar.LENGTH_SHORT,
                                backgroundColor: colors.red,
                                textColor: colors.white,
                              });
                        } else {
                            snapshot.forEach(documentSnapshot => {
                                const respData =documentSnapshot.data();
                               
                                if(password.trim() === respData.password && respData?.active){
                                    Snackbar.show({
                                        text: 'Login successfull',
                                        duration: Snackbar.LENGTH_SHORT,
                                        backgroundColor: colors.primaryGreen,
                                        textColor: colors.white,
                                      });                                      
                                      navigation.navigate('Footer');
                                }else{
                                    Snackbar.show({
                                        text: 'The password you entered is wrong',
                                        duration: Snackbar.LENGTH_SHORT,
                                        backgroundColor: colors.primaryGreen,
                                        textColor: colors.white,
                                    });
                                }
                            })
                        }

                    }).catch( err => console.warn(err));
                } else{
                    Snackbar.show({
                        text: 'Enter a valid email',
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor: colors.red,
                        textColor: colors.white
                      });
                }

        } else{
            Snackbar.show({
                text: 'Fill up the fields to continue',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.red,
                textColor: colors.white
              });
        }
     }
     

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
            }}>Welcome Back!</Text>
            <Text style={{
                fontFamily:'Lato-Regular',
                fontSize:16,
                color:colors.black
            }}>There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form, by injected humour, 
                 or randomised words which don't look even slightly believable. 
                 If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                 making this the first true generator on the Internet.</Text>

                <CustomTextInput type='primary' handleText={text => setEmail(text)} placeholder="Phone Number/Email" />

                <CustomTextInput type='password'handleText={text => setPassword(text)} placeholder="Password" />

                <Text style={{
                    fontFamily:'Lato-Regular',
                    fontSize:18,
                    color:colors.black,
                    textAlign:'right',
                    paddingRight:8
                }}>Forget Password?</Text>

                <CustomButton title="Login"
                onPress={handleLogin}
                 style={{textAlign:'center',justifyContent:'center',alignSelf:'center',width:75,backgroundColor:colors.secondaryGreen,marginTop: 30,title: { color: colors.primaryGreen,fontFamily:'Lato-Bold',fontSize:20 } }} />

                <Text style={{
                    fontFamily:'Lato-Regular',
                    fontSize:18,
                    color:colors.black,
                    textAlign:'center',
                    marginTop:35, 
                                       
                }}>Need an Account?</Text>

                
            <CustomButton title="SignUp"  
            onPress={handlePress}
            style={{width:'100%',justifyContent:'center-end',alignItems:'center',marginTop:65, paddingVertical: 15,
    paddingHorizontal: 30,}} />

             </View>         
            
            
        </View>
     
    )

}

export default Login;