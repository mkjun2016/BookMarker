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
import BookList from './src/Record/bookList';
import SuggestBook from './src/Home/suggestBook';
import AiSuggest from './src/Home/Suggest/aiSuggest';
import SetInterest from './src/Home/Suggest/setInterest';
import SetInterest2 from './src/Home/Suggest/setInterest2';
import SetInterest3 from './src/Home/Suggest/setInterest3';
import SetInterest4 from './src/Home/Suggest/setInterest4';
import SuggestList from './src/Home/Suggest/suggestList';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='SuggestBook'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SetInterest" component={SetInterest} />
      <Stack.Screen name="SetInterest2" component={SetInterest2} />
      <Stack.Screen name="SetInterest3" component={SetInterest3} />
      <Stack.Screen name="SetInterest4" component={SetInterest4} />
      <Stack.Screen name="SuggestList" component={SuggestList} />
      <Stack.Screen name="AiSuggest" component={AiSuggest} />
      <Stack.Screen name="SuggestBook" component={SuggestBook} />
      <Stack.Screen name="Search1" component={Search1} />
      <Stack.Screen name="Search2" component={Search2} />
      <Stack.Screen name="BookRecord" component={BookRecord} />
      <Stack.Screen name="BookList" component={BookList} />
      <Stack.Screen name="Settings" component={Settings} />
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
