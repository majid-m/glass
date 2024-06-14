import { FC, useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';
import TextCustom from '~/components/TextCustom';
import EditImage from '~/images/edit.svg';
import ModalView from './components/ModalView';
import { useAppDispatch, useAppSelector } from '~/hooks/reduxApp';
import { resetDrinks } from '~/redux/slices/drinksSlice';

const AddScreen: FC = () => {
    const reduxDispatch = useAppDispatch();

    const { drinkItems } = useAppSelector(state => state.drinksReducer);

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [drinkId, setDrinkId] = useState<number | null>(null);

    const addNewDrink = () => {
        setDrinkId(null);
        setModalVisible(true);
    };

    const editDrink = (id: number) => {
        setDrinkId(id);
        setModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                style={styles.modalView}
                isVisible={modalVisible}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={['up', 'down']}
            >
                <ModalView id={drinkId} onClose={() => setModalVisible(false)} />
            </Modal>

            <Pressable style={styles.headerView} onPress={() => reduxDispatch(resetDrinks())}>
                <TextCustom style={styles.headerLabel}>Resources</TextCustom>
            </Pressable>

            <TouchableOpacity style={styles.addButton} activeOpacity={0.7} onPress={addNewDrink}>
                <TextCustom style={styles.addButtonLabel}>Add New Resource</TextCustom>
            </TouchableOpacity>

            <FlatList
                data={drinkItems}
                contentContainerStyle={styles.flatListStyle}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <View style={styles.drinkItem}>
                        <View style={styles.drinkItemLeft}>
                            {!!item.icon ?
                                <Image source={{ uri: item.icon }} style={styles.drinkImage} />
                                :
                                <Image source={require("../../images/drop.png")} style={styles.drinkImage} />
                            }
                            <View style={styles.columnView}>
                                <TextCustom style={styles.drinkName}>{item.name}</TextCustom>
                                <TextCustom style={styles.drinkVolume}>{item.volume} Liter</TextCustom>
                            </View>
                        </View>

                        <Pressable style={styles.editDrinkItem} onPress={() => editDrink(item.id)}>
                            <EditImage width={28} height={28} />
                        </Pressable>
                    </View>
                }
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                keyExtractor={item => item?.id?.toString()}
            />
        </SafeAreaView>
    );
};

export default AddScreen;