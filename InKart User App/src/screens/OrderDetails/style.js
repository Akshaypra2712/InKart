/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width,height) => StyleSheet.create({
  container:{
    flex:1,
  },  

  payText: {
        fontFamily:'Lato-Regular',
        fontSize:16,
        color:colors.black
    },
    scrollview:{padding:width * 0.04,
    },
    contentStyle:{
         paddingBottom:height * 0.15,
    },
    greenBox:{
        backgroundColor:colors.primaryGreen,
        borderRadius:15,
        padding:20,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:width * 0.04
    },
    greenTextBox:{marginLeft:width * 0.4}

})

export default style;