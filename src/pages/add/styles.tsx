import { StyleSheet } from "react-native";

import responsiveSize from "~/helpers/responsiveSize";
import colors from "~/styles/colors";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: responsiveSize(16),
        paddingVertical: responsiveSize(16),
    },
    modalView: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    headerView: {
        alignItems: 'center',
        padding: responsiveSize(12),
        borderRadius: responsiveSize(8),
        elevation: 2,
        backgroundColor: colors.background,
    },
    headerLabel: {
        fontSize: responsiveSize(18),
        fontWeight: '600',
    },
    addButton: {
        alignItems: 'center',
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: responsiveSize(8),
        padding: responsiveSize(12),
        marginTop: responsiveSize(24),
    },
    addButtonLabel: {
        fontSize: responsiveSize(14),
        fontWeight: '500',
        color: colors.primary,
    },
    flatListStyle: {
        paddingTop: responsiveSize(16),
        paddingBottom: responsiveSize(16),
    },
    separator: {
        height: responsiveSize(12),
    },
    drinkItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: responsiveSize(16),
        borderRadius: responsiveSize(12),
        elevation: 2,
        backgroundColor: colors.background,
    },
    drinkItemLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    columnView: {

    },
    editDrinkItem: {

    },
    drinkImage: {
        width: responsiveSize(28),
        height: responsiveSize(28),
        resizeMode: 'contain',
        marginRight: responsiveSize(12),
    },
    drinkName: {
        fontSize: responsiveSize(14),
        fontWeight: '700',
    },
    drinkVolume: {
        fontSize: responsiveSize(14),
        marginTop: responsiveSize(4),
    },
});

export default styles;