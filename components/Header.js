import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HeaderStyles } from '../styles/SpecialComponents';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Header(props) {
    let backBtn = null;
    let favIcon = null;

    if (props.backButton) {
        const navigation = useNavigation();
        backBtn = (
            <TouchableOpacity style={HeaderStyles.backBtn} onPress={() => navigation.goBack()}>
                <Ionicons name="ios-arrow-back" size={22} color={'#000000'} />
            </TouchableOpacity>
        );
    }

    if (props.favouriteIcon) {
        favIcon = (
            <TouchableOpacity style={HeaderStyles.favBtn} onPress={() => props.onPressFavourite() }>
                { props.isFavourite ? <Ionicons name="ios-star" size={26} color={'#000000'} /> : <Ionicons name="ios-star-outline" size={26} color={'#000000'} />}
            </TouchableOpacity>
        );
    }

    return (
        <View style={HeaderStyles.header}>
            {backBtn}
            <Text style={HeaderStyles.title}>{props.title}</Text>
            {favIcon}
        </View>
    );
}