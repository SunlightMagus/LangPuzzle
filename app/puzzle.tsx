// app/puzzle.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text } from 'react-native';
import { useRouter } from 'expo-router';

const gridSize = 4;
const image = require('~/assets/puzzle.jpg');
const screenWidth = Dimensions.get('window').width;
const tileSize = screenWidth / gridSize;

const generateTiles = () => {
  const tiles = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      tiles.push({ row, col, id: row * gridSize + col });
    }
  }
  return shuffle(tiles);
};

const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export default function PuzzleGame() {
  const [tiles, setTiles] = useState(generateTiles());
  const [moves, setMoves] = useState(0);
  const router = useRouter();

  const handleTilePress = (index: number) => {
    // You can implement swap logic here (if needed).
    setMoves(moves + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Surenkite paveikslėlį</Text>
      <View style={styles.grid}>
        {tiles.map((tile, index) => (
          <TouchableOpacity key={index} onPress={() => handleTilePress(index)}>
            <Image
              source={image}
              style={{
                width: tileSize,
                height: tileSize,
                transform: [
                  { translateX: -tile.col * tileSize },
                  { translateY: -tile.row * tileSize },
                ],
                position: 'absolute',
              }}
            />
            <View
              style={{
                width: tileSize,
                height: tileSize,
                overflow: 'hidden',
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.footer}>Perėjimai: {moves}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  grid: {
    width: screenWidth,
    height: screenWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    marginTop: 20,
    fontSize: 18,
  },
});
