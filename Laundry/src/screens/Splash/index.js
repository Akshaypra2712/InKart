import React from 'react';
import { View } from 'react-native';
import colors from '../../common/colors';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const Splash = () => {
const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate("Home");
    }

    return (
        
        <View style={{flex:1,backgroundColor:colors.white,alignItems:'center',justifyContent:'center'}}>
            <CustomButton title="Laundry.io" onPress={handlePress} />
        </View>
     
    )

}

export default Splash;