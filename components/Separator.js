import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../styles/Global';

export default function Separator(props) {
    return (
        <View style={{
                backgroundColor: colors.lightGrey,
                height: 1,
                marginHorizontal: 30,
                marginTop: 15,
                marginBottom: 10,
            }}>
        </View>
    );
}