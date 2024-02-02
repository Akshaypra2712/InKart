import { StyleSheet, } from "react-native";
import colors from '../../../../components/common/colors';

const style = (width,height) => StyleSheet.create({
    container:{
        margin:15
    },
    head: {
        fontFamily:'Lato-Bold',
        fontSize:20,
        textAlign:'center',
        color:colors.black
    },
    flatlist:{
        alignItems:'center',
        marginVertical:15,
        justifyContent:'center'
    },
    innerView:{
        marginRight:15,
        marginBottom:15,
        justifyContent:'center',
        alignItems:'center'
    },
    itemName:{
        fontFamily:'Lato-Regular',
        fontSize:16,
        color:colors.black
    },
    image: {
        width:40,
        height:40,
        resizeMode:'contain'
    },
    imageView: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        padding: 15,
        marginBottom: 10
    }
    

})

export default style;