/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from "react";
import { View,Text, Image,FlatList, TouchableOpacity } from "react-native";
import { useDimensionContext } from "../../../../context";
import style from './style';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";


const RecentBought = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const [recentItems, setrecentItems] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
      getProducts();
    }, [])

    const getProducts = async () => {
        await firestore().collection('Products').get().then(( snapshot) => {
            if (!snapshot.empty){
                const result =[];
                snapshot.docs.forEach(doc => {
                    if (doc.exists){                        
                        result.push(doc.data());
                    }
                });
                setrecentItems(result);
            }
        }).catch(err => {
            console.log(err);
        });
    };
    
    const handleProduct = item => {
        navigation.navigate('ProductDetails', {product:item});
      }
     
   

    return (
        <View style={responsiveStyle.container}>
            <Text style={responsiveStyle.head}>Buy from Recently Bought</Text>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={recentItems} keyExtractor={(item, index) => {
              String(index) 
            }} renderItem={({item,index}) => {
                return (
                    <TouchableOpacity
                    onPress={() => handleProduct(item)} 
                    style={responsiveStyle.contentView}>
                        <Image source={{uri:item.image}} style={responsiveStyle.image}/>
                       </TouchableOpacity> 
                )
            }}/>
        </View>
    )
}

export default RecentBought;