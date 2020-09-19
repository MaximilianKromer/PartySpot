import { StyleSheet } from 'react-native';
import { colors, fonts } from '../styles/Global';

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
        paddingHorizontal: 15,
        paddingTop: 14,
    },
    title: {
        fontFamily: fonts.semibold,
        fontSize: 22,
        marginHorizontal: 5, 
    },
    dateBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backBtn: {
        alignItems: 'center',
        paddingVertical: 4,
        marginRight: 6,
        marginLeft: 3,
        width: 30,
        height: 30,
    },
    favBtn: {
        position: 'absolute',
        alignItems: 'center',
        paddingVertical: 2,
        marginRight: 16,
        marginVertical: 14,
        width: 30,
        height: 30,
        right: 0,
        top: 0,
        
    },
})

export const UnsupportedStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    text: {
        fontFamily: fonts.regular,
        color: colors.danger,
        fontSize: 22,
        marginLeft: 5,
        textAlign: 'center',
        marginVertical: 8,
        marginHorizontal: 15,
    },
    bold: {
        fontFamily: fonts.semibold,
    }
})