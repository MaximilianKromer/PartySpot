import { color } from 'react-native-reanimated';
import { fonts, colors } from './Global';
import { StyleSheet } from 'react-native';

export const eventStyles = StyleSheet.create({
    headline: {
        fontFamily: fonts.bold,
        fontSize: 24,
        color: colors.darkText,
    },
    location: {
        fontFamily: fonts.light,
        fontSize: 16,
        color: colors.darkText,
    },
    distance: {
        fontFamily: fonts.light,
        fontSize: 16,
        color: colors.darkText,
    },
    time: {
        fontFamily: fonts.regular,
        fontSize: 18,
        color: colors.darkText,
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: colors.darkText,
    },
    website: {
        fontFamily: fonts.regular,
        fontSize: 18,
        color: colors.urlText,
    },
    navBtn: {
        fontFamily: fonts.semibold,
        fontSize: 14,
        color: colors.urlText,
    }
});