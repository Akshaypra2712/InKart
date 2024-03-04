
/* eslint-disable prettier/prettier */
import React from "react";
import { Image ,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";


const CommonHeaderLeft = props => {

    const navigation = useNavigation();
   
    

    const handleClick = () => {
        if (props.type === 'back'){
            if (props.action){
                props.action();
            } else{
                navigation.goBack();
                        }

        } else {
            navigation.toggleDrawer();
        }
    }
 
    
    return(
        <TouchableOpacity style={{paddingLeft:15}}  onPress={handleClick}>
        <Image source={props.type === 'back' ? require('../../assets/images/arrow-left.png') : require('../../assets/images/home.png')} 
        style={{
             width:30,
             height:30,
             resizeMode:'contain'
        }}/>

        
        </TouchableOpacity> 
    )
};

export default CommonHeaderLeft;


