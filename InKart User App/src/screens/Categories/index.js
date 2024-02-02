/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from "react";
import {View, Text,ScrollView, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import style from './style'
import CustomSearch from "../../components/CustomSearch";
import { useDimensionContext } from "../../context";
import firestore from '@react-native-firebase/firestore';
import colors from "../../components/common/colors";
import CommonHeaderLeft from "../../components/CommonHeaderLeft";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";


const Categories = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const [products, setProducts] = useState([]);
    const route = useRoute();
    const [active, setActive] = useState(0);
    const navigation = useNavigation();
    const categories = useSelector(state => state.categories);
    const {catIndex = 0} = route?.params ?? {};

    useEffect(() => {
        if(catIndex){
            setActive(catIndex);
        }
     
    }, [catIndex]);
    
   
    
    useEffect(() => {
        navigation.setOptions({
        headerLeft: () => <CommonHeaderLeft/>,
           
    })
      getProducts();
      }, []);
  
   

    const getProducts = async () => {
        await firestore().collection('Products').get().then(( snapshot) => {
            if(!snapshot.empty){
                const result =[];
                snapshot.docs.forEach(doc => {
                    if (doc.exists){                        
                        result.push(doc.data());
                    }
                });
                setProducts(result);
            }

        }).catch(err => {
            console.log(err);
        });
    };
        
    const handleCategoryTouch = index => {
        setActive(index);
    };

    const handleProduct = item => {
        navigation.navigate('ProductDetails', {product:item});

    }
    
    return(
        <View style={responsiveStyle.main}>
        <ScrollView style={responsiveStyle.container} nestedScrollEnabled showsVerticalScrollIndicator={false} >

            <CustomSearch/>
            <View style={responsiveStyle.rowStyle}>
                {/* sidebar */}
                <View>
                    <FlatList data={categories} 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={responsiveStyle.catFlat}
                    renderItem={({item,index}) => {
                        return (
                            <TouchableOpacity style={responsiveStyle.catTouch,[{backgroundColor: index ===active ?colors.white_level_2 :'transparent' }]} 
                            onPress={handleCategoryTouch(index)}>
                            <Image source={{uri: item.image}} style={responsiveStyle.catImage}/>
                            </TouchableOpacity>
                        )
                    }}/>
                </View>

                 {/* content */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground source={require('../../assets/images/banner.jpg')}
                     style={responsiveStyle.backImage}>
                        <Text numberOfLines={1} style={responsiveStyle.catName}>
                            {categories[active]?.name}
                        </Text>
                        <Text numberOfLines={3} style={responsiveStyle.catDesc}>
                            {categories[active]?.description}
                        </Text>

                    </ImageBackground>
                    <FlatList 
                    numColumns={3}
                    data={products}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={responsiveStyle.proStyle}
                    renderItem={({item,index}) => {
                        return (
                            <TouchableOpacity style={responsiveStyle.proContainer} onPress={() => handleProduct(item)}>
                                <View style={responsiveStyle.imageBg}>
                                <Image source={{uri :item.image}} style={responsiveStyle.proImage}/>
                                </View>
                                <Text  style={responsiveStyle.proName}>{item.name}</Text>
                                <Text  style={responsiveStyle.proDesc}>₹{item.price}</Text>
                            </TouchableOpacity>

                        )
                    }} />
                </ScrollView>
            </View>
            </ScrollView>
            
        </View> 
    )
};

export default Categories;