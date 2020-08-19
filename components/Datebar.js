import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { HeaderStyles } from '../styles/SpecialComponents';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Datebar(props) {
    const [day, setDay] = useState(14)

    return (
        <View style={[HeaderStyles.header, HeaderStyles.dateBar]}>
            <TouchableOpacity style={{paddingHorizontal: 12, paddingVertical: 1, }} onPress={() => setDay(day - 1)}>
                <Ionicons name="ios-arrow-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={HeaderStyles.title}>{day}. August</Text>
            <TouchableOpacity style={{paddingHorizontal: 12, paddingVertical: 1, }} onPress={() => setDay(day + 1)}>
                <Ionicons name="ios-arrow-forward" size={28} color="black" />
            </TouchableOpacity>
        </View>
    );
}