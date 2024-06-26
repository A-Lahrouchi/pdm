import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; 

interface IconButtonProps extends TouchableOpacityProps {
  iconName: string;
  iconSize: number;
  iconColor: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  iconSize,
  iconColor,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity accessibilityRole='button' onPress={onPress} style={[styles.button, style]}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default IconButton;
