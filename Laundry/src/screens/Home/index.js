import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../common/colors';
import Swiper from 'react-native-swiper';
import style from './style';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';



const Home = () => {
  const navigation = useNavigation();

    return (
        
        <><Swiper showsButtons={false}>
          
        <View style={{
          flex: 1,
          backgroundColor: colors.white,
        }}>
          
          <Image source={require('../../assets/images/laundry.png')} style={{ width: 500, height: 300, resizeMode: 'cover', alignSelf: 'center' }} />

          <View style={{ alignItems: 'flex-start', position: 'relative', top: -24, borderRadius: 5, paddingHorizontal: 18, }}>
            <CustomButton title="Laundry.io" />
          </View>

          <Text style={{
            color: colors.black,
            paddingTop: 25,
            fontSize: 18,
            fontFamily: 'Lato-Regular',
          }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Text>

            <TouchableOpacity 
            
            style={{ alignItems: 'flex-end',position: 'relative', bottom: -135,paddingRight:10 }}>
          <Text style={{
            fontSize: 18,
            color: colors.primaryGreen,
          }}>Next</Text>
        </TouchableOpacity>
        </View>

        <View style={{
           flex: 1,          
           backgroundColor:colors.primaryGreen,
           position: 'relative', 
          overflow:'visible',
          }}>
           <Image source={require('../../assets/images/laundry.png')} style={{ width: 500, height: 300, resizeMode: 'cover', alignSelf: 'center' }} />

          <View style={{ alignItems: 'flex-start', position: 'relative', top: -24, borderRadius: 5, paddingHorizontal: 18, }}>
          <CustomButton title="Laundry.io"               
                 style={{backgroundColor:colors.white,title: { color: colors.primaryGreen,fontFamily:'Lato-Bold',fontSize:16 } }} />
          </View>

          <Text style={{
            color: colors.white,
            paddingTop: 25,
            fontSize: 18,
            fontFamily: 'Lato-Regular',
          }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Text>

            <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
            style={{ alignItems: 'flex-end',position: 'relative', bottom: -135,paddingRight:10 }}>
          <Text style={{
            fontSize: 18,
            color: colors.white,
          }}>Next</Text>
        </TouchableOpacity>
        </View>
       
      </Swiper>
     </>
     
    );

};

export default Home;