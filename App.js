/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import NewContactInput from './src/components/NewContactInput/NewContactInput';
import Favorites from './src/components/Favorites/Favorites';

class ContactsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <NewContactInput />
      </View>
    );
  }
}

class FavoritesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Favorites />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Contacts: ContactsScreen,
  Favorites: FavoritesScreen,
});

export default createAppContainer(TabNavigator);

