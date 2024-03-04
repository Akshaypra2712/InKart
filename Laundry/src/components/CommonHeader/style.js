import { StyleSheet, } from "react-native";
import colors from '../common/colors';

const style = (width,height, isPortrait) => StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: isPortrait ? width * 0.12 : width * 0.05,
        height: isPortrait ? width * 0.175: width * 0.1,
        backgroundColor:colors.white_level_1,
        paddingHorizontal:width * 0.03,
    },
    logo: {
        width: width * 0.45,
        height:height* 0.15,
        resizeMode:'contain',
    },
    sideIcon: {
        width: width * 0.1,
        height:height * 0.1,
        resizeMode:'contain',
    }

})

export default style;