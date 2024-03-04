import React, {useState} from 'react';
import { View,Text } from 'react-native';
import colors from '../../common/colors';
import CommonHeader from '../../components/CommonHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const Washing = () => {
    const [from, setFrom] = useState('');

    const [qun, setQun] = useState('');

    const navigation = useNavigation();
    


    return (
        
        <View style={{flex:1}}>
            <CommonHeader title={"Washing"}/>
            
            <Text style={{
                color: colors.black,
                fontSize: 18,
                fontFamily: 'Lato-Regular',
                marginTop: 10,
                margin:20,
                padding:5
            }}>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour, </Text>

                <View style={{position: 'relative' }}>
            <CustomButton title="When"  style={{
                position: 'absolute',
                top: -20,
                left: 0,
                zIndex: 1, // Ensure the button is above the text input
                width: 80,
                height: 40,
                margin:10
            }}/>

<CustomTextInput type='primary'  placeholder="Today" 

style={{
      paddingLeft: 70 // Adjust to the width of the button + any additional spacing
    }} />
             </View>


             <View style={{position: 'relative' }}>
            <CustomButton title="From"  style={{
                position: 'absolute',
                top: -20,
                left: 0,
                zIndex: 1, // Ensure the button is above the text input
                width: 80,
                height: 40,
                margin:10
            }}/>

<CustomTextInput type='primary' 
 handleText={text => setFrom(text)}
placeholder="238 alahabadh street,sanitorium,chennai" style={{
      paddingLeft: 70 // Adjust to the width of the button + any additional spacing
    }} />
             </View>


             <View style={{position: 'relative' }}>
            <CustomButton title="Quantity"  style={{
                position: 'absolute',
                top: -20,
                left: 0,
                zIndex: 1, // Ensure the button is above the text input
                width: 80,
                height: 40,
                margin:10
            }}/>

<CustomTextInput type='primary' 
handleText={text => setQun(text)}
 placeholder="0 nos" style={{
      paddingLeft: 70 // Adjust to the width of the button + any additional spacing
    }} />
             </View>



             <CustomButton title="Confirm Booking"
                onPress={() => navigation.navigate("Address")}
                 style={{textAlign:'center',justifyContent:'center',alignSelf:'center',width:'45%',backgroundColor:colors.secondaryGreen,marginTop: 30,title: { color: colors.primaryGreen,fontFamily:'Lato-Bold',fontSize:20 } }} />


            <Text style={{
                color: colors.black,
                fontSize: 20,
                fontFamily: 'Lato-Bold',
                textAlign:'left',
                padding:10
            }}>Note:</Text>

            <Text style={{
                color: colors.black,
                fontSize: 18,
                fontFamily: 'Lato-Regular',
                textAlign:'left',
                padding:10
            }}>Price is decided by the pickup man at the time of collecting  your clothes</Text>


        </View>
     
    )

}

export default Washing;