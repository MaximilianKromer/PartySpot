import React from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Tag from './Tag';
import { HeaderStyles } from '../styles/SpecialComponents';
import { useDispatch, useSelector } from 'react-redux';
import { openPopup } from '../state/slices/uiSlice';

export default function Searchbar(props) {
    const city = useSelector(state => state.ui.city);
    const distance = useSelector(state => state.ui.distance);
    const tags = useSelector(state => state.ui.tags);
    const dispatch = useDispatch();

    const cityDistanceTag = city ? <Tag text={city} /> : <Tag text={distance + ' km'} />;

    let tagsComponent = [];
    tags.forEach((tag, index) => {
        if (tag.activated) {
            tagsComponent.push(
                <Tag text={tag.text} key={index} />
            );
        }
    });

    return (
        <TouchableOpacity style={HeaderStyles.header} activeOpacity={1} onPress={() => dispatch(openPopup())}>
            {cityDistanceTag}
            {tagsComponent}
        </TouchableOpacity>
    );
}