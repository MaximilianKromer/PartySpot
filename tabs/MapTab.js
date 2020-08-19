import React from 'react';
import { View, Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Datebar from '../components/Datebar';

const Map = Platform.select({
    native: () => require('../components/Map').default,
    default: () => require('../components/Unsupported').UnsupportedForWeb
})();

export default function MapTab(props) {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fbfbfb'}}>
                <Datebar />
                <Map />
            </View>
        </SafeAreaView>
    )
}