import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../components/Header';
import FavouriteCoin from '../components/FavouriteCoins';
import TopCrypto from '../components/TopCrypto';

export default function Home() {
  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.header}>
        <Header name={'Home'} />
      </View>

      <View style={homeStyle.body}>
        <View style={homeStyle.favoritCoinComponent}>
          <FavouriteCoin />
        </View>
        <View style={homeStyle.CoinComponent}>
          <TopCrypto />
        </View>
      </View>
    </View>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 6,
    flexDirection: 'column',
  },
  favoritCoinComponent: {
    flex: 3,
  },
  CoinComponent: {
    flex: 4,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
