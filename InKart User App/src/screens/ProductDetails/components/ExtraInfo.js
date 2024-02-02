/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import { useDimensionContext } from "../../../context";
import {  Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from "./style";
import colors from "../../../components/common/colors";
import Accordion from 'react-native-collapsible/Accordion';

const ExtraInfo = props => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
    const [currActiveSections, setactiveSections] = useState([0]);
    const DetailsArray = [{
        title:'Manufacture Details',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took',
    },
    {
        title:'Product Disclaimer',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took',
    },
    {
        title:'Features & Details',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took',
    },
];

    const _renderHeader = sections => {
        return(
            <View style={responsiveStyle.rendHView}>
                <Text style={responsiveStyle.descHeader}>{sections.title}</Text>
                <AntDesign name="down" size={25} color={colors.grey} />


            </View>
        );
    };

    const _renderContent = sections => {
        return(
            <View>
                  <Text style={responsiveStyle.desc}>{sections.content}</Text>

            </View>
        );
    };

    const _updateSections = activeSections => {
        setactiveSections(activeSections);
    };
    return <>
        <Accordion
        activeSections={currActiveSections}
        sections={DetailsArray}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        underlayColor={'transparent'}
        sectionContainerStyle={{paddingVertical:10,borderBottomColor:colors.grey,borderBottomWidth:1}}/>
    </>;
}


export default ExtraInfo;