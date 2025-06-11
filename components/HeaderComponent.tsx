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
          uri: 'https://res.cloudinary.com/dmzg0apbj/image/upload/v1749665472/3dedcd235214cdde6b4e171fdbf66c9d-heart-icon_kdziki.png',
        }}
        className="mx-2 h-8 w-8"
        resizeMode="contain"
      />
      <Text className="p-2 text-lg font-bold text-red-600">{lives}</Text>
    </View>
  );
};

export default HeaderComponent;
