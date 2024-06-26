import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome6';

import FavoriteCoinCard from './FavoriteCoinCard';

const {width: screenWidth} = Dimensions.get('window');

const data = [
  {title: 'BTC', currentPrice: '1 235', currentChange: '1.75', change: 'up'},
  {title: 'ETH', currentPrice: '20 255', currentChange: '20', change: 'down'},
  {title: 'XRC', currentPrice: '2 365', currentChange: '5.36', change: 'up'},
  {title: 'MOT', currentPrice: '236', currentChange: '12.36', change: 'down'},
];

const FavouriteCoin: React.FC = () => {
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
        <FavoriteCoinCard
          title={item.title}
          currentPrice={item.currentPrice}
          currentChange={item.currentPrice}
          change={item.change}
        />
      </View>
    );
  };
  return (
    <View style={styles.favorites}>
      <View style={styles.titleSection}>
        <Icon name={'star'} size={30} color={'black'} />
        <Text>Vos Favoris</Text>
      </View>
      <View style={styles.container}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth * 0.8}
          layout={'default'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  favorites: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
  },
});

export default FavouriteCoin;
