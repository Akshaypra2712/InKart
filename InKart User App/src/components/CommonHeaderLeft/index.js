
/* eslint-disable prettier/prettier */
import React from "react";
import { Image ,TouchableOpacity} from 'react-native';
import style from './style'
import { useDimensionContext } from "../../context";
import { useNavigation } from "@react-navigation/native";


const CommonHeaderLeft = props => {

    const navigation = useNavigation();
   
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

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
        <TouchableOpacity style={responsiveStyle.padding}  onPress={handleClick}>
        <Image source={props.type === 'back' ? require('../../assets/images/arrow-left.png') : require('../../assets/images/sidebar.png')} style={responsiveStyle.image}/>

        
        </TouchableOpacity> 
    )
};

export default CommonHeaderLeft;


