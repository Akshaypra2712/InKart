import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width,height,isPortrait) => StyleSheet.create({
    container:{
        padding:15
    },  
     proRev:{
        fontFamily:'Lato-Bold',
        fontSize:16,
        color:colors.primaryGreen
     },
     secondView:{
        padding:15,
        backgroundColor:colors.lightgrey,
        borderRadius:14,
        marginVertical:10
     },
     imgView:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10
     },
     proimg:{
      width:50,
      height:50,
      resizeMode:'contain',
      borderRadius:25,
      overflow:'hidden'
   },
   actionView:{
      padding:20,
   },
   actionText:{
      fontFamily:'Lato-Black',
      fontSize:16,
      color:colors.black,
      lineHeight:50
   }



});



export default style;