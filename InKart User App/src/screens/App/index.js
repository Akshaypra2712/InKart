/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Login from "../Login";
import SignUp from "../SignUp";
import LoginPhone from "../LoginPhone";
import Home from "../Home";
import {DimensionContextProvider} from '../../context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Categories from "../Categories";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../Cart";
import CustomDrawer from "../../components/CustomDrawer";
import CustomFooter from "../../components/CustomFooter";
import Search from "../Search";
import Offers from "../Offers";
import Orders from "../Orders";
import Wishlist from "../Wishlist";
import Account from "../Account";
import style from "./style";
import { Provider, useSelector } from "react-redux";
import { store } from "../../storage/store";
import Splash from "../Splash";
import Shop from "../Shop";
import ProductDetails from "../ProductDetails";
import Review from "../Review";
import AddAddress from "../AddAddress";
import { enableLatestRenderer } from "react-native-maps";
import OrderDetails from "../OrderDetails";


const Drawer = createDrawerNavigator();
const AppDrawer = () => {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator   initialRouteName="MyFooter" screenOptions={{ headerTitleAlign:'left',
        headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:22} }}drawerContent={ props => <CustomDrawer {...props}/>} 
      > 
            <Drawer.Screen name="MyFooter" component={AppFooter} options={{headerShown:false}} />
            <Drawer.Screen name="Categories" component={Categories} />
            <Drawer.Screen name="Orders" component={Orders} />
            <Drawer.Screen name="OrderDetails" component={OrderDetails} />
            <Drawer.Screen name="Wishlist" component={Wishlist} />
            <Drawer.Screen name="Account" component={Account} />
            <Drawer.Screen name="Shop" component={Shop} screenOptions={{
                headerStyle: {
                    height:60,
                }
            }} />
            <Drawer.Screen name="ProductDetails" component={ProductDetails} />
            <Drawer.Screen name="Review" component={Review} />
            <Drawer.Screen name="AddAddress" component={AddAddress} />





        </Drawer.Navigator>
    );
     };

    const Footer = createBottomTabNavigator();
    const AppFooter = () => {
        const navigation = useNavigation();
        return (
            <Footer.Navigator  tabBar={ props => <CustomFooter {...props}/>} 
            
            screenOptions={{                
            headerTitleAlign:'left',
            headerTitleStyle:style.title,
            
            }}> 
                <Footer.Screen name="Home" component={Home}  options={{
            headerShown:false, 
            }}/>
                <Footer.Screen name="Categories" component={Categories}  />
                <Footer.Screen name="Search" component={Search} />
                <Footer.Screen name="Offers" component={Offers} />
                <Footer.Screen name="Cart" component={Cart} />

                </Footer.Navigator>
        );
         };
const AppStack = createNativeStackNavigator();


const AppNavigation = () => {
    const [loading, setLoading] = useState(true);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
      }, [isLoggedIn]) 
    
   
    return (
       
        <DimensionContextProvider>
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                {loading ? (<AppStack.Screen name ="Splash" component={Splash} />
                ) : (
                <>

                    {isLoggedIn ? (<AppStack.Screen name="MyDrawer" component={AppDrawer} />
                ): (
                    <>
                <AppStack.Screen name ="Login" component={Login} />
                <AppStack.Screen name ="SignUp" component={SignUp} />
                <AppStack.Screen name ="LoginPhone" component={LoginPhone} />
                </>
                )}
                </>
                )}
                
                
                

            </AppStack.Navigator>
            
        </NavigationContainer>
        </DimensionContextProvider>
 
    )
}

const App = () => {
    useEffect(() => {
      enableLatestRenderer();
    }, []);
    
    return (
        <Provider store={store}>
            <AppNavigation/>
                   </Provider>
    )
}

export default App;


