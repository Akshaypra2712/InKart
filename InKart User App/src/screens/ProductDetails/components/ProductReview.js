/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import { useDimensionContext } from "../../../context";
import {  Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from "./style";
import colors from "../../../components/common/colors";
import StarRating from 'react-native-star-rating-widget';
import { useNavigation } from "@react-navigation/native";


const ProductReview = props => {
    const {product} = props;
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
    const [rating, setRating] = useState(3);
    const navigation = useNavigation();
    
    const handleRedirect = () => {
        navigation.navigate('Review', {product:product})

    };

    return (
        <View style={responsiveStyle.promainView}>
             
               <View style={responsiveStyle.proView}>
                    <Text style={responsiveStyle.proRev,[{color:colors.black_level_3}]} >Product Review (1)</Text>
                    <TouchableOpacity onPress={handleRedirect}>
                    <Text style={responsiveStyle.proRev}> See All</Text>
                    </TouchableOpacity>
               </View>

               <View style={responsiveStyle.secondView}>
                <View style={responsiveStyle.imgView}>
                    <Image source={require('../../../assets/images/dummy.png')} style={responsiveStyle.proimg}/>
                    <View>
                    <Text style={responsiveStyle.proRev,[{color:colors.black,fontFamily:'Lato-Bold',marginLeft:10}]}>Rendric Hevork</Text>
                    <StarRating
                    starSize={20}
                    rating={rating}
                    onChange={() => {}}/>
                    </View>
                </View>
                <Text style={responsiveStyle.proRev,[{color:colors.black_level_3,fontSize:16}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took</Text>

               </View>

               
              </View>

    )
}


export default ProductReview;