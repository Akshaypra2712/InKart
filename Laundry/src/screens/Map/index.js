import React, {useState, useLayoutEffect} from 'react';
import { View,Text,ScrollView,Modal,ActivityIndicator,TouchableOpacity} from 'react-native';
import MapView,  { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
navigator.geolocation = require('@react-native-community/geolocation');
import colors from '../../common/colors';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import  Geolocation  from "@react-native-community/geolocation"
import Snackbar from "react-native-snackbar";





const Map = () => {

    const [address, setAddress] = useState(null);
    const [newPosition, setNewPosition] = useState(null);
    const [loading, setLoading] = useState(false);
    const [markerPosition, setMarkerPosition] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(null); 


    const navigation = useNavigation();

    const getCurrentLocation = () => {
      const location =  Geolocation.getCurrentPosition(info => {
          setNewPosition({
            latitude: info.coords?.latitude ?? 0,
            longitude: info.coords?.longitude ?? 0,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          });
        setAddress(null);
        setSelectedAddress(location);
        });
        Snackbar.show({
          text: 'Current location is fetched',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.primaryGreen,
          textColor: colors.white,
        });
      };
      const handleDone = () => {
                
            navigation.navigate('Login');
       
    };
    
    return (
        <View style={{ flex: 1 }}>
            <Modal animationType="fade" transparent={true} visible={loading}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                    <ActivityIndicator size="large" color={colors.white} />
                </View>
            </Modal>

            <ScrollView>
                <GooglePlacesAutocomplete
                    placeholder="Search Location"
                    currentLocation={true}
                    fetchDetails={true}
                    currentLocationLabel="Current Location"
                    query={{
                        key: 'YOUR_GOOGLE_MAPS_API_KEY',
                        language: 'en',
                    }}
                    styles={{
                        textInput: {
                            fontFamily: 'Lato-Regular',
                            fontSize: 16,
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: colors.primaryGreen,
                            color: colors.black,
                            width: 60,
                            height: 50,
                            margin: 10,
                            alignSelf: 'center',
                            backgroundColor: colors.secondaryGreen,
                        },
                        predefinedPlacesDescription: {
                            fontFamily: 'Lato-Regular',
                            fontSize: 16,
                            color: colors.black,
                        },
                    }}
                    onPress={(data, details) => {
                        try {
                            console.log(data, details);
                            const location = data?.geometry?.location ?? details?.geometry?.location;
                            const positionData = {
                                latitude: location?.lat ?? 0,
                                longitude: location?.lng ?? 0,
                                latitudeDelta: 0.001,
                                longitudeDelta: 0.001,
                            };
                            setNewPosition(positionData);
                            setAddress(data?.name ?? data?.description);
                            setMarkerPosition(positionData);
                            setSelectedAddress({ latitude: location?.lat ?? 0, longitude: location?.lng ?? 0 });
                        } catch (error) {
                            console.error('Error selecting location:', error);
                        }
                    }}
                />

                <MapView
                    style={{ flex: 1, height: 400 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    region={newPosition}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    zoomEnabled={true}
                    pitchEnabled={true}
                    rotateEnabled={true}
                    scrollEnabled={true}
                    provider={PROVIDER_GOOGLE}
                    showsMyLocationButton={true}
                >
                     {markerPosition && (
                        <Marker
                            coordinate={{ latitude: markerPosition.latitude, longitude: markerPosition.longitude }}
                            title="Selected Location"
                        />
                    )}
                </MapView>
                {address && (
          <View style={{paddingHorizontal: 15, paddingTop: 15}}>
            <Text
              style={{
                color: colors.black_level_3,
                fontFamily: 'Lato-Regular',
                fontSize: 18,
              }}>
              {address}
            </Text>
          </View>
        )}
         <TouchableOpacity
          style={{ padding:15,
            marginVertical:20,
            flexDirection:'row',
            alignItems:'center'}}
          onPress={getCurrentLocation}>
          <View style={{  borderRadius:8,
        padding:10,
        marginRight:10,
        backgroundColor:colors.primaryGreen}}>
          </View>
          <Text style={{ fontFamily:'Lato-Bold',
        fontSize:16,
        color:colors.black}}>Your Current Location</Text>
        </TouchableOpacity>

            </ScrollView>

            <CustomButton title="Done"
            onPress={handleDone}
             style={{ marginVertical: 10 ,alignItems:'center'}} />
        </View>
    );
};

export default Map;