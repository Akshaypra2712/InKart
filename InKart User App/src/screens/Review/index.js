/* eslint-disable prettier/prettier */
import React, {useEffect,useRef,useState} from "react";
import { useDimensionContext } from "../../context";
import style from "./style";
import { Text, View,Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CommonHeaderLeft from "../../components/CommonHeaderLeft";
import CommonHeaderRight from "../../components/CommonHeaderRight";
import StarRating from 'react-native-star-rating-widget';
import colors from "../../components/common/colors";
import ActionSheet from "react-native-actions-sheet";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";



const Review = () => {
    const dimensions = useDimensionContext();
const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
const navigation = useNavigation();
const [rating, setRating] = useState(3);
const actionSheetRef = useRef(null);

useEffect(() => {
    navigation.setOptions({
        
        headerLeft: () => <CommonHeaderLeft type='back' />,
        headerRight: () => <CommonHeaderRight  plus={true} handlePlusIcon={openActionSheet}/>,
        title: 'Reviews',
       
    })
  
}, []);
const openActionSheet = () => {
    actionSheetRef.current.show();

}

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={responsiveStyle.container}>
            <View style={responsiveStyle.secondView}>
                <View style={responsiveStyle.imgView}>
                    <Image source={require('../../assets/images/dummy.png')} style={responsiveStyle.proimg}/>
                    <View>
                    <Text style={responsiveStyle.proRev,[{color:colors.black,fontFamily:'Lato-Bold',marginLeft:10}]}>Rendric Hevork</Text>
                    <StarRating
                    starSize={20}
                    rating={rating}
                    onChange={setRating}/>
                    </View>
                </View>
                <Text style={responsiveStyle.proRev,[{color:colors.black_level_3,fontSize:16}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took</Text>

               </View>

               <ActionSheet ref={actionSheetRef}>
                <View style={responsiveStyle.actionView}>
                    <Text style={responsiveStyle.actionText}>Write a Review</Text>
                    <StarRating
                    starSize={40}
                    rating={rating}
                    onChange={setRating}/>
                    <CustomTextInput placeholder = "Write Here" multiline={true}/>
                    <CustomButton buttonText={"Submit Review"} type="primary"/>
                </View>

               </ActionSheet>

              

         </ScrollView>

    );
};

export default Review;