/* eslint-disable prettier/prettier */
import React, {  useEffect } from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style'
import { useDimensionContext } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import firestore from '@react-native-firebase/firestore';
import { updateCartCount } from "../../storage/action";


const CustomFooter = ({state, descriptors,navigation}) => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
    const {cartCount} = useSelector(state => state);
    const {userId} = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        getCartProducts();
      }, []);
      
    
      const getCartProducts = async () => {
        await firestore()
          .collection('Cart')
          .where('userId', '==', userId)
          .get()
          .then(snapshot => {
            dispatch(updateCartCount(snapshot.size));
          })          
          .catch(err => {
            console.log(err);
          });
      };

    
    return(
        <View style={responsiveStyle.mainContainer} >

            {state.routes.map((route, index)=> {
                const isFocused = state.index === index;
                const icon = route.name == 'Home' ? require('../../assets/images/home.png') : 
                route.name === 'Category' ? require('../../assets/images/category.png') :
                route.name === 'Search' ? require('../../assets/images/search.png') :
                route.name === 'Offers' ? require('../../assets/images/offer.png'):require('../../assets/images/cart.png');
                return (
                    <TouchableOpacity  key={index}
                    onPress={() => navigation.navigate(route.name)}
                     style={responsiveStyle.touchContainer}>
                         {isFocused ? <Text style={responsiveStyle.dot}>.</Text> : null}
                         {route.name === 'Cart' ? (
                            <View style={responsiveStyle.cartCount}>
                                <Text style={responsiveStyle.count}>{cartCount}</Text>
                            </View>
                         ): null}
                    <Image source={icon} style={responsiveStyle.iconStyle}/>
                    <Text style={responsiveStyle.footerText}>{route.name}</Text>
                   
                </TouchableOpacity>
                )
            })}
            
        </View>
    )
};

export default CustomFooter;