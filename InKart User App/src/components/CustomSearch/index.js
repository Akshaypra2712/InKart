/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text, Image ,TextInput} from 'react-native';
import style from './style'
import colors from "../../components/common/colors";
import { useDimensionContext } from "../../context";


const CustomSearch = props => {
    const {filter,placeholder,mike,onChangeText={}} = {...props};
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

    
    return(
        <View style={[filter ? responsiveStyle.newContainer : responsiveStyle.container]}>
            
            <View style={[filter ? responsiveStyle.newStyle : responsiveStyle.search]}>
            <View style={responsiveStyle.innerView}>
            <Image source={require('../../assets/images/search.png')} style={responsiveStyle.searchIcon}/>
            
            <TextInput 
            placeholder={placeholder ? placeholder : "Search Here" }
            placeholderTextColor={colors.black_level_2} 
            style={responsiveStyle.textInput}
            selectionColor={colors.primaryGreen}
            onChangeText={text => onChangeText(text)}/>
              {mike ? 
            (<Image source={require('../../assets/images/mike.png')} style={responsiveStyle.searchIcon}/>)
             : null}
            </View>
          
            
            </View>
            {filter? 
            <Text style={responsiveStyle.filter}>Filter</Text>
            : null}
            

        </View>
    )
};

export default CustomSearch;