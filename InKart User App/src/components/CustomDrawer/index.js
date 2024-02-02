/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text, Image,TouchableOpacity} from 'react-native';
import style from './style'
import colors from "../../components/common/colors";
import { useDimensionContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../storage/action";


const CustomDrawer = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const profileImage = useSelector(state => state.profileImage);
    const firstName = useSelector(state => state.firstName);
    const email = useSelector(state => state.email);
    const lastName = useSelector(state => state.lastName);

    const Contents = [{
        itemId: 0,
        itemName: 'Home',
        navigateTo: 'MyFooter',
        icon : require('../../assets/images/home.png'),
    },

    {
        itemId: 1,
        itemName: 'Shop by Category',
        navigateTo: 'Categories',
        icon : require('../../assets/images/category.png'),
    },

    {
        itemId: 2,
        itemName: 'Orders',
        navigateTo: 'Orders',
        icon : require('../../assets/images/orders.png'),
    },

    {
        itemId: 3,
        itemName: 'Your Wishlist',
        navigateTo: 'Wishlist',
        icon : require('../../assets/images/wishlist.png'),
    },

    {
        itemId: 4,
        itemName: 'Your Account',
        navigateTo: 'Account',
        icon : require('../../assets/images/user.png'),
    },
    
]; 

const handleSignout = () => {
    dispatch(signout());
}
    
    return(
        <View style={responsiveStyle.mainContainer}>

            { /* Profile */}
            <TouchableOpacity style={responsiveStyle.accountTouch}
            onPress={() => navigation.navigate('Account')}>
            <View style={responsiveStyle.accountImageview}>

                 <Image source={profileImage === '' ?
                 require('../../assets/images/dummy.png'): 
                 {uri:profileImage } }                
                 style={responsiveStyle.image}/>           
                </View> 
                <View style={responsiveStyle.nameView}>
                    <Text style={responsiveStyle.name}>{firstName} {lastName}</Text>
                    <Text style={responsiveStyle.email}>{email}</Text>
                    </View>
                </TouchableOpacity>
            { /* drawer contents*/}
            <View style={responsiveStyle.commonMargin}>
                <View>
                    {Contents.map((item,index) => { 
                        return (
                            <TouchableOpacity key={item.itemId}
                            onPress={() => navigation.navigate(item.navigateTo)}
                             style={responsiveStyle.drawerView}>
                            <View style={responsiveStyle.innerView}>
                        <Image source={item.icon} style={responsiveStyle.icon}
                             />
                    <Text style={responsiveStyle.drawerText}>{item.itemName}</Text>
                    </View>
                    <Image source={require('../../assets/images/right-arrow.png')} style={responsiveStyle.secondIcon}/>
                    </TouchableOpacity>
                        )
                    })}
                   
                   </View>
                
            </View> 
            { /* logout */}
            <View>
                <TouchableOpacity onPress={handleSignout} style={responsiveStyle.logoutView}>
                        <Image source={require('../../assets/images/right-arrow.png')} style={[responsiveStyle.icon,responsiveStyle.arrow]}
                             />
                    <Text style={responsiveStyle.logoutText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
  
            {/* contact support*/}
                    <View style={responsiveStyle.supportView}>
                        <Text style={responsiveStyle.supportHead}>Contact Support</Text>
                        <Text style={responsiveStyle.supportContent}>If you have any problems with the app,feel free to contact our 24 hours support</Text>
                        <View style={responsiveStyle.supportTouch}>                        
                    <Text style={responsiveStyle.supportText}>Contact</Text>
                </View>
                    </View>
                  
                
        </View>
    )
};

export default CustomDrawer;