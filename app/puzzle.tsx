import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  Modal,
  Text,
} from 'react-native';
import { useRouter } from 'expo-router';
import StyledButton from '~/components/StyledButton';

const image = require('~/assets/puzzle.jpg');

const GRID_SIZE = 4;
const TILE_COUNT = GRID_SIZE * GRID_SIZE;
const { width } = Dimensions.get('window');
const IMAGE_SIZE = width - 40;
const TILE_SIZE = IMAGE_SIZE / GRID_SIZE;

type Tile = {
  id: number;
  correctIndex: number;
  currentIndex: number;
};

function generateTiles(): Tile[] {
  return Array.from({ length: TILE_COUNT }, (_, i) => ({
    id: i,
    correctIndex: i,
    currentIndex: i,
  }));
}

function shuffleTiles(tiles: Tile[]): Tile[] {
  const shuffled = [...tiles];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i].currentIndex, shuffled[j].currentIndex] = [shuffled[j].currentIndex, shuffled[i].currentIndex];
  }
  return shuffled;
}

function isPuzzleSolved(tiles: Tile[]): boolean {
  return tiles.every(tile => tile.currentIndex === tile.correctIndex);
}

export default function PuzzleGame() {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasMoved, setHasMoved] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);
  const router = useRouter();

  const initializePuzzle = () => {
    const shuffledTiles = shuffleTiles(generateTiles());
    setTiles(shuffledTiles);
    setMoveCount(0);
    setSelectedIndex(null);
    setHasMoved(false);
    setIsGameWon(false);
  };

  useEffect(() => {
    initializePuzzle();
  }, []);

  useEffect(() => {
    if (hasMoved && isPuzzleSolved(tiles)) {
      setIsGameWon(true);
    }
  }, [tiles]);

  const handleTilePress = (index: number) => {
    if (isGameWon) return;

    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      const newTiles = [...tiles];
      const tileA = newTiles.find(t => t.currentIndex === selectedIndex)!;
      const tileB = newTiles.find(t => t.currentIndex === index)!;

      [tileA.currentIndex, tileB.currentIndex] = [tileB.currentIndex, tileA.currentIndex];
      setTiles(newTiles);
      setSelectedIndex(null);
      setHasMoved(true);
      setMoveCount(prev => prev + 1);
    }
  };

  const getTilePosition = (index: number) => {
    const row = Math.floor(index / GRID_SIZE);
    const col = index % GRID_SIZE;
    return { top: row * TILE_SIZE, left: col * TILE_SIZE };
  };

  return (
    <View style={styles.container}>
      {/* Buttons row */}
      <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between', width: IMAGE_SIZE }}>
        <StyledButton title="Grįžti į testą" onPress={() => router.back()} />
        <StyledButton title="Sumaišyti" onPress={initializePuzzle} />
      </View>

      {/* Move counter */}
      <Text style={styles.moveCounter}>Atlikti ėjimai: {moveCount}</Text>

      <View style={styles.puzzle}>
        {tiles.map(tile => {
          const { top, left } = getTilePosition(tile.currentIndex);
          const row = Math.floor(tile.correctIndex / GRID_SIZE);
          const col = tile.correctIndex % GRID_SIZE;

          return (
            <TouchableOpacity
              key={tile.id}
              activeOpacity={0.8}
              style={[
                styles.tile,
                {
                  top,
                  left,
                  borderColor: selectedIndex === tile.currentIndex ? 'red' : '#fff',
                },
              ]}
              onPress={() => handleTilePress(tile.currentIndex)}
            >
              <Image
                source={image}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  position: 'absolute',
                  top: -row * TILE_SIZE,
                  left: -col * TILE_SIZE,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Victory Modal */}
      <Modal visible={isGameWon} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>🎉 Sveikiname!</Text>
            <Text style={styles.modalText}>Jūs išsprendėte dėlionę per {moveCount} ėjimų.</Text>
            <StyledButton title="Žaisti iš naujo" onPress={initializePuzzle} />
            <View style={{ height: 10 }} />
            <StyledButton title="Grįžti į testą" onPress={() => router.back()} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  puzzle: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    position: 'relative',
    flexWrap: 'wrap',
  },
  tile: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  moveCounter: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    color: '#0f0',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});
