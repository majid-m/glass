import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@pages/home/main/HomeScreen';
import RoutesPath from '@constants/RoutesPath';
import TextCustom from '@components/TextCustom';
import responsiveSize from '@helpers/responsiveSize';
import IconCustom from '@components/icons/IconCustom';

const BottomTabStack = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName={RoutesPath.app.home}
            screenOptions={{
                tabBarStyle: {
                    height: responsiveSize(40),
                },
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name={RoutesPath.app.home}
                component={HomeScreen}
                options={{
                    // header: props => <HomeHeader {...props} />,
                    tabBarLabel: ({ color }) => (
                        <TextCustom style={{ color }}>Home</TextCustom>
                    ),
                    tabBarIcon: ({ color }) => (
                        <IconCustom name='partnership' color={color} style={styles.tabIcon} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabIcon: {
        fontSize: responsiveSize(12),
        marginBottom: responsiveSize(-8),
    },
});

export default BottomTabStack;