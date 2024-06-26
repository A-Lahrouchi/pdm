import React from 'react';
import {StyleSheet} from 'react-native';

import {Appbar} from 'react-native-paper';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <Appbar.Header style={styles.header}>
      {props.name === 'Search' ? (
        <Appbar.Action icon="magnify" onPress={() => {}} />
      ) : (
        <Appbar.Content
          title={props.name}
          mode="center-aligned"
          titleStyle={styles.headerText}
        />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24, // Increased font size
    fontWeight: 'bold',
  },
  headerSearch: {
    textAlign: 'right',
  },
});

export default Header;

/*
import {View, Text, StyleSheet} from 'react-native';

 export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    width: '100%',
    padding: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}); */
