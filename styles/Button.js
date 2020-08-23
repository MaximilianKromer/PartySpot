import { StyleSheet } from 'react-native';
import { fonts, colors } from './Global';

export const buttonStyles = StyleSheet.create({
    text: {
        fontFamily: fonts.semibold,
        fontSize: 14,
        color: colors.white,
        marginHorizontal: 10,
    },
    tag: {
        height: 30,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 3,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginRight: 10,
        marginBottom: 10,
    },
    sectionHeader: {
        height: 26,
        backgroundColor: colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    sectionHeaderText: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: colors.darkText,
        marginHorizontal: 8,
    },
    disabled: {
        opacity: 0.55,
        elevation: 0,
        shadowOpacity: 0,
    },
});