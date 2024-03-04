import { StyleSheet, } from "react-native";
import colors from '../common/colors';

const style = (width,height) => StyleSheet.create({
   padding:
    {paddingLeft:15},
    image:{
        width:30,
        height:30,
        resizeMode:'contain'
    }
});


export default style;