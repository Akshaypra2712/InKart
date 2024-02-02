/* eslint-disable prettier/prettier */
import React, {useCallback, useEffect,useState} from "react";
import {View,Text, ScrollView, FlatList } from 'react-native';
import style from './style'
import colors from "../../components/common/colors";
import CustomSearch from "../../components/CustomSearch";
import { useDimensionContext } from "../../context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import CommonHeaderLeft from "../../components/CommonHeaderLeft";
import firestore from '@react-native-firebase/firestore';
import Snackbar from "react-native-snackbar";



const Offers = () => {    
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const navigation = useNavigation();
    const [offers, setOffers] = useState([]);

    
    useEffect(() => {
        navigation.setOptions({
        headerLeft: () => <CommonHeaderLeft />,
           
    })
        
      }, []);

      useFocusEffect(
        useCallback(() => {
        getOffers();
       },[]),
       );

      
      const getOffers = async () => {
        await firestore()
        .collection('Offers').get()
        .then(snapshot => {
          if (snapshot.empty){
            Snackbar.show({
              text: 'No Offers found',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: colors.red,
              textColor: colors.white,
          });

          } else {
            const objArray = [];
            snapshot?.docs.forEach(document => {
              const result = {id: document.id, ...document?.data()};
              objArray.push(result);
            });
            setOffers(objArray);
          }
        });   
       };


    return(
        <View style={responsiveStyle.main}>
        <ScrollView style={responsiveStyle.container} nestedScrollEnabled showsVerticalScrollIndicator={false} >

            <CustomSearch/>
            
                <FlatList data={offers}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={responsiveStyle.contentStyle}
                keyExtractor={(item,index) => String(index)}
                renderItem={({item,index}) => {
                    return (
                        <View style={responsiveStyle.renderView}>
                       {/* start design */}
                    <View style={responsiveStyle.offView}>
                    <View style={responsiveStyle.circleRight}></View>
                    <View style={responsiveStyle.circleRight}></View>
                    <View style={responsiveStyle.circleRight}></View>
                    <View style={responsiveStyle.circleRight}></View>
                        </View>
                        <View style={{
                            width:'64%',
                            height:100,
                            backgroundColor:colors.secondaryGreen,
                            padding:20,}}>

                            <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontFamily:'Lato-Bold',color:colors.primaryGreen,fontSize:50}}> {item.offer}</Text>
                           
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontFamily:'Lato-Regular',color:colors.primaryGreen,fontSize:20}}> %</Text>
                            <Text style={{fontFamily:'Lato-Regular',color:colors.primaryGreen,fontSize:20}}> OFF</Text>
                            </View>
                            <View style={{marginLeft:5}}>
                            <Text style={{fontFamily:'Lato-Bold',color:colors.black,fontSize:14}}>{item.head}</Text>
                            <Text style={{fontFamily:'Lato-Regular',color:colors.black_level_3,fontSize:10}}>{item.subHead}</Text>
                            </View>
                            </View>
                            </View>

                            <View style={{justifyContent:'space-between',height:100,backgroundColor:colors.secondaryGreen}}>
                            <View style={responsiveStyle.circleCenter}></View>
                    <View style={responsiveStyle.circleCenter}></View>
                            </View>
                            <View style={{
                            width:'25%',
                            height:100,
                            backgroundColor:colors.secondaryGreen,
                            paddingRight:15,
                            paddingLeft:1,
                            justifyContent:'center',
                            alignItems:'center'}}>
                                <Text style={{
                                    fontFamily:'Lato-Regular',
                                    color:colors.black_level_3,
                                    fontSize:15}}>Use Code</Text>
                                    <View style={{
                                        marginVertical:10,
                                        paddingHorizontal:10,
                                        paddingVertical:5,
                                        justifyContent:'center',
                                        borderRadius:15,
                                        backgroundColor:colors.primaryGreen,
                                        overflow:'hidden'}}>
                                        <Text style={{fontFamily:'Lato-Regular',
                                        color:colors.white,
                                        textAlign:'center'}}>{item.offerCode}</Text>
                                    </View>
                            </View>


                            {/* end design */}
                        <View style={{marginLeft:-25/2}}>
                    <View style={responsiveStyle.circleRight}></View>
                    <View style={responsiveStyle.circleRight}></View>
                    <View style={responsiveStyle.circleRight}></View>
                    <View style={responsiveStyle.circleRight}></View>
                        </View>
                </View>
                    )
                }}/>
                

        
            </ScrollView>             
        </View>
    )
};

export default Offers;