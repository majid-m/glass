import { FC, useState, useEffect } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import TextCustom from '~/components/TextCustom';
import responsiveSize from '~/helpers/responsiveSize';
import colors from '~/styles/colors';
import { useAppDispatch, useAppSelector } from '~/hooks/reduxApp';
import { addDrink, editDrink } from '~/redux/slices/drinksSlice';

interface IProps {
    id: number | null;
    onClose: () => void;
};

const ModalView: FC<IProps> = ({ id, onClose }) => {
    const reduxDispatch = useAppDispatch();

    const { drinkItems } = useAppSelector(state => state.drinksReducer);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        let drinkItem = drinkItems.find((item) => item.id === id);
        setTitle(drinkItem?.name ?? "");
        setDescription(drinkItem?.volume?.toString() ?? "")
    }, [id]);

    const saveDrinkItem = async () => {
        if (!!id) {
            reduxDispatch(editDrink({
                id,
                icon: require('../../../images/drop.png'),
                isActive: false,
                name: title,
                volume: Number(description) ?? 0,
            }))
        } else {
            reduxDispatch(addDrink({
                id: drinkItems.length > 0 ? drinkItems[drinkItems.length - 1]?.id + 1 : 1,
                icon: require('../../../images/drop.png'),
                isActive: false,
                name: title,
                volume: Number(description) ?? 0,
            }))
        };

        onClose();
    };

    return (
        <View style={styles.container}>
            <View style={styles.topHandler} />
            <TextCustom style={styles.title}>Add</TextCustom>

            <View style={styles.rowView}>
                <TextInput
                    style={styles.inputs}
                    placeholder='Title'
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={[styles.inputs, { marginLeft: 16 }]}
                    placeholder='Description'
                    keyboardType='numeric'
                    value={description}
                    onChangeText={setDescription}
                />
            </View>

            <Pressable style={styles.uploadButton}>
                <TextCustom style={styles.uploadLabel}>+Upload Icon</TextCustom>
            </Pressable>

            <View style={[styles.rowView, { marginTop: 24 }]}>
                <Pressable style={styles.cancelButton} onPress={onClose}>
                    <TextCustom style={styles.cancelLabel}>Cancel</TextCustom>
                </Pressable>
                <Pressable style={styles.confirmButton} onPress={saveDrinkItem}>
                    <TextCustom style={styles.confirmLabel}>Save</TextCustom>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        alignItems: 'center',
        paddingHorizontal: responsiveSize(16),
        paddingVertical: responsiveSize(16),
        borderTopLeftRadius: responsiveSize(24),
        borderTopRightRadius: responsiveSize(24),
    },
    topHandler: {
        width: '25%',
        height: responsiveSize(6),
        borderRadius: responsiveSize(3),
        backgroundColor: colors.gray,
        marginBottom: responsiveSize(8),
    },
    title: {
        fontSize: responsiveSize(18),
        fontWeight: '700',
        marginBottom: responsiveSize(16),
    },
    rowView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        flex: 1,
        fontSize: responsiveSize(14),
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: responsiveSize(8),
        padding: responsiveSize(8),
    },
    uploadButton: {
        alignSelf: 'flex-start',
        padding: responsiveSize(4),
        marginTop: responsiveSize(8),
    },
    uploadLabel: {
        fontSize: responsiveSize(14),
        fontWeight: '500',
        color: colors.primary,
    },
    cancelButton: {
        flex: 1,
        padding: responsiveSize(4),
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: responsiveSize(8),
    },
    cancelLabel: {
        fontSize: responsiveSize(14),
        fontWeight: '700',
        color: colors.primary,
        textAlign: 'center',
    },
    confirmButton: {
        flex: 1,
        padding: responsiveSize(4),
        backgroundColor: colors.primary,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: responsiveSize(8),
        marginLeft: 16,
    },
    confirmLabel: {
        fontSize: responsiveSize(14),
        fontWeight: '700',
        color: colors.background,
        textAlign: 'center',
    },
});

export default ModalView;