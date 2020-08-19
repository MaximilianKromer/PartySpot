import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Tag from './Tag';
import { HeaderStyles } from '../styles/SpecialComponents';

export default function Searchbar(props) {
    return (
        <View style={HeaderStyles.header}>
            <Tag text="Berlin" />
            <Tag text="Park" />
            <Tag text="4Free" />
        </View>
    );
}