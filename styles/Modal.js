import { StyleSheet } from 'react-native';
import { fonts, colors } from './Global';

export const modalStyles = StyleSheet.create({
    headline: {
        fontFamily: fonts.semibold,
        fontSize: 16,
        color: colors.darkText,
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'center',
    },
    buttonText: {
        fontFamily: fonts.regular,
        fontSize: 14,
        marginHorizontal: 15,
        marginVertical: 10,
        color: colors.darkText,
    },
    button: {
        borderStyle: 'solid',
        borderColor: colors.darkGray,
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
    },
    buttonTextSelected: {
        fontFamily: fonts.regular,
        fontSize: 14,
        marginHorizontal: 15,
        marginVertical: 10,
        color: colors.lightText,
    },
    buttonSelected: {
        backgroundColor: colors.darkGray,
        borderWidth: 0,
        margin: 10,
        borderRadius: 5,
    },
    sliderText: {
        fontFamily: fonts.regular,
        fontSize: 14,
        marginHorizontal: 15,
        marginVertical: 10,
        color: colors.darkText,
        textAlign: 'center',
    },
});