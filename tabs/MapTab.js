import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function MapTab(props) {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#7cc'}}>
                <Text style={styles.text} >Map</Text>
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