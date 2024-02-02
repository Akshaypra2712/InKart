import { StyleSheet, } from "react-native";
import colors from '../common/colors';

const style = (width,height) => StyleSheet.create({
    container:{
        padding:15,
        backgroundColor:colors.white
        
    },
    headView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    newText:{
        fontFamily:'Lato-Bold',
        fontSize:22,
        color:colors.black
    },
    secondText:{
        fontFamily:'Lato-Regular',
        fontSize:18,
        color:colors.black
    },
    seeall:{
        fontFamily:'Lato-Regular',
        fontSize:18,
        color:colors.black
    }


})

export default style;