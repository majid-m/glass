import { FC, useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';
import TextCustom from '~/components/TextCustom';
import { IDrinkItem } from '~/models/drink';
import EditImage from '~/images/edit.svg';
import ModalView from './components/ModalView';

const AddScreen: FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(true);
    const [drinkId, setDrinkId] = useState<number | null>(null);
    const [drinkItems, setDrinkItems] = useState<IDrinkItem[]>([
        {
            id: 0,
            name: "Water",
            volume: 1.5,
            icon: require('../../images/drop.png'),
            isActive: false,
        },
        {
            id: 1,
            name: "Coffee",
            volume: 0.5,
            icon: require('../../images/drop.png'),
            isActive: false,
        },
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                style={styles.modalView}
                isVisible={modalVisible}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={['up', 'down']}
            >
                <ModalView id={drinkId} />
            </Modal>

            <View style={styles.headerView}>
                <TextCustom style={styles.headerLabel}>Resources</TextCustom>
            </View>

            <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
                <TextCustom style={styles.addButtonLabel}>Add New Resource</TextCustom>
            </TouchableOpacity>

            <FlatList
                data={drinkItems}
                contentContainerStyle={styles.flatListStyle}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <View style={styles.drinkItem}>
                        <View style={styles.drinkItemLeft}>
                            <Image source={item.icon} style={styles.drinkImage} />
                            <View style={styles.columnView}>
                                <TextCustom style={styles.drinkName}>{item.name}</TextCustom>
                                <TextCustom style={styles.drinkVolume}>{item.volume} Liter</TextCustom>
                            </View>
                        </View>

                        <Pressable style={styles.editDrinkItem}>
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