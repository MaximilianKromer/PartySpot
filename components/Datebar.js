import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { HeaderStyles } from '../styles/SpecialComponents';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { subDays, addDays, format } from 'date-fns';
import { de } from 'date-fns/locale';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../state/slices/uiSlice';

export default function Datebar(props) {
    const dispatch = useDispatch();
    const date = new Date(useSelector(state => state.ui.date));

    const options = { locale: de };

    return (
        <View style={[HeaderStyles.header, HeaderStyles.dateBar]}>
            <TouchableOpacity style={{paddingHorizontal: 12, paddingVertical: 1, }} onPress={() => dispatch(setDate(subDays(date, 1).toString()))}>
                <Ionicons name="ios-arrow-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={HeaderStyles.title}>{format(date, 'eeeeee, d. MMMM', options)}</Text>
            <TouchableOpacity style={{paddingHorizontal: 12, paddingVertical: 1, }} onPress={() => dispatch(setDate(addDays(date, 1).toString()))}>
                <Ionicons name="ios-arrow-forward" size={28} color="black" />
            </TouchableOpacity>
        </View>
    );
}