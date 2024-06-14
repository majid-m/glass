import { FC, useMemo, useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, View, useWindowDimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import TextCustom from '~/components/TextCustom';
import GlassImage from '~/images/glass.svg';
import WaveImage from '~/images/wave.svg';
import CalendarImage from '~/images/calendar.svg';
import EditImage from '~/images/edit.svg';
import colors from '~/styles/colors';
import { useAppDispatch, useAppSelector } from '~/hooks/reduxApp';
import { activeDrink, drinkMinus, drinkPlus } from '~/redux/slices/drinksSlice';

const HomeScreen: FC = () => {
    const { height: screenHeight } = useWindowDimensions();
    const reduxDispatch = useAppDispatch();

    const { drinkItems, dirkedVolume, maxVolume } = useAppSelector(state => state.drinksReducer);

    const drinkPercent = useMemo(() => {
        let completePercent = (dirkedVolume / maxVolume) * 100;
        return (completePercent >= 100 ? 100 : completePercent);
    }, [dirkedVolume, maxVolume]);

    const drinkPress = (id: number) => {
        reduxDispatch(activeDrink(id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topRow}>
                <CalendarImage width={24} height={24} />
                <EditImage width={24} height={24} />
            </View>

            <View style={styles.glassView}>
                <TextCustom style={styles.LitersLabel}>Liters</TextCustom>
                <TextCustom style={styles.LitersValue}>{dirkedVolume}</TextCustom>
                <GlassImage height={screenHeight * 0.4} style={styles.glassImage} />
                {/* <WaveImage width='100%' height={screenHeight * 0.2} style={styles.waveImage} /> */}
                <TextCustom style={styles.PercentText}>
                    {drinkPercent}
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
                                    <Pressable onPress={() => reduxDispatch(drinkPlus(item.volume))}>
                                        <MaterialIcons name='plus' size={32} color={colors.green} />
                                    </Pressable>
                                }
                            </View>

                            <Pressable
                                style={[styles.drinkButton, { borderColor: item.isActive ? colors.blue : colors.text }]}
                                onPress={() => drinkPress(item.id)}
                            >
                                {!!item.icon ?
                                    <Image source={{ uri: item.icon }} style={styles.drinkImage} />
                                    :
                                    <Image source={require("../../images/drop.png")} style={styles.drinkImage} />
                                }
                                <TextCustom style={styles.drinkName}>{item.name}</TextCustom>
                                <TextCustom style={styles.drinkVolume}>{item.volume} Liter</TextCustom>
                            </Pressable>

                            <View style={styles.drinkButtonsView}>
                                {item.isActive &&
                                    <Pressable onPress={() => reduxDispatch(drinkMinus(item.volume))}>
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