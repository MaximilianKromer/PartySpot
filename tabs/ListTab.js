import React from 'react';
import { StyleSheet, View, Text, SectionList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Tag from '../components/Tag';
import EventItem from '../components/EventItem';
import SectionHeader from '../components/SectionHeader';
import Separator from '../components/Separator';
import Searchbar from '../components/Searchbar';


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
                    description: 'Lorem Ipsum dsafjk as sdahf. sdwiob av afiensa f asdfajsdf'
                }, {
                    id: 2,
                    name: 'Geburtstag am Lietzensee',
                    location: 'Lietzensee',
                    distance: 7,
                    time: 'Ab 18 Uhr',
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
                    description: 'Lorem Ipsum dsafjk as sdahf. sdwiob av afiensa f asdfajsdf'
                }, {
                    id: 2,
                    name: 'Geburtstag am Lietzensee dfshjfd jhfdsh',
                    location: 'Lietzensee',
                    distance: 7,
                    time: 'Ab 18 Uhr',
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
                    description: 'Lorem Ipsum dsafjk as sdahf. sdwiob av afiensa f asdfajsdf'
                }, {
                    id: 2,
                    name: 'Geburtstag am Lietzensee',
                    location: 'Lietzensee',
                    distance: 7,
                    time: 'Ab 18 Uhr',
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        marginVertical: 6,
    },
});