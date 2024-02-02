import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width,height) => StyleSheet.create({

    main: {
        flex:1
    },

    container:{
        backgroundColor:colors.white_level_2
    },
    catImage: {
        width: width * 0.2,
        height: width * 0.2,
        resizeMode: 'contain',
        margin:10
    },
    catFlat : {
        padding: 10,
        backgroundColor:colors.secondaryGreen,
        width: width *0.3,
        justifyContent:'center',
        alignItems:'center'
            },
        catTouch: {
            borderBottomColor:colors.black_level_3,
            borderBottomWidth: 0.8
        },
        rowStyle: {
            flexDirection : 'row',
            justifyContent:'space-between'
        },
        backImage : {
            width: width * 0.6,
            height: height * 0.25,
            resizeMode:'contain',
            justifyContent:'center',
            alignSelf:'center',
            borderRadius:15,
            overflow:'hidden',
            padding:15
        },
        catName :{
            fontFamily:'Lato-Black',
            fontSize: 22,
            color:colors.black

        },
        catDesc :{
            fontFamily:'Lato-Regular',
            fontSize: 18,
            color:colors.grey

        },
        proName :{
            fontFamily:'Lato-Bold',
            fontSize: 18,
            color:colors.black

        },
        proDesc :{
            fontFamily:'Lato-Regular',
            fontSize: 14,
            color:colors.grey

        },
        proImage: {
            width: width *0.15,
            height:width * 0.15,
            resizeMode: 'contain'
        },
        proContainer :{
            padding:5,
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center'
        },
        proStyle:{
            justifyContent:'center',
            padding:10
        },
        imageBg:{
            backgroundColor:colors.secondaryGreen,
            padding:10,
            justifyContent:'center',
            borderRadius:15,
            marginBottom:5
        },
        
   
   
});

export default style;