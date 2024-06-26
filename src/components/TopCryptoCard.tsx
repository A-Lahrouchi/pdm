import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

/* export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7); */

interface TopCryptoCoinCardProp {
  title: string;
  currentPrice: string;
  currentChange: string;
  change: string;
}

const TopCryptoCoinCard: React.FC<TopCryptoCoinCardProp> = ({
  title,
  currentPrice,
  currentChange,
  change,
}) => {
  const iconName = 'bitcoin';
  const size = 10;
  const color = 'black';
  const changeIcon = change === 'up' ? 'arrow-trend-up' : 'arrow-trend-down';
  const changeColor = change === 'up' ? 'green' : 'red';

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon name={iconName} size={size} color={color} />
        <Text>{title}</Text>
      </View>
      <View style={styles.column}>
        <Text>'${currentPrice} EUR'</Text>
        <View style={styles.row}>
          <Text>'${currentChange}%'</Text>
          <Icon name={changeIcon} size={size} color={changeColor} />
          <Icon name={'star'} size={size} color={color} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
});

export default TopCryptoCoinCard;
