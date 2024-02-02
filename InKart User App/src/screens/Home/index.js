/* eslint-disable prettier/prettier */
import React, {useEffect, useRef} from "react";
import {View, Text, ScrollView, } from 'react-native';
import style from './style'
import colors from "../../components/common/colors";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import CommonHeader from "../../components/CommonHeader";
import CustomSearch from "../../components/CustomSearch";
import Banner from "./Components/Banner";
import RecentBought from "./Components/RecentBought";
import ShopCategory from "./Components/ShopCategory";
import ProductScroll from "../../components/ProductScroll";
import OfferProducts from "../../components/OfferProducts";
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from "react-redux";
import { updateWishids } from "../../storage/action";


const Home = () => {
    const userId = useSelector(state => state.userId);
    const dispatch = useDispatch();
    const scrollRef = useRef(null);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused){

            scrollRef.current.scrollTo({y:0, animated: true})
        }
       }, [isFocused]);

    useEffect(() => {
     getWishIds();
    }, []);

    const getWishIds = async () => {
        await firestore().collection('Wishlist').where('userId', '==', userId).get()
        .then(( snapshot) => {
            if(snapshot.empty){
                //setWishItems([]);
                dispatch(updateWishids([]));
            } else {
                const idArray = [];
                snapshot?.docs.forEach(document => {                    
                    idArray.push(document?.data().productId);
                });
                dispatch(updateWishids(idArray));
            }
        });
    }
    

    
    return(
        <View style={style.main} >
        <CommonHeader />
       
        <ScrollView 
        ref={scrollRef}
        style={style.container} nestedScrollEnabled showsVerticalScrollIndicator={false}>
          
            <CustomSearch />
            <Banner />
            <RecentBought/>
            <ShopCategory/>
            <ProductScroll/>
            <OfferProducts/>
            <Text style={style.footText}>Didn't find what you are looking for?</Text>   
            <View style={style.footButton}>
                <Text style={style.footbuttonText}>Browse Category</Text>
                </View>         
        </ScrollView> 
        </View>
    )
};

export default Home;