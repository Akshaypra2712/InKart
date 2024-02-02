import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";


const style = (width,height)=> StyleSheet.create({
mainContainer:{
    marginVertical:25,
    padding:15,
    overflow:'hidden',
    backgroundColor:colors.white,
    flex:1
},
drawerView: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:12,
    justifyContent:'space-between'
},
innerView: {
    flexDirection:'row',
    alignItems:'center',
},
icon: {
    width:30,
    height:30,
    resizeMode:'contain',
    marginRight:14,
    
},
arrow:{
    backgroundColor:colors.secondaryGreen,
    overflow:'hidden',
    borderRadius:15
},
secondIcon:{
    width:25,
      height:25,
      resizeMode:'contain',
      backgroundColor:colors.
      secondaryGreen,
      overflow:'hidden',
      borderRadius:25/2
},
drawerText: {
    fontSize:18,
    fontFamily:'Lato-Regular',
    color:colors.black
},
logoutView:{
    borderColor:colors.black_level_3,
    borderWidth:1,
    paddingHorizontal:15,
    paddingVertical:9,
    backgroundColor:colors.secondaryGreen,
    justifyContent:'center',
    alignItems:'center',
    width:'50%',
    borderRadius:20,
    flexDirection:'row',
    },
    logoutText: {
        fontSize:18,
        fontFamily:'Lato-Regular',
        color:colors.black,
        paddingBottom: 15
    },
    supportView: {
        borderRadius:20,
        backgroundColor:colors.secondaryGreen,
        padding:15,
        marginVertical:15,
        
    },
    supportTouch: {
        borderRadius:20,
        backgroundColor:colors.primaryGreen,
        padding:10,
        marginVertical:15,
        width:'60%',
        justifyContent:'center',
        alignItems:'center'
    },
    supportText:{
        fontFamily:'Lato-Regular',
        fontSize:18,
        color:colors.white
    },
    supportHead:{
        fontFamily:'Lato-Black',
        fontSize:18, 
        lineHeight:25,
        color:colors.black    
    },
    supportContent:{
        fontFamily:'Lato-Regular',
        fontSize:15,  
        lineHeight:19,
        color:colors.black   
    },
    image:{
        width:width * 0.2,
        height:width*0.2,
        borderRadius:width * 0.2,
        
    },
    accountTouch: {
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:colors.black_level_3,
        paddingVertical:15
    },
    accountImageview: {width:75,
        height:75,
        borderRadius:50,
        backgroundColor:colors.white_level_3,
        justifyContent:'center',
        alignItems:'center',
        },
        email:{color:colors.black,fontFamily:'Lato-Regular',fontSize:16},
        name:{color:colors.black,fontFamily:'Lato-Bold',fontSize:20},
        commonMargin:{marginVertical: 15},
        nameView:{marginLeft:15,width:'80%'},

})

export default style;