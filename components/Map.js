import React, { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout } from 'react-native-maps';

export default function Map(props) {
    const [region, setRegion] = useState({
        latitude: 52.519802,
        longitude: 13.405156,
        latitudeDelta: 0.3701,
        longitudeDelta: 0.4301,
    });


    return (
        <MapView 
            style={styles.map} 
            initialRegion={region}
            onRegionChange={setRegion}
        >
            <Marker
                coordinate={{
                    latitude: 52.519802,
                    longitude: 13.405156,
                }}
                onPress={e => console.log(e.nativeEvent)}
                title='Geburtstag am Lietzensee dfshjfd jhfdsh'
                description='Ab 22 Uhr'
            />
            <Marker
                coordinate={{
                    latitude: 52.529802,
                    longitude: 13.415156,
                }}
                onPress={e => console.log(e.nativeEvent)}
                title='Geburtstag am Lietzensee dfshjfd jhfdsh'
                description='Lorem Ipsum hkjsdahf Lorem Ipsum dsafjk as sdahf. sdwiob av afiensa f asdfajsdf'
            >
                <Callout tooltip={true}>
                    <View style={[styles.container, props.style]}>
                        <View style={styles.bubble}>
                            <View style={styles.amount}><Text>Testasdf asdf asdfdf </Text></View>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </Callout>
            </Marker>
        </MapView>
    );
}


const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    bubble: {
        width: 140,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#4da2ab',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 6,
        borderColor: '#007a87',
        borderWidth: 0.5,
    },
    amount: {
        flex: 1,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: '#4da2ab',
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        alignSelf: 'center',
        marginTop: -0.5,
    },
});