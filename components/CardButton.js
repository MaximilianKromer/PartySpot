import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CardStyle } from '../styles/BasicComponents';

export default function CardButton(props) {

    const filledStyle = props.filled ? CardStyle.filled : null;
    const filledTextStyle = props.filled ? CardStyle.btnfilledtext : null;
    const dangerStyle = props.danger ? CardStyle.danger : null;
    const disabledStyle = props.disabled ? CardStyle.disabled : null;

    const text = props.text ? <Text style={[CardStyle.btntext, filledTextStyle, dangerStyle]}>{props.text}</Text> : null;

    return (
        <TouchableOpacity style={[CardStyle.card, filledStyle, disabledStyle]} onPress={props.onPress}>
            {text}
            {props.children}
        </TouchableOpacity>
    );
}