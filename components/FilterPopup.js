import React from 'react';
// import Modal from 'react-native-modal';
// import Modal from 'modal-enhanced-react-native-web';
import { View, StyleSheet, Platform, Text, TouchableOpacity } from 'react-native';
import { modalStyles } from '../styles/Modal';
import Slider from '@react-native-community/slider';
import Tag from './Tag';
import { buttonStyles } from '../styles/Button';

const Modal = Platform.select({
    native: () => require('react-native-modal').default,
    default: () => require('modal-enhanced-react-native-web').default
})();

export default function FilterPopup(props) {
    
    return (
        <Modal
            style={styles.modal}
            isVisible={true}    
        >
            <View style={styles.modalContainer}>
                <Text style={modalStyles.headline}>Stadt</Text>

                <View style={styles.options} >
                    <TouchableOpacity style={modalStyles.buttonSelected} >
                        <Text style={modalStyles.buttonTextSelected} >Berlin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={modalStyles.button} >
                        <Text style={modalStyles.buttonText} >cooming soon...</Text>
                    </TouchableOpacity>
                </View>

                <Text style={modalStyles.headline} >Umkreis</Text>
                    
                <Text style={modalStyles.sliderText} >25 km</Text>

                <Slider
                        value={25}
                        style={styles.sliderStyle}
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
                    <TouchableOpacity style={styles.moremargin}>
                        <Tag text='Ab 16' onPress={() => console.log('Test')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moremargin}>
                        <Tag text='Park'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moremargin}>
                        <Tag text='Festival'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moremargin}>
                        <Tag text='Club' disabled={true}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moremargin}>
                        <Tag text='4Free' disabled={true}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moremargin}>
                        <Tag text='Blahblah' disabled={true}/>
                    </TouchableOpacity>
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
        marginTop: 5,
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
        marginTop: 15,
        marginBottom: 10,
        alignSelf: 'center',
    },
    tags: {
        flexDirection: 'row',
        marginBottom: 35,
        marginHorizontal: 15,
        marginTop: 15,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    moremargin: {
        paddingHorizontal: 5,
        paddingTop: 5,
    },
});