import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Linking, Platform } from 'react-native';
import { eventStyles } from '../styles/Event';

export default function WebsiteButton(props) {
    let ticketComp = null;
    let websiteComp = null;
    let noWebsite = null;

    if (props.navigation) {
        if (props.latitude && props.longitude) {
            if (Platform.OS == 'android') {
                return (
                    <View style={styles.navigationContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL('geo:0,0?q=' + props.latitude + ',' + props.longitude + '(PartySpot)')}><Text style={eventStyles.navBtn}>Starte Navigation</Text></TouchableOpacity>
                    </View>
                );
            } else if (Platform.OS == 'ios') {
                return (
                    <View style={styles.navigationContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL('http://maps.apple.com/?q=PartySpot&ll=' + props.latitude + ',' + props.longitude)}><Text style={eventStyles.navBtn}>Starte Navigation</Text></TouchableOpacity>
                    </View>
                );
            } else {
                return (
                    <View style={styles.navigationContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + props.latitude + ',' + props.longitude)}><Text style={eventStyles.navBtn}>Starte Navigation</Text></TouchableOpacity>
                    </View>
                );
            }
        }
        return null;
    }

    if (props.ticketUrl) {
        const url = props.ticketUrl.startsWith('http://') || props.ticketUrl.startsWith('https://') ? props.ticketUrl : 'http://' + props.ticketUrl;
        ticketComp = (<TouchableOpacity onPress={() => Linking.openURL(url)}><Text style={eventStyles.website}>Tickets</Text></TouchableOpacity>);
    }

    if (props.websiteUrl) {
        const url = props.websiteUrl.startsWith('http://') || props.websiteUrl.startsWith('https://') ? props.websiteUrl : 'http://' + props.websiteUrl;
        websiteComp = (<TouchableOpacity onPress={() => Linking.openURL(url)}><Text style={eventStyles.website}>Website</Text></TouchableOpacity>);
    }

    if (!ticketComp && !websiteComp) {
        noWebsite = (<Text style={[eventStyles.website, {color: '#999999'}]}>Keine Website</Text>);
    }

    return (
        <View style={styles.container}>
            { ticketComp }
            { websiteComp }
            { noWebsite }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 25,
        marginHorizontal: 10,
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
        marginBottom: 25,
        marginHorizontal: 10,
    },
});