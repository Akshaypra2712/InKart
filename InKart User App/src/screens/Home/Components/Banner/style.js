import { StyleSheet, } from "react-native";
import colors from '../../../../components/common/colors';

const style = (width,height) => StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15
        
    },
    banner: {
        width: width*0.9,
        height:width*0.4,
        resizeMode:'contain',
        overflow:'hidden',
        borderRadius:15,
        margin:15
   },
   innerView:{padding:15},
   head:{
    fontFamily:'Lato-Black',
    fontSize:20,
    color:colors.grey
   },
   content:{
    fontFamily:'Lato-Regular',
    fontSize:18,
    color:colors.grey
   },
   touch:{
    backgroundColor:colors.primaryGreen,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    width:width * 0.3,
    marginVertical: 10,
    borderRadius:15
    
   },
   touchText: {
    fontFamily:'Lato-Regular',
    fontSize:16,
    color:colors.white
   }
    

})

export default style;