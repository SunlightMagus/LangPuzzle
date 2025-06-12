import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Pressable, Animated } from 'react-native';

interface ImageOptionProps {
  image: string;
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

const ImageOption = ({ image, text, isSelected, onPress }: ImageOptionProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: isSelected ? 1.1 : 0.9,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isSelected]);

  return (
    <Pressable onPress={onPress} style={{ flexBasis: '48%', marginBottom: 12 }}>
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }],
          borderWidth: 2,
          borderColor: isSelected ? '#81D5FE' : '#d1d5db',
          borderRadius: 8,
          padding: 8,
          alignItems: 'center',
          backgroundColor: isSelected ? '#ce1818' : 'transparent',
          height: 240,  
          justifyContent: 'center',
        }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: '100%', height: 140, resizeMode: 'contain' }} // padidinau paveiksliuko dydį
        />
        <Text
          style={{
            marginTop: 8,
            fontWeight: isSelected ? 'bold' : '600',
            color: isSelected ? '#75dcd5' : '#000',
            textAlign: 'center',
          }}
        >
          {text}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default ImageOption;
