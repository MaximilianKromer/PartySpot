import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { calcDistance } from '../helper/Distance';
import { fetchForMap } from '../state/slices/eventsSlice';

export default function Map(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [region, setRegion] = useState({
        latitude: 52.519802,
        longitude: 13.405156,
        latitudeDelta: 0.3701,
        longitudeDelta: 0.4301,
    });
    const lastMapPos = useSelector(state => state.events.lastMapPos);
    const fetching = useSelector(state => state.events.fetching);
    const events = useSelector(state => state.events.map);
    const date = useSelector(state => state.ui.date);

    if ((!lastMapPos || calcDistance(lastMapPos, region) > 15) && !fetching) {
        dispatch(fetchForMap({ latitude: region.latitude, longitude: region.longitude }));
    }

    const showableEvents = events.filter((event) => new Date(event.date).toDateString() == new Date(date).toDateString());

    let markerComps = [];
    showableEvents.forEach(event => {
        markerComps.push(
            <Marker
                key={event.id}
                coordinate={{
                    latitude: Number(event.latitude),
                    longitude: Number(event.longitude),
                }}
                onCalloutPress={e => navigation.navigate('details', { event: event })}
                title={event.title}
                description={'Ab ' + event.time.slice(0, 5) + ' Uhr | ' + event.location}
            />
        );
    });


    return (
        <MapView 
            style={styles.map} 
            initialRegion={region}
            onRegionChange={setRegion}
        >
            { markerComps }
            { /* <Marker
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
            </Marker> */ }
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