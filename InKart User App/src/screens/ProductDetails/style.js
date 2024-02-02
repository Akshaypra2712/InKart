import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width,height,isPortrait) => StyleSheet.create({

    proImage:{
        width:width,
        height:width * 0.7,
        resizeMode:'contain',
        marginTop:25
        
    },
    heart:{
        position:'absolute',
        right:0,
        marginTop:10
    },
    mainView:{
        backgroundColor:colors.white,
       
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        elevation:15,
        paddingBottom:100,
        
    },
    name:{
        fontFamily:'Lato-Black',
        fontSize:30,
        color:colors.black,
        marginBottom:10
    },
    price:{
        fontFamily:'Lato-Bold',
        fontSize:20,
        color:colors.black,
        marginVertical:10
    },
    descHeader:{
        fontFamily:'Lato-Bold',
        fontSize:18,
        color:colors.black,
           },
           desc:{
            fontFamily:'Lato-Regular',
            fontSize:20,
            color:colors.grey,
           },
           starView:{
            flexDirection:'row',
            alignItems:'center'
           },
           starText:{
            color:colors.grey,
            marginLeft:10,
            fontFamily:'Lato-Regular',
            fontSize:18
           },
           productView:{
            borderBottomWidth:1,
            borderBottomColor:colors.grey,
            paddingVertical:10
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
           paddingView:{
            padding:width * 0.05
           },
           box:{
            position:'absolute',
            bottom:25,
            alignSelf:'center',
            padding:15,
            borderRadius:8,
            backgroundColor:colors.primaryGreen,
            justifyContent:'space-between',
            flexDirection:'row',
            alignItems:'center',
            width:'95%'
           },
           boxInnerView:{
            padding:10,
            borderRadius:8,
            backgroundColor:colors.white,
            justifyContent:'center',
            flexDirection:'row',
            alignItems:'center'
           },
           boxText:{
            color:colors.primaryGreen,
            fontFamily:'Lato-Black',
            fontSize:20,
            marginHorizontal:15
           },
           boxouterText:{
            color:colors.white,
            fontFamily:'Lato-Black',
            fontSize:16,
           }
           



});


export default style;