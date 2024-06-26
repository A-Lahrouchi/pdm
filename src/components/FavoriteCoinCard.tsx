import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

/* export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7); */

interface FavoriteCoinCardProps {
  title: string;
  currentPrice: string;
  currentChange: string;
  change: string;
}

const FavoriteCoinCard: React.FC<FavoriteCoinCardProps> = ({
  title,
  currentPrice,
  currentChange,
  change,
}) => {
  const iconName = 'bitcoin';
  const size = 30;
  const color = 'black';
  const changeIcon = change === 'up' ? 'arrow-trend-up' : 'arrow-trend-down';
  const changeColor = change === 'up' ? 'green' : 'red';
  /*   const path = '../assets/png/' + title + '.png';
  const icon = () => {
    try {
      return <Image style={styles.coinLogo} source={require(path)} />;
    } catch (err) {
      return <Icon name={iconName} size={size} color={color} />;
    }
  }; */

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon name={iconName} size={size} color={color} />
        <Text>{title}</Text>
      </View>
      <View style={styles.row}>
        <Text>'${currentPrice} EUR'</Text>
      </View>
      <View style={styles.row}>
        <Icon name={changeIcon} size={size} color={changeColor} />
        <Text>'${currentChange}%'</Text>
      </View>
      <View style={styles.row}>
        <Icon name={'star'} size={size} color={color} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding: 5,
  },
  coinLogo: {
    width: 20,
    height: 25,
  },
});

export default FavoriteCoinCard;
