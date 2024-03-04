import React, {useState} from 'react';
import { View,TextInput,TouchableOpacity,Image } from 'react-native';
import { useDimensionContext } from '../context';
import style from './style';
import colors from '../../common/colors';


const CustomTextInput = props => {
    const dimensions = useDimensionContext();

    const {type,handleText,placeholder,value,multiline = false,onPressIn} = props;
    const [show, setShow] = useState(false);

    const keyboardType = type === 'email' ? 'email-address' : type === 'password'?'default' : type === 'phone' ? 'phone-pad': 'default';
    const secureTextEntry = type === 'password' ? (show? false: true) : false;
    const icon = type === 'email'? require('../../assets/images/email.png') :type === 'password'? show ? require('../../assets/images/view.png') :require('../../assets/images/hide.png'): false;

    const handlePassword= () =>{
      setShow(!show);
     
         }

  return (
    <View style={{ flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGrey,
    padding: 10,
    borderRadius:10,
    marginVertical: 10,
    borderWidth:0 ,
    borderColor: colors.grey,
    paddingRight:5
          }}>
    <TextInput  
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        keyboardType={keyboardType}
        selectionColor={colors.primaryGreen}
        type={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={handleText}
        value={value}
        multiline={multiline}
        onPressIn={onPressIn}
        style={{
          paddingVertical: 10,
          marginRight:5,
          color: colors.black_level_2,
          fontFamily: 'Lato-Regular',
          fontSize: 16,
          height: multiline ? 100 : 'default',
          width:'90%',
        }}/>

{!icon ? null :(
        <TouchableOpacity onPress={handlePassword} disabled={type !== 'password' ? true : false}>
        <Image style={{width:30,
         height:25,
         resizeMode: 'contain'}}source={icon} />
        </TouchableOpacity>
          )}
        </View>
  );
};

export default CustomTextInput;
