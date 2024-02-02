/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from "react";
import {View, Text, Image ,TextInput, FlatList, TouchableOpacity} from 'react-native';
import style from './style'
import colors from "../../components/common/colors";
import { useDimensionContext } from "../../context";
import CommonSectionHeader from "../CommonSectionHeader";
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount, updateWishids } from "../../storage/action";
import Snackbar from "react-native-snackbar";


const ProductScroll = props => {
    const {isNavigatioNeeded} = props;
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const navigation = useNavigation();
    const userId = useSelector(state => state.userId);
    const wishIds = useSelector(state => state.wishIds);


    const route = useRoute();
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
      getProducts();
    }, [])

    const getProducts = async () => {
        await firestore().collection('Products').get().then(( snapshot) => {
            if(!snapshot.empty){
                const result =[];
                snapshot.docs.forEach(doc => {
                    if (doc.exists){
                        const responseData = {id: doc.id, ...doc?.data()};                        
                        result.push(responseData);
                    }
                });
                setProducts(result);
            }
        }).catch(err => {
            console.log(err);
        });
    };
    
    const handleProduct = item => {
        if (route.name === 'ProductDetails'){
            isNavigatioNeeded(true,item);

        } else {
            navigation.navigate('ProductDetails', {product:item});
        }
    };

    const addToCart = async item => {
        await firestore().collection('Cart').where('userId', '==', userId). where('productId', '==', item.id).get().then(snapshot => {
            if (snapshot.empty) {
                firestore().collection('Cart').add({
                    created: Date.now(),
                    description: item.description,
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                    userId: userId,
                    productId: item.id,
                    image: item.image,
                });
                dispatch(updateCartCount(cartCount + 1));
            } else {
                firestore().collection('Cart').doc(snapshot?.docs[0].id).
                update({
                    quantity: parseInt(snapshot?.docs[0].data().quantity) + 1,
                })
            }
        })

    };

    const addToWishlist = productDetails => {
        firestore().collection('Wishlist').where('userId', '==', userId).
        where('productId', '==', productDetails.id).
        get().then(snapshot => {
            if (snapshot.empty){
                firestore().collection('Wishlist').add({
                    created: Date.now(),
                    updated: Date.now(),
                    description: productDetails.description,
                    name: productDetails.name,
                    price: productDetails.price,
                    userId: userId,
                    image: productDetails.image,
                    categoryId:productDetails.categoryId,
                    productId:productDetails.id,
                }).then(resp => {
                    dispatch(updateWishids([...wishIds,productDetails.id]))
                    Snackbar.show({
                        text:'Item added to Wishlist' ,
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor: colors.primaryGreen,
                        textColor: colors.white,
                      });
                });
            } else {
                Snackbar.show({
                    text:'Item is already in your Wishlist' ,
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: colors.primaryGreen,
                    textColor: colors.white,
                  });

            }
        });
        
         };
    
    return(
        <View style={responsiveStyle.container}>
           <CommonSectionHeader head={'Newly added'} content={'Pay less, Get more'} rightText={'See All'}/>

                  <View>
                    {/* flatlist*/}
                <FlatList data={products} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => {
              String(index) 
            }}renderItem={({item,index}) => {
                    return (
                        <TouchableOpacity 
                        onPress={() => handleProduct(item)}
                        style={{
                            width:150,
                            height:250,
                            padding:15,
                            marginRight:15,
                            marginVertical:15,
                            borderRadius:20,
                            borderWidth:1,
                            borderColor:colors.primaryGreen}}>
                                <TouchableOpacity onPress={ () => addToWishlist(item)}>
                            <Image 
                            source={wishIds.includes(item.id) 
                                ?  require('../../assets/images/wishlist-red.png')
                                :  require('../../assets/images/wishlist.png')
                                } 
                            style={{
                                width:25,
                                height:25,
                                resizeMode:'contain',
                                alignSelf:'flex-end'}}/>
                                </TouchableOpacity>
                            <Image source={{ uri : item.image}} style={{
                                width:75,
                                height:75,
                                resizeMode:'contain',
                                alignSelf:'center',
                                marginVertical:10}}/>

                            <Text style={{
                                fontFamily:'Lato-Bold',
                                fontSize:20,
                                color:colors.black,
                                
                            }} numberOfLines={1}>{item.name}</Text>
                            <Text style={{
                                fontFamily:'Lato-Regular',
                                fontSize:18,
                                color:colors.black
                            }} numberOfLines={2}>{item.description}</Text>

                            <View style={{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                                marginTop:10}}>
                                <Text style={{
                                fontFamily:'Lato-Regular',
                                fontSize:20,
                                color:colors.black
                            }}>{item.price}</Text>
                               
                                <TouchableOpacity 
                                onPress={() => addToCart(item) }
                                style={{
                                    padding:5,
                                    backgroundColor:colors.primaryGreen,
                                    borderRadius:5
                                }}>
                                <Text style={{
                                fontFamily:'Lato-Bold',
                                fontSize:20,
                                color:colors.white
                            }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}/>
                    </View>  
        </View>
    )
};

export default ProductScroll;