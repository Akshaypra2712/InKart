import colors from "../../components/common/colors";

/* eslint-disable prettier/prettier */
const { View, Image } = require("react-native")

const Splash = () => {
    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            backgroundColor:colors.white,
            alignItems:'center'
            }}>
            <Image source={require('../../assets/images/banner.jpg')} style={{width:150,height:150,resizeMode:'contain'}}/>
        </View>
    )

}


export default Splash;