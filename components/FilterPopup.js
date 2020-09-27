import React, { useEffect, useRef, useState } from 'react';
// import Modal from 'react-native-modal';
// import Modal from 'modal-enhanced-react-native-web';
import { View, StyleSheet, Platform, Text, TouchableOpacity } from 'react-native';
import { modalStyles } from '../styles/Modal';
import Slider from '@react-native-community/slider';
import Tag from './Tag';
import { buttonStyles } from '../styles/Button';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup, setDistance, setCity, toogleTag } from '../state/slices/uiSlice';
import { fetchByCity } from '../state/slices/eventsSlice';

const Modal = Platform.select({
    native: () => require('react-native-modal').default,
    default: () => require('modal-enhanced-react-native-web').default
})();

export default function FilterPopup(props) {
    const isFirstRun = useRef(true);

    const [sliderValue, setSliderValue] = useState(25);
    const popupOpened = useSelector(state => state.ui.popupOpened);
    const city = useSelector(state => state.ui.city);
    const tags = useSelector(state => state.ui.tags);
    const dispatch = useDispatch();

    const berlinButtonStyle = city ? modalStyles.buttonSelected : modalStyles.button;
    const berlinButtonTextStyle = city ? modalStyles.buttonTextSelected : modalStyles.buttonText;

    const sliderDisabled = city ? modalStyles.disabled : null;

    let tagsComponent = [];
    tags.forEach((tag, index) => {
        tagsComponent.push(
            <TouchableOpacity key={index} style={styles.moremargin} onPress={() => dispatch(toogleTag(index))}>
                <Tag text={tag.text} disabled={!tag.activated}/>
            </TouchableOpacity>
        );
    });
    useEffect (() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        dispatch(setDistance(sliderValue));
    }, [sliderValue]);
    
    return (
        <Modal
            style={styles.modal}
            isVisible={popupOpened}
            onBackdropPress={() => dispatch(closePopup())}
            backdropOpacity={0.6}
            backdropTransitionOutTiming={0}
            coverScreen={false}
            onSwipeComplete={() => dispatch(closePopup())}
            swipeDirection={'down'}
            onBackButtonPress={() => dispatch(closePopup())}
            propagateSwipe={true}
        >
            <View style={styles.modalContainer}>
                <Text style={modalStyles.headline}>Stadt</Text>

                <View style={styles.options} >
                    <TouchableOpacity style={berlinButtonStyle} onPress={() => dispatch(setCity('Berlin'))}>
                        <Text style={berlinButtonTextStyle} >Berlin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={modalStyles.button} onPress={() => (true)}>
                        <Text style={modalStyles.buttonText} >coming soon...</Text>
                    </TouchableOpacity>
                </View>

                <Text style={modalStyles.headline} >Umkreis</Text>
                    
                <Text style={[modalStyles.sliderText, sliderDisabled]} >{sliderValue} km</Text>

                <Slider
                        value={sliderValue}
                        onValueChange={(value) => setSliderValue(value)}
                        style={[styles.sliderStyle, sliderDisabled]}
                        minimumValue={1}
                        maximumValue={60}
                        step={1}
                        minimumTrackTintColor='#607D8B'
                        maximumTrackTintColor="#CCCCCC"
                        thumbTintColor='#607D8B'
                        thumbStyle={styles.thumbStyle}
                    />

                <Text style={modalStyles.headline} >Filter</Text>

                <View style={styles.tags}>
                    {tagsComponent}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        margin: 0,
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        bottom: 0, 
        position: 'absolute',
        width: '100%',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    options: {
        flexDirection: 'row',
        marginBottom: 0,
        marginStart: 10,
        marginTop: 0,
    },
    thumbStyle: {
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    sliderStyle: {
        width: '90%',
        marginTop: 5,
        marginBottom: 10,
        alignSelf: 'center',
    },
    tags: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 15,
        marginTop: 10,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    moremargin: {
        paddingHorizontal: 5,
        paddingTop: 5,
    },
});