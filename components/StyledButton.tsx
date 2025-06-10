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
    backgroundColor: '#2563eb',
    paddingVertical: 8,   // smaller vertical padding
    paddingHorizontal: 12, // smaller horizontal padding
    borderRadius: 6,
    marginTop: 12,
    alignSelf: 'flex-start', // optional, if you want button not to stretch full width
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,         // smaller font size
    fontWeight: '600',
  },
});

