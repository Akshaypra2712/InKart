/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import colors from "../../common/colors";

const style = (width,height)=> 
StyleSheet.create({
    wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.primaryGreen,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
}) 

export default style;