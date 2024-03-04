import { StyleSheet } from "react-native";
import colors from "../../common/colors";


const style = (width,height,isPortrait)=> StyleSheet.create({
    mainContainer:{
        height:isPortrait ? height* 0.11 : height* 0.2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:colors.primaryGreen,
        marginVertical:3,
        padding:15,
        overflow:'hidden'
    },
    touchContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    iconStyle: {
        width:"20%",
        height:50 ,
        resizeMode:'contain'
    },
    footerText:{
        color:colors.white,
        fontSize:16,
        fontFamily:'Lato-Bold',
        marginTop: 5 ,
    },
    dot:{
        fontSize: 42,
        color:colors.white,
        marginTop:-25 ,
        textAlign:'center'
    },
    cartCount:{
        position:'absolute',
        right: -8,
        top:-2,
        backgroundColor:colors.red,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:14,
        overflow:'hidden',
        paddingHorizontal:6,
        paddingVertical:2,
        zIndex:9
    },
    count:{
        color:colors.white,
        fontFamily:'Lato-Bold',
        fontSize:16,
        textAlign:'center'
    }
})


export default style;