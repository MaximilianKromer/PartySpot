import React from 'react';
import { View, Text } from 'react-native';
import { UnsupportedStyles } from '../styles/SpecialComponents';

export default function Unsupported(props) {
    return (
        <View style={UnsupportedStyles.container}>
            <Text style={UnsupportedStyles.text}><Text style={UnsupportedStyles.bold}>Unsupported</Text></Text>
        </View>
    );
}

export function UnsupportedForWeb(props) {
    return (
        <View style={UnsupportedStyles.container}>
            <Text style={UnsupportedStyles.text}>Diese Funktion wird im Browser leider <Text style={UnsupportedStyles.bold}>nicht unterstützt.</Text></Text>
            <Text style={UnsupportedStyles.text}>Bitte lade dir die App herunter.</Text>
        </View>
    );
}