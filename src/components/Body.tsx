import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Body = () => {
  return (
    <View style={styles.body}>
      <FlatList
        data={daysOfWeek}
        keyExtractor={item => item}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
});

export default Body;
