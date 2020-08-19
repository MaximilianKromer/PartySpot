import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { buttonStyles } from '../styles/Button';
import { colors } from '../styles/Global';

export default function Tag(props) {

    let color;

    switch (props.text) {
        case 'Festival':
            color = colors.tag1;
            break;
        case 'Club':
            color = colors.tag2;
            break;
        case 'Park':
            color = colors.tag3;
            break;
        case 'Ab 16':
            color = colors.tag4;
            break;
        case '4Free':
            color = colors.tag5;
            break;
        default:
            color = colors.primary;
            break;
    }

    return (
        <TouchableOpacity style={[buttonStyles.tag, {backgroundColor: color}]} onPress={props.onPress}>
            <Text style={buttonStyles.text} >{props.text}</Text>
        </TouchableOpacity>
    );
}