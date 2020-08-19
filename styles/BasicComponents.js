import { StyleSheet } from 'react-native';
import { colors, fonts } from './Global';

export const CardStyle = StyleSheet.create({
    card: {
        elevation: 3,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000000',
        shadowOpacity: 0.16,
        shadowRadius: 6,
        borderRadius: 13,
        backgroundColor: colors.white,
        margin: 8,
        paddingHorizontal: 8,
    },
    filled: {
        backgroundColor: colors.primary,
    },
    disabled: {
        opacity: 0.5,
    },
    danger: {
        color: colors.danger,
    },
    btntext: {
        color: colors.primary,
        textAlign: 'center',
        fontFamily: fonts.bold,
        fontSize: 16,
        lineHeight: 22,
        textAlignVertical: 'center',
        marginVertical: 11,
    },
    btnfilledtext: {
        color: colors.lightText
    },
})