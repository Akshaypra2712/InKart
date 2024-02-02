import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";


const style = (width,height) => StyleSheet.create({

    container: {
        flex:1,
        
        
    },
    textInput: {
        
        fontFamily:'Lato-Regular',
        fontSize:16,
        borderRadius:8,
        borderWidth:1,
        borderColor:colors.primaryGreen,
        color:colors.black,
        width:width * 0.95,
        height:50,
        margin:10,
        alignSelf:'center',
        backgroundColor:colors.secondaryGreen
    },
    description:{
        fontFamily:'Lato-Regular',
        fontSize:16,
        color:colors.black,
    },
    mapView:{
    height:height * 0.4,
    width: width,
    justifyContent:'center',
    alignItems:'center'
    },
    touchView:{
        padding:15,
        marginVertical:20,
        flexDirection:'row',
        alignItems:'center'

    },
    touchText:{
        fontFamily:'Lato-Bold',
        fontSize:16,
        color:colors.black,    
    },
    iconView:{
        borderRadius:8,
        padding:10,
        marginRight:10,
        backgroundColor:colors.primaryGreen
    }





});


export default style;