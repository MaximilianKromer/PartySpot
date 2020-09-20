import React, { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout } from 'react-native-maps';

export default function LocationPreview(props) {
    const [region, setRegion] = useState({
        latitude: Number(props.latitude),
        longitude: Number(props.longitude),
        latitudeDelta: 0.0101,
        longitudeDelta: 0.0101,
    });

    return (
        <MapView 
            style={styles.map} 
            initialRegion={region}
            onRegionChange={setRegion}
        >
            <Marker
                coordinate={{
                    latitude: Number(props.latitude),
                    longitude: Number(props.longitude),
                }}
            />
        </MapView>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 25,
        marginHorizontal: 10,
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    map: {
        alignSelf: 'stretch',
        height: 250,
    }
});