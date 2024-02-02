/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from "react";
import { View,Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useDimensionContext } from "../../../../context";
import style from './style';
import colors from "../../../../components/common/colors";
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from "react-redux";
import { updateCategories } from "../../../../storage/action";
import { useNavigation } from "@react-navigation/native";


const ShopCategory = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const [categories, setCategories] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        getCategories();
      }, [])
  
    const getCategories = async () => {
        await firestore().collection('Categories').get().then(( snapshot) => {
            if(!snapshot.empty){
                const result =[];
                snapshot.docs.forEach(doc => {
                    if (doc.exists){
                        const responseData = {id: doc.id, ...doc?.data()};
                        result.push(responseData);
                    }
                });
                setCategories(result);
                dispatch(updateCategories( result));
            }
        }).catch(err => {
            console.log(err);
        });
    };
    const handleCategories = index => {
        navigation.navigate('Categories', {catIndex:index});
      }
    

    return (
        <View style={responsiveStyle.container}>
            <Text style={responsiveStyle.head}>Shop by Category</Text>
            <FlatList data={categories}  numColumns={4} contentContainerStyle={responsiveStyle.flatlist} keyExtractor={(item, index) => {
              String(index) 
            }} renderItem={({item,index}) => {
                const categoriesColor = index %4 === 0 ? colors.catogory1 : 
                index % 4 === 1 ? colors.category2: 
                index % 4 === 2 ? colors.category3 :
                index % 4 === 3 ? colors.category4 :
                colors.category1; 
                return (
                    <TouchableOpacity 
                    onPress={() => handleCategories(index)}
                    style={responsiveStyle.innerView}>
                        <View style={[responsiveStyle.imageView, {backgroundColor: categoriesColor}]}>
                            <Image style={responsiveStyle.image} source={{uri :item.image}}/>
                        </View>
                        <Text style={responsiveStyle.itemName}>{item.name}</Text>
                    </TouchableOpacity>

                )
            }}/> 
        </View>
    )
};

export default ShopCategory;