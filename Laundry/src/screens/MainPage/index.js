import React, {useState, useLayoutEffect} from 'react';
import { View,Text,FlatList,TouchableOpacity,Image ,ScrollView} from 'react-native';
import colors from '../../common/colors';
import CommonHeader from '../../components/CommonHeader';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';



const MainPage = () => {
    const [mainItems, setmainItems] = useState([]);

    const navigation = useNavigation();

    useLayoutEffect(() => {
        getItems();
      }, [])

      const getItems = async () => {
        await firestore().collection('MainPage').get().then(( snapshot) => {
            if(!snapshot.empty){
                const result =[];
                snapshot.docs.forEach(doc => {
                    if (doc.exists){
                        
                        result.push(doc.data());
                    }
                });
                setmainItems(result);
            }
        }).catch(err => {
            console.log(err);
        });
    };



    return (
        
        <><View style={{ flex: 1 }}>
        <ScrollView style={{backgroundColor:colors.white_level_2}} nestedScrollEnabled showsVerticalScrollIndicator={false} >

            <CommonHeader title={"Our Services"}/>

            <Text style={{
                color: colors.black,
                fontSize: 18,
                fontFamily: 'Lato-Regular',
                marginTop: 10,
                margin:15
            }}>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour. </Text>
                
                <FlatList data={mainItems}
            
            showsVerticalScrollIndicator={false} keyExtractor={(item, index) => {
                String(index);
            } }
            renderItem={({ item, index }) => {
                return (
                    
                    <>
                    <TouchableOpacity onPress={() => navigation.navigate('MoreInfo')}>
                    <Image source={{ uri: item.image }} style={{
                        width: "100%",
                        height: 180,
                        
                        overflow: 'hidden',
                        borderRadius: 10,
                    }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontFamily: 'Lato-Black',
                        fontSize: 20,
                        color: colors.black,
                        textAlign:'left',
                        padding:15
                        
                    }}>{item.title}</Text>
                    <Text style={{
                        fontFamily: 'Lato-Regular',
                        fontSize: 18,
                        color: colors.black,
                        textAlign:'left',
                        paddingLeft:5
                    }}>{item.description}</Text></>
                    
                            
             
                );
            } } />
            </ScrollView>
        </View>
       </>
     
    )

}

export default MainPage;