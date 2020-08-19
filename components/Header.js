import React from 'react';
import { View, Text } from 'react-native';
import { HeaderStyles } from '../styles/SpecialComponents';

export default function Header(props) {
    return (
        <View style={HeaderStyles.header}>
            <Text style={HeaderStyles.title}>{props.title}</Text>
        </View>
    );
}