import React from 'react';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Slot } from 'expo-router';
import { View } from 'react-native';
import '../global.css';

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error("Nėra publish key");
  }

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <View style={{ flex: 1, backgroundColor: '#dceefa' }}>
        <Slot />
      </View>
    </ClerkProvider>
  );
}
