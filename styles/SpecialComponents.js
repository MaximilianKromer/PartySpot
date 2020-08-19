import { StyleSheet } from 'react-native';
import { colors, fonts } from '../styles/Global';

export const searchBarStyles = StyleSheet.create({
    header: {
        backgroundColor: colors.white,
        height: 58,
        margin: 0,
        elevation: 3,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 6,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        paddingTop: 14,
    }
})

export const HeaderStyles = StyleSheet.create({
    header: {
        backgroundColor: colors.white,
        height: 58,
        margin: 0,
        elevation: 3,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 6,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        paddingTop: 14,
    },
    title: {
        fontFamily: fonts.semibold,
        fontSize: 22,
        marginLeft: 5, 
    },
})