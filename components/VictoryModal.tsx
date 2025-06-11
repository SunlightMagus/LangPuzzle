import React from 'react';
import { Modal, View, Text, Image, Button, StyleSheet } from 'react-native';

const VictoryModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>🎉 Sveikiname!</Text>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dmzg0apbj/image/upload/v1749667998/4a7f016fd2be93486537189c59264c0f_pdd1oz.gif',
            }}
            style={styles.gif}
          />
          <Text style={styles.message}>Jūs laimėjote quiz'ą!</Text>
          <Button title="Uždaryti" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default VictoryModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gif: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
