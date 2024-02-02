import { StyleSheet } from "react-native";
import colors from "../../../../components/common/colors";


const style = (width,height) => StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical: 15,
        borderBottomColor:colors.black_level_3,
        borderBottomWidth:1
    },
    orderText: {
        fontFamily:'Lato-Black',
        fontSize:18,
        color:colors.black_level_3,
        lineHeight:35
    },
    bagText:{
        fontFamily:'Lato-Regular',
        fontSize:18,
        color:colors.black,
        lineHeight:30,
        marginBottom:10
    },
    secondView:{
        alignItems:'flex-end',

    },
    lastView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    lastText:{
        fontFamily:'Lato-Bold',
        fontSize:20,
        color:colors.black,
        lineHeight:50
    }

});

export default style;