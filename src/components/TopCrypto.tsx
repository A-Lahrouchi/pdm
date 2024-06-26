import React from 'react';
import {StyleSheet, FlatList, ScrollView, View} from 'react-native';
import TopCryptoCoinCard from './TopCryptoCard';

const data = [
  {
    id: 1,
    title: 'btc',
    currentPrice: '1 235',
    currentChange: '1.75',
    change: 'up',
  },
  {
    id: 2,
    title: 'eth',
    currentPrice: '20 255',
    currentChange: '20',
    change: 'down',
  },
  {
    id: 3,
    title: 'zco',
    currentPrice: '2 365',
    currentChange: '5.36',
    change: 'up',
  },
  {
    id: 4,
    title: 'gnt',
    currentPrice: '236',
    currentChange: '12.36',
    change: 'down',
  },
];

const TopCrypto = () => {
  const renderItem = ({
    item,
  }: {
    item: {
      title: string;
      currentPrice: string;
      currentChange: string;
      change: string;
    };
  }) => {
    return (
      <View style={styles.itemContainer}>
        <TopCryptoCoinCard
          title={item.title}
          currentPrice={item.currentPrice}
          currentChange={item.currentPrice}
          change={item.change}
        />
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => {
        return index.toString();
      }}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  item: {
    fontSize: 18,
    padding: 10,
    width: '100%',
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default TopCrypto;
