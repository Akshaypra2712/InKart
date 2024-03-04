import React from 'react';
import { View,Text, LogBox } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Splash';
import Home from '../Home';
import Login from '../Login';
import SignUp from '../SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../MainPage';
import CustomFooter from '../../components/CustomFooter';
import Washing from '../Washing';
import Timer from '../Timer';
import style from './style';
import MoreInfo from '../MoreInfo';
import Address from '../Address';
import Verification from '../Verification';
import Location from '../Location';
import Map from '../Map';
import Profile from '../Profile';
import ProAddress from '../ProAddress';
import Payment from '../Payment';
import Notification from '../Notification';
import Confirmation from '../Confirmation';
import ProfileInfo from '../ProfileInfo';
import TimeInfo from '../TimeInfo';





const stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Splash">
            <stack.Screen name="Splash" component={Splash} />
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="SignUp" component={SignUp} />
            <stack.Screen name="Footer" component={AppFooter} />
            <stack.Screen name="MoreInfo" component={MoreInfo} />
            <stack.Screen name="Address" component={Address} options={{ 
            headerShown:true, 
            }} />
            <stack.Screen name="Verification" component={Verification} />
            <stack.Screen name="Location" component={Location} />
            <stack.Screen name="Map" component={Map} options={{ 
            headerShown:true,
            title:'Choose Location' 
            }} />
            <stack.Screen name="ProAddress" component={ProAddress} options={{ 
            headerShown:true,
            title:'' 
            }} />
            <stack.Screen name="Payment" component={Payment} options={{ 
            headerShown:true,
            title:'' 
            }} />
            <stack.Screen name="Notification" component={Notification} options={{ 
            headerShown:true,
            title:'' 
            }} />
             <stack.Screen name="Confirmation" component={Confirmation} options={{ 
            headerShown:false, 
            }} />
            <stack.Screen name="ProfileInfo" component={ProfileInfo} options={{ 
            headerShown:true, 
            
            }} />
             <stack.Screen name="TimeInfo" component={TimeInfo} options={{ 
            headerShown:true, 
            
            }} />
        </stack.Navigator>
        </NavigationContainer>
    )

}
const Footer = createBottomTabNavigator();
    const AppFooter = () => {
        const navigation = useNavigation();
        return (
            <Footer.Navigator  tabBar={ props => <CustomFooter {...props}/>} 
            
            screenOptions={{                
            headerTitleAlign:'left',
            headerTitleStyle:style.title,
            
            }}> 
                <Footer.Screen name="MainPage" component={MainPage}  options={{ 
            headerShown:false, 
            
            }}/>
             <Footer.Screen name="Washing" component={Washing} options={{ 
            headerShown:false, 
            }} />
             <Footer.Screen name="Timer" component={Timer} options={{ 
            headerShown:false, 
            }} />

            <Footer.Screen name="Profile" component={Profile} options={{ 
            headerShown:false, 
            }} />
           
                
                

                </Footer.Navigator>
        );
         };

export default App;