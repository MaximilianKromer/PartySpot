import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

const Map = Platform.select({
    native: () => require('../components/Map').default,
    default: () => require('../components/Unsupported').UnsupportedForWeb
})();

export default function MapTab(props) {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fbfbfb'}}>
                <Header title='Karte'/>
                <Map />
            </View>
        </SafeAreaView>
    )
}