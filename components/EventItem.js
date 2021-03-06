import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { eventStyles } from '../styles/Event';
import Tag from './Tag';

export default function EventItem(props) {
    /*
    const date_obj = (props.event.date) ? new Date(props.event.date) : null;
    const date = (props.event.date) ? date_obj.getDate() + '.' + (date_obj.getMonth() + 1) + '. ' : null;
    const time = (props.event.date) ? props.event.time.substr(0, 5) + ' Uhr' : null;
    */

    return (
        <View style={styles.wrapper}>
              <Text style={eventStyles.headline} >{props.event.name}</Text>
              <View style={styles.locationContainer}>
                  <Text style={eventStyles.location} >{props.event.location}</Text>
                  <Text style={eventStyles.distance} >{ props.event.distance ? props.event.distance + ' km' : null }</Text>
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: 10}}>
                    <Tag text='Ab 16'/>
                    <Tag text='Park'/>
                    <Tag text='Club'/>
                    <Tag text='Festival'/>
                    <Tag text='4Free'/>
                    <Tag text='Blablah'/>
                </View>
              <Text style={eventStyles.time} >{ props.event.time }</Text>
              <Text style={eventStyles.text} >{props.event.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 15,
        marginVertical: 0,
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});