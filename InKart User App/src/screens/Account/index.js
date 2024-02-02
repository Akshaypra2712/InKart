/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from "react";
import {View, Text, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import style from './style'
import colors from "../../components/common/colors";
import { useNavigation } from "@react-navigation/native";
import CommonHeaderLeft from "../../components/CommonHeaderLeft";
import { useDimensionContext } from "../../context";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import ImagePicker from 'react-native-image-crop-picker';
import Snackbar from "react-native-snackbar";
import { validateEmail, validatePhoneNumber } from "../../components/common/validations";
import { useDispatch, useSelector } from "react-redux";
import firestore from '@react-native-firebase/firestore';
import { updateProfile } from "../../storage/action";
import { updateProfileImage } from "./controller";


const Account = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const navigation =useNavigation();
    const dispatch = useDispatch();
    const {userId,firstName,lastName,email ,mobileNumber,profileImage} = useSelector(state => state);

    const [fName, setFname] = useState(firstName);
    const [lName, setLname] = useState(lastName);
    const [modal, setModal] = useState(false);
    const [modalChoose, setModalChoose] = useState(false);
    const [userImage, setuserImage] = useState('');
    const [phone, setPhone] = useState(mobileNumber);
    const [stateEmail, setEmail] = useState(email);



    
    useEffect(() => {
        navigation.setOptions({
        headerLeft: () => <CommonHeaderLeft/>,
           
    })
        
      }, []);

    const handleOpenImage = () => {
        setModal(!modal);

    };

    const handleEditImage = () => {
        setModalChoose(true);
    };

    const handlePickFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            setuserImage(image.sourceURL?? '');
            setModalChoose(false);
          }).catch(err => {
            console. warn(err);
          });
    };

    const handlePickFromCamera = () => {
        
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setModalChoose(false);
            console.log(image);
          }).catch(err => {
            console.warn(err);
          });;
    };

    const handleUpdateProfile = async  () => {
            if(validatePhoneNumber(phone.trim())){
                if(validateEmail(stateEmail .trim())){
                    if(fName.trim() !== '' && lName.trim() !== ''){
                        let newUrl = profileImage;

                        if(userImage !== ''){
                           newUrl = await updateProfileImage(userImage)
                        }

                        await firestore().collection('9SXjc0pjMzT48cJFbp9m').doc(userId).update({
                           firstName:fName,
                           lastName:lName,
                           email:stateEmail,
                           mobilenumber:phone,
                           profileimage:newUrl,
                        }).then(() => {
                            dispatch(updateProfile({
                            firstName:fName,
                           lastName:lName,
                            email:stateEmail,
                           mobilenumber:phone,
                           profileimage:newUrl  === '' ? profileImage : '',
                            }))  
                            setuserImage(''); 
                            Snackbar.show({
                                text: 'Profile is updated',
                                duration: Snackbar.LENGTH_SHORT,
                                backgroundColor: colors.primaryGreen,
                                textColor: colors.white,
                              });
                        })

                    } else {
                        Snackbar.show({
                            text: 'Fill up the all field to continue',
                            duration: Snackbar.LENGTH_SHORT,
                            backgroundColor: colors.red,
                            textColor: colors.white,
                          });
                    }

                } else {
                    Snackbar.show({
                        text: 'Given email is not valid',
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor: colors.red,
                        textColor: colors.white,
                      });
                }
                
            } else {
                Snackbar.show({
                    text: 'Given phone nuber is not valid',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: colors.red,
                    textColor: colors.white,
                  });
            }

        
        
    };

    
    
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={responsiveStyle.container}>
            <Text style={responsiveStyle.head}>{firstName} {lastName}</Text>
            <View style={responsiveStyle.userImage}>
                <TouchableOpacity onPress={handleOpenImage}>
                <Image source={userImage === '' ? profileImage === '' ?
                 require('../../assets/images/dummy.png'): 
                 {uri:profileImage } :
                 {uri: userImage} } 
                 style={responsiveStyle.image}/>
                </TouchableOpacity>

               <TouchableOpacity style= {responsiveStyle.editTouch} onPress={handleEditImage}>
                    <Image source={require('../../assets/images/edit.png')} style={responsiveStyle.edit}/>
                    </TouchableOpacity>
               
            </View>
            <CustomTextInput  
            handleText={text => setLname(text)} 
            value={fName}
            placeholder="First Name"/>

            <CustomTextInput  
            handleText={text => setFname(text)}
            value={lName} 
            placeholder="Last Name"/>

            <CustomTextInput   type='email'
            handleText={text => setEmail(text)} 
            value={stateEmail}
            placeholder="Email Address"/>

            <CustomTextInput  
            handleText={text => setPhone(text)}
            value={phone} 
            placeholder="Mobile Number"/>

            <CustomButton type='primary'
            handleButtonPress={handleUpdateProfile} 
            buttonText={'Update Profile'}/>

            <Modal visible={modal} onRequestClose={() => setModal(false)}  transparent>
             <View style={responsiveStyle.modalBack}>
                <View >
                <TouchableOpacity onPress={() => setModal(false)} style={responsiveStyle.close}>
                <Image source={require('../../assets/images/close.png')} style={responsiveStyle.edit}/>
                </TouchableOpacity>
             <Image source={profileImage === '' ? require('../../assets/images/dummy.png'):{uri: profileImage}} style={responsiveStyle.bigImage}/>

            </View>
            </View>
            </Modal>

            
            <Modal visible={modalChoose} onRequestClose={() => setModalChoose(false)}  transparent>
             <View style={responsiveStyle.modalBack}>
                
                <View style={responsiveStyle.selectBox}>  
                <TouchableOpacity onPress={() => setModalChoose(false)} style={responsiveStyle.closeChoose}>
                <Image source={require('../../assets/images/close.png')} style={responsiveStyle.edit}/>
                </TouchableOpacity>
                    <TouchableOpacity style={responsiveStyle.touch} onPress={handlePickFromGallery}>
                    <Text style={responsiveStyle.pickText}>Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={responsiveStyle.touch} onPress={handlePickFromCamera}>
                    <Text style={responsiveStyle.pickText}>Camera</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Modal>

        </ScrollView>
    )
};

export default Account;