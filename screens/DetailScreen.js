import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { eventStyles } from '../styles/Event';
import Tag from '../components/Tag';
import WebsiteButton from '../components/WebsiteButton';

const LocationPreview = Platform.select({
    native: () => require('../components/LocationPreview').default,
    default: () => require('../components/Unsupported').default
})();


export default function DetailScreen(props) {
    const [favourite, setFavourite] = useState(false);
    const event = props.route.params.event;

    let tags = [];
    const rootTags = event.tags ? event.tags : [];
    rootTags.forEach((tag, index) => tags.push(<Tag key={index} text={tag}/>))

    const time = (event.date) ? 'Ab ' + event.time.slice(0, 5) + ' Uhr' : null;

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title='Details' backButton={true} favouriteIcon={true} isFavourite={favourite} onPressFavourite={() => setFavourite(favourite ? false : true)}/>
            <ScrollView style={{flex: 1, backgroundColor: '#fbfbfb'}}>
                <View style={styles.container}>
                    <Text style={eventStyles.time}>{event.dateString}</Text>
                    <Text style={eventStyles.headline} >{event.title}</Text>
                    <View style={styles.locationContainer}>
                        <Text style={eventStyles.location} >{event.location}</Text>
                        <Text style={eventStyles.distance} >{ event.distance ? event.distance + ' km' : null }</Text>
                    </View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: 10}}>
                            {tags}
                        </View>
                    <Text style={eventStyles.time} >{ time }</Text>
                    <Text style={eventStyles.text}>{event.description}</Text>
                    <WebsiteButton ticketUrl={event.tickets} websiteUrl={event.website}/>
                </View>
                <LocationPreview latitude={event.latitude} longitude={event.longitude}/>
                <WebsiteButton navigation={true} latitude={event.latitude} longitude={event.longitude}/>
                <View style={styles.container}>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 15,
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});