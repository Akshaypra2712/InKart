import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width,height) => StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.white_level_3
    },
    outerview:{
        backgroundColor:colors.secondaryGreen,
        borderRadius:15,
        padding:15,
        overflow:'hidden',
        marginTop:10,
        marginHorizontal:15
    },
    innerview:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:colors.grey,
        borderBottomWidth:1,
        paddingBottom:15
    },
    secondsectionView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:15
    },
    image: {
        width: 100,
        height:100,
        borderRadius:15,
        overflow:'hidden',
        resizeMode:'contain'
    },
    text: {
        fontFamily:'Lato-Bold',
        fontSize:16,
        color:colors.black
    }
})

export default style;