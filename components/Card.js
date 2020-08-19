import React from 'react';
import { View } from 'react-native';
import { CardStyle } from '../styles/BasicComponents';

export default function Card(props) {
    return (
        <View style={CardStyle.card}>
            {props.children}
        </View>
    );
}