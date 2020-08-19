import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Tag from './Tag';
import { searchBarStyles } from '../styles/SpecialComponents';

export default function Searchbar(props) {
    return (
        <View style={searchBarStyles.header}>
            <Tag text="Berlin" />
            <Tag text="Park" />
            <Tag text="4Free" />
        </View>
    );
}