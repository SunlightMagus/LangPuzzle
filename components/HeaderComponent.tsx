import { View, Text, Image } from 'react-native';
import React from 'react';
import ProgressBar from './ProgressBar';
import { ProgressProps } from '~/types';

const HeaderComponent = ({ progress, lives }: ProgressProps & { lives: number }) => {
  return (
    <View className="flex flex-row items-center">
      <ProgressBar progress={progress} />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dmzg0apbj/image/upload/v1749650690/shiny-blue-orb-abstract-sphere-a-dynamic-depiction-of-an-orb-navigating-a-world-of-abstract-spheres-its-surface-glowing-with-vibrant-colors-in-a-digital-world-free-png_r26u80.png',
        }}
        className="mx-2 h-8 w-8"
        resizeMode="contain"
      />
      <Text className="p-2 text-lg font-bold text-red-600">{lives}</Text>
    </View>
  );
};

export default HeaderComponent;
