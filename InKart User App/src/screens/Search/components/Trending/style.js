import { StyleSheet } from "react-native";
import colors from "../../../../components/common/colors";

const style = (width,height) => StyleSheet.create({
    
    main: {
        flex:1,
        padding:10
    },
    title : {
        fontFamily:'Lato-Bold',
        fontSize:18,
        color:colors.black
    },
    flatList:{
        alignItems:'center',
        marginVertical:15
    },
    imageCont:{
        padding:15,
        borderRadius:15,
        overflow:'hidden',
        marginRight:15
    },
    image:{
        width:width * 0.13,
        height: height * 0.08,
        resizeMode:'contain'
    }

})

export default style;