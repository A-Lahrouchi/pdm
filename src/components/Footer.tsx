import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

function TabBar({state, descriptors, navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={footerStyle.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        let iconName;

        if (route.name === 'Home') {
          iconName = 'house';
        } else if (route.name === 'Search') {
          iconName = 'magnifying-glass';
        } else if (route.name === 'Calculator') {
          iconName = 'calculator';
        }

        let color = isFocused ? 'black' : 'grey';

        return (
          <TouchableOpacity
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={footerStyle.button}>
            <Icon name={iconName} size={30} color={color} />
            <Text style={{color: color}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const footerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default TabBar;

/* const Footer: React.FC = () => {
  const handlePress = (text: string) => {
    Alert.alert(text);
  };

  return (
    <View style={footerStyle.container}>
      <IconButton
        iconName="house"
        iconSize={30}
        iconColor="black"
        onPress={() => handlePress('Home')}
        style={footerStyle.iconButton}
      />
      <IconButton
        iconName="magnifying-glass"
        iconSize={30}
        iconColor="black"
        onPress={() => handlePress('Explore')}
        style={footerStyle.iconButton}
      />
      <IconButton
        iconName="calculator"
        iconSize={30}
        iconColor="black"
        onPress={() => handlePress('Exchange')}
        style={footerStyle.iconButton}
      />
    </View>
  );
};
 */
