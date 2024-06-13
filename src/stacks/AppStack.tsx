import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RoutesPath from '~/constants/RoutesPath';
import BottomTabStack from '~/stacks/BottomTabStack';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={RoutesPath.app.main}>
      <Stack.Screen
        name={RoutesPath.app.main}
        component={BottomTabStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;