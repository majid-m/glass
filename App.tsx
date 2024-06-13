import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppStack from './src/stacks/AppStack';
import RoutesPath from './src/constants/RoutesPath';
import colors from './src/styles/colors';

const App = () => {
  const Stack = createNativeStackNavigator();

  const MyTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      background: colors.background,
      text: colors.text,
    },
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={colors.background}
        barStyle="dark-content"
        showHideTransition="fade"
      />

      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName={RoutesPath.main}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name={RoutesPath.main}
            component={AppStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
