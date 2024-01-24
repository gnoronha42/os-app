import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const GlobalButton = ({ title, onPress, buttonWidth, buttonColor }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, { width: buttonWidth, backgroundColor: buttonColor }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 16, 
  },
});

export default GlobalButton;
