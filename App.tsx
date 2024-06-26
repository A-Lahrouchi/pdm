/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import TabBar from './src/components/Footer';
import Home from './src/screens/HomeScreen';
import Calculator from './src/screens/CalculatorScreen';
import Search from './src/screens/SearchScreen';
import {store} from './src/redux/store';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/* import {StyleSheet} from 'react-native';
 */

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{headerShown: false}}
            tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Calculator" component={Calculator} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
 */
export default App;
