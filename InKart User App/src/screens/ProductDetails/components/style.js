import { StyleSheet } from "react-native";
import colors from "../../../components/common/colors";

const style = (width,height,isPortrait) => StyleSheet.create({

           
           starText:{
            color:colors.grey,
            marginLeft:10,
            fontFamily:'Lato-Regular',
            fontSize:18
           },
           
           innerView:{
            flexDirection:'row',
            alignItems:'center',
            width:'50%',
            justifyContent:'center',
            backgroundColor:colors.lightgrey,
            padding:10,
            borderRadius:5
            
           },
           outerView:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
           
           },
           descHeader:{
            fontFamily:'Lato-Bold',
            fontSize:18,
            color:colors.black,
               },
               rendHView:{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
               },
               desc:{
                fontFamily:'Lato-Regular',
                fontSize:16,
                color:colors.grey,
               },
               promainView:{
                  marginVertical:15
               },
               proView:{
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                  marginVertical:5
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
               proimg:{
                  width:50,
                  height:50,
                  resizeMode:'contain',
                  borderRadius:25,
                  overflow:'hidden'
               },
               imgView:{
                  flexDirection:'row',
                  alignItems:'center',
                  marginBottom:10
               }



});


export default style;