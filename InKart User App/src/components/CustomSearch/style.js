/* eslint-disable prettier/prettier */
import { StyleSheet, } from "react-native";
import colors from '../common/colors';

const style = (width,height) => StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15
        
    },
    newContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:15 
    },
    search: {
        borderWidth:1,
        borderColor: colors.primaryGreen,
        backgroundColor: colors.secondaryGreen,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        padding:2,
        width:width*0.95,
           },
           newStyle: {
            borderWidth:1,
        borderColor: colors.primaryGreen,
        backgroundColor: colors.secondaryGreen,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        padding:2,
        width:width*0.775,

           },
           searchIcon:{
            width:25,
            height:25,
            resizeMode:'contain'
           },
           
           textInput: {
            flex:1,
            fontFamily: 'Lato-Regular',
            fontSize:18,
            marginLeft:15,
            color:colors.primaryGreen
           },
        innerView: {
        flexDirection:'row',
        alignItems:'center',
        },
        filter: {
            fontFamily: 'Lato-Regular',
            fontSize:18,
            color:colors.primaryGreen
        }
    

})

export default style;