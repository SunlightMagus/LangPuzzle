import { View, Text, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { ProgressProps } from '~/types';

const ProgressBar = ({ progress }: ProgressProps) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolate = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View className="h-6 flex-1 overflow-hidden rounded-full bg-gray-300 shadow-inner">
      <Animated.View
        style={{ width: widthInterpolate }}
        className="h-full rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] justify-center"
      >
        {/* Glowing inner line */}
        <View className="mx-1 h-2 rounded-full bg-white opacity-40 shadow-md" />
      </Animated.View>
    </View>
  );
};

export default ProgressBar;
