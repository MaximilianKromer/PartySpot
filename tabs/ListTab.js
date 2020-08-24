import React from 'react';
import { View, Text, SectionList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import EventItem from '../components/EventItem';
import SectionHeader from '../components/SectionHeader';
import Separator from '../components/Separator';
import Searchbar from '../components/Searchbar';
import FilterPopup from '../components/FilterPopup';


export default function ListTab(props) {

    const events = [
        {
            date: '14. August',
            data: [
                {
                    id: 1,
                    name: 'Ringbahnsaufen',
                    location: 'U-Bahnhof Schlosspark',
                    distance: 12,
                    time: 'Ab 22 Uhr',
                    tags: ['Ab 16', 'Park'],
                    description: 'Lorem Ipsum dsafjk as sdahf. sdwiob av afiensa f asdfajsdf'
                }, {
                    id: 2,
                    name: 'Geburtstag am Lietzensee',
                    location: 'Lietzensee',
                    distance: 7,
                    time: 'Ab 18 Uhr',
                    tags: ['Club', '4Free'],
                    description: 'Lorem Ipsum dsafjk as sdahf. sdwiob av afiensa f asdfajsdf'
                },
            ]
        }, {
            date: '17. August',
            data: [
                {
                    id: 1,
                    name: 'Ringbahnsaufen',
                    location: 'U-Bahnhof Schlosspark',
                    distance: 12,
                    time: 'Ab 22 Uhr',
                    tags: ['Festival'],
                    description: 'Lorem Ipsum dsafjk as sdahf. sdwiob av afiensa f asdfajsdf'
                }, {
                    id: 2,
                    name: 'Geburtstag am Lietzensee dfshjfd jhfdsh',
                    location: 'Lietzensee',
                    distance: 7,
                    time: 'Ab 18 Uhr',
                    tags: ['BlahBlah', 'Park'],
                    description: 'Lorem Ipsum dsafjk as sdahf. sdwiob av afiensa f asdfajsdf'
                },
            ]
        }, {
            date: '23. August',
            data: [
                {
                    id: 1,
                    name: 'Ringbahnsaufen',
                    location: 'U-Bahnhof Schlosspark',
                    distance: 12,
                    time: 'Ab 22 Uhr',
                    tags: [],
                    description: 'Lorem Ipsum dsafjk as sdahf. sdwiob av afiensa f asdfajsdf'
                }, {
                    id: 2,
                    name: 'Geburtstag am Lietzensee',
                    location: 'Lietzensee',
                    distance: 7,
                    time: 'Ab 18 Uhr',
                    tags: ['Club', 'Park', 'Ab 16', '4Free'],
                    description: 'Lorem Ipsum dsafjk as sdahf. sdwiob av afiensa f asdfajsdf'
                },
            ]
        },
    ];

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Searchbar />
                <SectionList
                    sections={events}
                    refreshing={false}
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