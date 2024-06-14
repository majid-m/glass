import { FC, useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, View, useWindowDimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import TextCustom from '~/components/TextCustom';
import GlassImage from '~/images/glass.svg';
import WaveImage from '~/images/wave.svg';
import CalendarImage from '~/images/calendar.svg';
import EditImage from '~/images/edit.svg';
import colors from '~/styles/colors';
import { IDrinkItem } from '~/models/drink';

const HomeScreen: FC = () => {
    const { height: screenHeight } = useWindowDimensions();

    const [drinkItems, setDrinkItems] = useState<IDrinkItem[]>([
        {
            id: 0,
            name: "Water",
            volume: 1.5,
            icon: require('../../images/drop.png'),
            isActive: false,
        },
    ]);

    const drinkPress = (id: number) => {
        let drinkIndex = drinkItems.findIndex((item) => item.id === id);
        let drinkItemsNew: IDrinkItem[] = [...drinkItems];
        drinkItemsNew = drinkItemsNew.map((item, index) => ({ ...item, isActive: (drinkIndex === index) ? true : false }));
        setDrinkItems(drinkItemsNew);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topRow}>
                <CalendarImage width={24} height={24} />
                <EditImage width={24} height={24} />
            </View>

            <View style={styles.glassView}>
                <TextCustom style={styles.LitersLabel}>Liters</TextCustom>
                <TextCustom style={styles.LitersValue}>2.5</TextCustom>
                <GlassImage height={screenHeight * 0.4} style={styles.glassImage} />
                {/* <WaveImage width='100%' height={screenHeight * 0.2} style={styles.waveImage} /> */}
                <TextCustom style={styles.PercentText}>
                    0
                    <TextCustom style={styles.PercentSymbol}>%</TextCustom>
                </TextCustom>
            </View>

            <View style={styles.bottomView}>
                <FlatList
                    data={drinkItems}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <View style={styles.drinkItem}>
                            <View style={styles.drinkButtonsView}>
                                {item.isActive &&
                                    <Pressable>
                                        <MaterialIcons name='plus' size={32} color={colors.green} />
                                    </Pressable>
                                }
                            </View>

                            <Pressable
                                style={[styles.drinkButton, { borderColor: item.isActive ? colors.blue : colors.text }]}
                                onPress={() => drinkPress(item.id)}
                            >
                                <Image source={item.icon} style={styles.drinkImage} />
                                <TextCustom style={styles.drinkName}>{item.name}</TextCustom>
                                <TextCustom style={styles.drinkVolume}>{item.volume} Liter</TextCustom>
                            </Pressable>

                            <View style={styles.drinkButtonsView}>
                                {item.isActive &&
                                    <Pressable>
                                        <MaterialIcons name='minus' size={32} color={colors.red} />
                                    </Pressable>
                                }
                            </View>
                        </View>
                    }
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    keyExtractor={item => item?.id?.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;