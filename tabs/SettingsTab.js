import React from 'react';
import { StyleSheet, View, Linking, Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import CardButton from '../components/CardButton';
import Card from '../components/Card';
import { useDispatch } from 'react-redux';
import { resetUI } from '../state/slices/uiSlice';
import { resetEvents } from '../state/slices/eventsSlice';


export default function SettingsTab(props) {
    const dispatch = useDispatch();

    const locationActivationBtn = Platform.select({
        native: () => <CardButton text='Standort aktivieren' onPress={() => Linking.openSettings()}/>,
        default: () => null
    })();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fbfbfb'}}>
                <Header title='Einstellungen'/>
                <View style={styles.container}>
                    { locationActivationBtn }
                    <CardButton text='Benachrichtigungen' disabled={true}/>
                    <CardButton text='Darkmode' disabled={true}/>
                    <CardButton text='Spenden' disabled={true}/>
                    <CardButton text='FAQ' onPress={() => Linking.openURL('https://mks-software.de/partyspot/faq')}/>
                    <CardButton text='Feedback' onPress={() => Linking.openURL('mailto:a.makro@web.de?subject=Feedback%20PartySpot')}/>
                    <CardButton text='Datenschutz' onPress={() => Linking.openURL('https://mks-software.de/partyspot/datenschutz')}/>
                    <CardButton text='lokale Daten löschen' danger={true} onPress={() => {
                        dispatch(resetUI());
                        dispatch(resetEvents());
                    }}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});