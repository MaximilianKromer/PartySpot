import React from 'react';
import { View, Text, SectionList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import EventItem from '../components/EventItem';
import SectionHeader from '../components/SectionHeader';
import Separator from '../components/Separator';
import { useSelector } from 'react-redux';


export default function FavouritesTab(props) {

    const eventsRaw = useSelector(state => state.events.favourites);

    let eventsList = [];
    eventsRaw.forEach(event => {
        const index = eventsList.findIndex(el => el.date == event.dateString);
        if (index >= 0) {
            eventsList[index].data.push(event);
        } else {
            eventsList.push({date: event.dateString, data: [event]});
        }
    });

    eventsList = eventsList.length ? eventsList : [{ date: 'Keine Favoriten', data: [] }];


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Header title='Favoriten'/>
                <SectionList
                    sections={eventsList}
                    refreshing={false}
                    renderItem={({ item }) => <EventItem event={item} />}
                    renderSectionHeader={({ section: { date } }) => (
                        <SectionHeader date={date}/>
                    )}
                    ItemSeparatorComponent={(props) => <Separator/>}
                    stickySectionHeadersEnabled={true}
                />
            </View>
        </SafeAreaView>
    )
}