import React from 'react';
import { View, Text } from 'react-native';
import { buttonStyles } from '../styles/Button';

export default function SectionHeader(props) {
    return (
        <View style={{alignItems: 'center', marginTop: 15, marginBottom: 10}}>
            <View style={[buttonStyles.sectionHeader]}>
                <Text style={buttonStyles.sectionHeaderText} >{props.date}</Text>
            </View>
        </View>
    );
}