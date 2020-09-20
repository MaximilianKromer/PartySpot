import React, { useState } from 'react';
import { View, Text, SectionList, RefreshControl } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import EventItem from '../components/EventItem';
import SectionHeader from '../components/SectionHeader';
import Separator from '../components/Separator';
import Searchbar from '../components/Searchbar';
import FilterPopup from '../components/FilterPopup';
import { useSelector } from 'react-redux';


export default function ListTab(props) {
    //const [refreshing, setRefreshing] = useState(false);
    const refreshing = useSelector(state => state.events.fetching);

    const events = useSelector(state => state.events.filtered);
    // const events = [{ date: 'Keine Suchergebnisse', data: [] }]

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Searchbar />
                <SectionList
                    sections={events}
                    refreshing={refreshing}
                    onRefresh={() => true} // adding refresh functionality in future updates
                    renderItem={({ item }) => <EventItem event={item} />}
                    renderSectionHeader={({ section: { date } }) => (
                        <SectionHeader date={date}/>
                    )}
                    ItemSeparatorComponent={(props) => <Separator/>}
                    stickySectionHeadersEnabled={true}
                />
            </View>
            <FilterPopup />
        </SafeAreaView>
    )
}