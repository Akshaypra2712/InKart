import { StyleSheet, } from "react-native";
import colors from '../../../../components/common/colors';

const style = (width,height) => StyleSheet.create({
    container:{
        backgroundColor:colors.secondaryGreen,
        borderRadius:15,
        margin:15,
        padding:15
    },
    image:{
        width:40,
        height:25,
        resizeMode:'contain'
        
    },
    contentView:{
        backgroundColor:colors.white,
        padding:15,
        marginRight:15,
        borderRadius:15,
        
    },
    head: {
        fontFamily:'Lato-Bold',
        fontSize:18,
        marginBottom:10,
        color:colors.black
    }
    

})

export default style;