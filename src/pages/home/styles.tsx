import { StyleSheet } from "react-native";

import responsiveSize from "~/helpers/responsiveSize";
import colors from "~/styles/colors";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: responsiveSize(16),
        paddingVertical: responsiveSize(16),
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    glassView: {
        alignItems: 'center',
        marginTop: responsiveSize(-16),
    },
    glassImage: {
        zIndex: 2,
    },
    waveImage: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
    },
    LitersLabel: {
        fontSize: responsiveSize(16),
        fontWeight: '600',
    },
    LitersValue: {
        fontSize: responsiveSize(72),
        fontWeight: '700',
        marginTop: responsiveSize(-16),
    },
    PercentText: {
        position: 'absolute',
        bottom: responsiveSize(12),
        fontSize: responsiveSize(48),
        fontWeight: '600',
        color: colors.gray,
        zIndex: 2,
    },
    PercentSymbol: {
        fontSize: responsiveSize(34),
        fontWeight: '600',
        color: colors.gray,
    },
    bottomView: {
        marginTop: responsiveSize(16),
    },
    separator: {
        width: responsiveSize(16),
    },
    drinkItem: {
        alignItems: 'center',
    },
    drinkButton: {
        alignItems: 'center',
        padding: responsiveSize(12),
        borderWidth: 1,
        borderRadius: responsiveSize(12),
        marginTop: responsiveSize(2),
        marginBottom: responsiveSize(2),
    },
    drinkButtonsView: {
        height: 32,
    },
    drinkImage: {
        width: responsiveSize(36),
        height: responsiveSize(36),
        resizeMode: 'contain',
    },
    drinkName: {
        fontSize: responsiveSize(18),
        fontWeight: '500',
        marginTop: responsiveSize(4),
        marginBottom: responsiveSize(4),
    },
    drinkVolume: {
        fontSize: responsiveSize(14),
        color: colors.gray500,
    },
});

export default styles;