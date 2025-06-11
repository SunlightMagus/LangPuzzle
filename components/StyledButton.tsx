import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

type StyledButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default function StyledButton({ title, onPress }: StyledButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#75dcd5',
    paddingVertical: 8,   
    paddingHorizontal: 12, 
    borderRadius: 6,
    marginTop: 12,
    alignSelf: 'flex-start', 
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,         
    fontWeight: '600',
  },
});

