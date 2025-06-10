import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import questions from '~/assets/data/AllQuestionsData';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import EndedQuestion from '~/components/EndedQuestion';
import { QuizQuestion } from '~/types';
import HeaderComponent from '~/components/HeaderComponent';
import { SignOutButton } from '~/components/SignOutButton';
import { useRouter } from 'expo-router';
import StyledButton from '~/components/StyledButton';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(questions[0]);
  const [lives, setLives] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('Jūs laimėjote!');
      setCurrentQuestionIndex(0);
      setCurrentQuestion(questions[0]);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrectAnswer = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const onWrongAnswer = () => {
    if (lives <= 1) {
      Alert.alert('Jūs pralaimėjote!', 'Bandykite dar kartą!', [
        { text: 'Bandyti dar kartą', onPress: restart },
      ]);
    } else {
      Alert.alert('Neteisingas atsakymas, bandykite dar kartą!');
      setLives((prev) => prev - 1);
    }
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
    setCurrentQuestion(questions[0]);
  };

  return (
    <SafeAreaView className="flex flex-1 p-3">
      <StatusBar animated barStyle="default" />

      {/* Header */}
      <HeaderComponent progress={currentQuestionIndex / questions.length} lives={lives} />

      {/* Buttons */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <SignOutButton />
        <View style={{ width: 12 }} />
        <StyledButton
          title="Dėlionės žaidimas"
          onPress={() => router.push('/puzzle')}
        />
      </View>

      {/* Question Types */}
      {currentQuestion.type === 'MULTIPLE_CHOICE' && (
        <MultipleChoiceQuestion
          question={currentQuestion}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}

      {currentQuestion.type === 'OPEN_ENDED' && (
        <EndedQuestion
          question={currentQuestion}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}
    </SafeAreaView>
  );
}
