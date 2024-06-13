import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '~/pages/home/HomeScreen';
import AddScreen from '~/pages/add/AddScreen';
import NotificationScreen from '~/pages/notification/NotificationScreen';
import ProfileScreen from '~/pages/profile/ProfileScreen';
import RoutesPath from '~/constants/RoutesPath';
import responsiveSize from '~/helpers/responsiveSize';
import HomeImage from '~/images/home.svg';
import HomeFillImage from '~/images/home-fill.svg';
import PlusImage from '~/images/plus.svg';
import PlusFillImage from '~/images/plus-fill.svg';
import NotificationImage from '~/images/notification.svg';
import ProfileImage from '~/images/profile.svg';

const BottomTabStack = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName={RoutesPath.app.home}
            screenOptions={{
                tabBarStyle: {
                    height: responsiveSize(52),
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOffset: {
                        width: 0, height: 0
                    },
                },
                tabBarHideOnKeyboard: true,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={RoutesPath.app.home}
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => focused ?
                        <>
                            <HomeFillImage width={32} height={32} />
                            <View style={[styles.dotView, { backgroundColor: color }]} />
                        </>
                        :
                        <HomeImage width={32} height={32} />
                }}
            />
            <Tab.Screen
                name={RoutesPath.app.add}
                component={AddScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => focused ?
                        <>
                            <PlusFillImage width={32} height={32} />
                            <View style={[styles.dotView, { backgroundColor: color }]} />
                        </>
                        :
                        <PlusImage width={32} height={32} />
                }}
            />
            <Tab.Screen
                name={RoutesPath.app.notification}
                component={NotificationScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => focused ?
                        <>
                            <NotificationImage width={32} height={32} />
                            <View style={[styles.dotView, { backgroundColor: color }]} />
                        </>
                        :
                        <NotificationImage width={32} height={32} />
                }}
            />
            <Tab.Screen
                name={RoutesPath.app.profile}
                component={ProfileScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => focused ?
                        <>
                            <ProfileImage width={32} height={32} />
                            <View style={[styles.dotView, { backgroundColor: color }]} />
                        </>
                        :
                        <ProfileImage width={32} height={32} />
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    dotView: {
        width: responsiveSize(4),
        height: responsiveSize(4),
        borderRadius: responsiveSize(2),
    },
});

export default BottomTabStack;