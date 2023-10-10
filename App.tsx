import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search1 from './src/Search/search1';
import Search2 from './src/Search/search2';
import Settings from './src/Home/setting';
import BookRecord from './src/Record/bookRecord';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='BookRecord'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BookRecord" component={BookRecord} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Search1" component={Search1} />
      <Stack.Screen name="Search2" component={Search2} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: 'white',
          }
        }}
      >
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({

});

export default App;
