import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';


export default function SettingsTab(props) {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#7cc'}}>
            <Header title='Einstellungen'/>
                <Text style={styles.text} >Settings</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        marginVertical: 6,
    },
});