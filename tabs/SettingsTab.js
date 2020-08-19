import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import CardButton from '../components/CardButton';
import Card from '../components/Card';


export default function SettingsTab(props) {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fbfbfb'}}>
                <Header title='Einstellungen'/>
                <View style={styles.container}>
                    <CardButton text='Standort aktivieren'/>
                    <CardButton text='Benachrichtigungen' disabled={true}/>
                    <CardButton text='Darkmode' disabled={true}/>
                    <CardButton text='Soenden' disabled={false}/>
                    <CardButton text='Feedback'/>
                    <CardButton text='Datenschutz'/>
                    <CardButton text='lokale Daten löschen' danger={true}/>
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