import { FC, useState, useEffect } from 'react';
import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

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
    const [iconUri, setIconUri] = useState<string>("");

    useEffect(() => {
        let drinkItem = drinkItems.find((item) => item.id === id);
        setTitle(drinkItem?.name ?? "");
        setDescription(drinkItem?.volume?.toString() ?? "")
        setIconUri(drinkItem?.icon ?? "");
    }, [id]);

    const saveDrinkItem = async () => {
        if (!!id) {
            reduxDispatch(editDrink({
                id,
                icon: iconUri,
                isActive: false,
                name: title,
                volume: Number(description) ?? 0,
            }))
        } else {
            reduxDispatch(addDrink({
                id: drinkItems.length > 0 ? drinkItems[drinkItems.length - 1]?.id + 1 : 1,
                icon: iconUri,
                isActive: false,
                name: title,
                volume: Number(description) ?? 0,
            }))
        };

        onClose();
    };

    const addIcon = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        if (!!result.assets && result.assets.length > 0) {
            setIconUri(result.assets[0].uri ?? "");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topHandler} />
            <TextCustom style={styles.title}>Add</TextCustom>

            <View style={styles.rowView}>
                <TextInput
                    style={styles.inputs}
                    placeholderTextColor={colors.gray}
                    placeholder='Title'
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={[styles.inputs, { marginLeft: 16 }]}
                    placeholderTextColor={colors.gray}
                    placeholder='Description'
                    keyboardType='numeric'
                    value={description}
                    onChangeText={setDescription}
                />
            </View>

            <Pressable style={styles.uploadButton} onPress={addIcon}>
                <TextCustom style={styles.uploadLabel}>+Upload Icon</TextCustom>
            </Pressable>

            {!!iconUri &&
                <Image style={styles.iconImage} source={{ uri: iconUri }} />
            }

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
        color: colors.text,
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
    iconImage: {
        alignSelf: 'flex-start',
        width: responsiveSize(64),
        height: responsiveSize(64),
        resizeMode: 'contain',
    },
    cancelButton: {
        flex: 1,
        padding: responsiveSize(8),
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
        padding: responsiveSize(8),
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