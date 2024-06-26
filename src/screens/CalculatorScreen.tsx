import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

export default function Calculator() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Header name={'Calculator'} />
      </View>
      <View style={style.body}>
        <Text>Calculator</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
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
  },
});
