import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width,height) => StyleSheet.create({

    main: {
        flex:1
    },

    container:{
        backgroundColor:colors.white_level_2
    },
    contentStyle:{alignSelf:'center',marginVertical:height * 0.015},
    renderView:{
        flexDirection:'row',
        alignItems:'center',
        width:width ,
alignSelf:'center',
justifyContent:'center',
marginBottom:height * 0.015
},
offView:{marginRight:(-height * 0.02) /2, zIndex:99},

circleRight: {
    width:25,
    height:25,
    borderRadius:25/2,
    backgroundColor:colors.white_level_2},
    circleCenter: {
        width:25,
        height:25,
        borderRadius:25/2,
        backgroundColor:colors.white_level_2,
        marginTop:-25/2}

   
})

export default style;