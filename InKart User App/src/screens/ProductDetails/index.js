/* eslint-disable prettier/prettier */
import React, {useEffect,useRef,useState} from "react";
import style from "./style";
import { useDimensionContext } from "../../context";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CommonHeaderLeft from "../../components/CommonHeaderLeft";
import CommonHeaderRight from "../../components/CommonHeaderRight";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from "../../components/common/colors";
import StarRating from 'react-native-star-rating-widget';
import Moreinfo from "./components/Moreinfo";
import ExtraInfo from "./components/ExtraInfo";
import ProductReview from "./components/ProductReview";
import DeliveryInfo from "./components/DeliveryInfo";
import ProductScroll from "../../components/ProductScroll";
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount, updateWishids } from "../../storage/action";
import Snackbar from "react-native-snackbar";



const ProductDetails = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
    const route = useRoute();
    const navigation = useNavigation();
    const {product} = route.params;
    
    const [rating, setRating] = useState(5);
    const scrollRef = useRef(null);
    const [productDetailsObj, setProductDetails] = useState({});
    const [qun, setQun] = useState(1);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.userId);
    const  cartCount = useSelector(state => state.cartCount);
    const wishIds = useSelector(state => state.wishIds);



    useEffect(() => {
        navigation.setOptions({
            
            headerLeft: () => <CommonHeaderLeft type='back' />,
            headerRight: () => <CommonHeaderRight  cart={true} share={true}/>,
            title: '',
           
        })
      
    }, []);

    useEffect(() => {
        setProductDetails(product);       
           
        
      
    }, [product]);

    const navigationNeeded = (val,item) => {
        if(val){
            scrollRef.current.scrollTo({x:0,y:0,animated:true});
            setProductDetails(item)
        }
    }

    const handleQuantity = type => {
        if (type === 'plus') {
            setQun(qun + 1 );
        } else {
            if (qun === 1) {
                return;
            } else {
                setQun(qun - 1);
            }
        }
    };

    const handleAddToCart =async () => {
        
            await firestore().collection('Cart').where('userId', '==', userId). where('productId', '==', productDetailsObj.id).get().then(snapshot => {
                if (snapshot.empty) {
                    firestore().collection('Cart').add({
                        created: Date.now(),
                        description: productDetailsObj.description,
                        name: productDetailsObj.name,
                        price: productDetailsObj.price,
                        quantity: 1,
                        userId: userId,
                        productId: productDetailsObj.id,
                        image: productDetailsObj.image,
                    });
                    dispatch(updateCartCount(cartCount + 1));
                } else {
                    firestore().collection('Cart').where('userId', '==', userId). where('productId', '==', productDetailsObj.id).
                    update({
                        quantity: parseInt(snapshot?.docs[0].data().quantity) + qun,
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
    
    
     return (
        <View>

       
        <ScrollView ref={scrollRef}>
            <View style={responsiveStyle.heart}>
            <TouchableOpacity onPress={ () => addToWishlist(productDetailsObj)}>
                            <Image 
                            source={wishIds.includes(productDetailsObj.id) 
                                ?  require('../../assets/images/wishlist-red.png')
                                :  require('../../assets/images/wishlist.png')
                                } 
                            style={{
                                width:40,
                                height:40,
                                resizeMode:'contain',
                                alignSelf:'flex-end',
                                marginRight:15,}}/>
                                </TouchableOpacity>
            </View>
            <Image source={{uri: productDetailsObj.image}} style={responsiveStyle.proImage}/>
            <View style={responsiveStyle.mainView}>
                <View style={responsiveStyle.paddingView}>
                <Text style={responsiveStyle.name}>{productDetailsObj.name}</Text>
              <View style={responsiveStyle.starView}>
                <StarRating
                    rating={rating}
                    onChange={setRating}/>
                <Text style={responsiveStyle.starText}>(1 rating)</Text>

             </View>

             <View style={responsiveStyle.starView}>
             <Text style={responsiveStyle.price}>₹ {parseFloat(productDetailsObj.price).toFixed(2)}</Text>
             <Text style={responsiveStyle.starText,[{color:colors.primaryGreen,marginLeft:12,fontFamily:'Lato-Bold'}]}>25% off</Text>

              </View>
              
              <Moreinfo/>

               <View style={responsiveStyle.productView}>
                <Text style={responsiveStyle.descHeader}>Product Details</Text>
                <Text style={responsiveStyle.desc}>{productDetailsObj.description}</Text>
                </View>
                <ExtraInfo/>
                <ProductReview product={product}/>
                <DeliveryInfo/>
                </View>
                <ProductScroll isNavigatioNeeded={navigationNeeded}/>
            </View>
           
        </ScrollView>
         <View style={responsiveStyle.box}>
         <View style={responsiveStyle.boxInnerView}>
            <TouchableOpacity onPress={() => handleQuantity('minus')}>
             <AntDesign name="minus" size={20} color={colors.primaryGreen} />
             </TouchableOpacity>

             <Text  style={responsiveStyle.boxText}>{qun}</Text>

             <TouchableOpacity onPress={() => handleQuantity('plus')}>
             <AntDesign name="plus" size={20} color={colors.primaryGreen} />
             </TouchableOpacity>
            
         </View>
         <TouchableOpacity onPress={handleAddToCart}>
         <Text  style={responsiveStyle.boxouterText}>Add to Cart</Text>
         </TouchableOpacity>

     </View>
     </View>
 
    );
};

export default ProductDetails;