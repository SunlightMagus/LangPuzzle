import { View, Text, TextInput, Image, Platform, KeyboardAvoidingView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { EndedQuestionProps } from '~/types';

const EndedQuestion = ({ question, onCorrectAnswer, onWrongAnswer }: EndedQuestionProps) => {
  const [input, setInput] = useState('');

  const onButtonPress = () => {
    if (question.answer?.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrectAnswer();
      setInput('');
    } else {
      onWrongAnswer();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <Text style={styles.title}>Išverskite šį sakinį</Text>

      <View style={styles.sentenceContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749650535/chibi_vergil3_mfkgn1.png',
          }}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.sentenceBox}>
          <Text style={styles.sentenceText}>{question.text}</Text>
        </View>
      </View>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Įveskite lietuvių kalba"
        multiline={true}
        textAlignVertical="top"
        style={styles.textInput}
      />

      <View style={styles.buttonWrapper}>
        <CustomButton text="Patvirtinti" onPress={onButtonPress} disabled={!input} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: 'transparent', // no white background on whole screen
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: '#111827',
  },
  sentenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#e5e7eb', // light gray background for sentence zone
    padding: 12,
    borderRadius: 12,
  },
  image: {
    width: 110,
    height: 140,
    marginRight: 16,
  },
  sentenceBox: {
    flex: 1,
  },
  sentenceText: {
    fontSize: 18,
    color: '#374151',
  },
  textInput: {
    backgroundColor: '#f3f4f6', // slightly gray input background
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderColor: '#d1d5db',
    borderWidth: 1,
    marginBottom: 20,
    minHeight: 80,
    color: '#111827',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
});

export default EndedQuestion;
