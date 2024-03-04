import React, {useState, useLayoutEffect} from 'react';
import { View,Text,FlatList,TouchableOpacity,Image ,ScrollView} from 'react-native';
import colors from '../../common/colors';
import CommonHeader from '../../components/CommonHeader';
import firestore from '@react-native-firebase/firestore';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import { useNavigation } from '@react-navigation/native';



const MoreInfo = () => {
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
        
        <><View style={{ flex: 1 ,padding:10}}>
        <ScrollView style={{backgroundColor:colors.white_level_2}} nestedScrollEnabled showsVerticalScrollIndicator={false} >

        <CommonHeaderLeft 
            type={'back'} 
            action={() => navigation.navigate('MainPage')}/>
            
            <FlatList data={mainItems}
            
            showsVerticalScrollIndicator={false} keyExtractor={(item, index) => {
                String(index);
            } }
            renderItem={({ item, index }) => {
                return (
                    
                    <>
                    <TouchableOpacity >
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
                    }}>{item.description}</Text>

                    <Text style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 20,
                        color: colors.black,
                        textAlign:'left',
                        paddingLeft:5
                    }}>Advantage</Text>

                    <Text style={{
                        fontFamily: 'Lato-Regular',
                        fontSize: 18,
                        color: colors.black,
                        textAlign:'left',
                        paddingLeft:5
                    }}>{item.advantage}</Text>

                        <Text style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 20,
                        color: colors.black,
                        textAlign:'left',
                        paddingLeft:5
                    }}>Drawback</Text>

                    <Text style={{
                        fontFamily: 'Lato-Regular',
                        fontSize: 18,
                        color: colors.black,
                        textAlign:'left',
                        paddingLeft:5
                    }}>{item.drawback}</Text>
                    
                    
                    
                    
                    </>    
                    
                            
             
                );
            } } />
            </ScrollView>
        </View>
       </>
     
    )

}

export default MoreInfo;