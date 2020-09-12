import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { eventStyles } from '../styles/Event';
import Tag from './Tag';

export default function EventItem(props) {
    /*
    const date_obj = (props.event.date) ? new Date(props.event.date) : null;
    const date = (props.event.date) ? date_obj.getDate() + '.' + (date_obj.getMonth() + 1) + '. ' : null;
    */

    let tags = [];
    const rootTags = props.event.tags ? props.event.tags : [];
    rootTags.forEach((tag, index) => tags.push(<Tag key={index} text={tag}/>))

    const time = (props.event.date) ? 'Ab ' + props.event.time.slice(0, 5) + ' Uhr' : null;

    return (
        <View style={styles.wrapper}>
              <Text style={eventStyles.headline} >{props.event.title}</Text>
              <View style={styles.locationContainer}>
                  <Text style={eventStyles.location} >{props.event.location}</Text>
                  <Text style={eventStyles.distance} >{ props.event.distance ? props.event.distance + ' km' : null }</Text>
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: 10}}>
                    {tags}
                </View>
              <Text style={eventStyles.time} >{ time }</Text>
              <Text style={eventStyles.text} numberOfLines={6}>{props.event.description}</Text>
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