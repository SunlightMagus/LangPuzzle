import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, View } from 'react-native'; // <-- import View here
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
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(
    questions[currentQuestionIndex]
  );
  const [lives, setLives] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('Jūs laimėjote!');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrectAnswer = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrongAnswer = () => {
    if (lives <= 1) {
      Alert.alert('Jus pralaimejote!', 'Bandykite dar karta!', [
        { text: 'Bandyti dar karta', onPress: restart },
      ]);
      setLives(0);
    } else {
      Alert.alert('Neteisingas atsakymas, bandykite dar kartą!');
      setLives(lives - 1);
    }
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  return (
    <SafeAreaView className="flex flex-1 p-3">
      <StatusBar animated barStyle={'default'} />

      {/* Header */}
      <HeaderComponent progress={currentQuestionIndex / questions.length} lives={lives} />

      {/* Buttons side by side */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <SignOutButton />
        <View style={{ width: 12 }} /> {/* Spacer */}
        <StyledButton
          title="Dėlionės žaidimas"
          onPress={() => router.push('/puzzle')}
        />
      </View>

      {currentQuestion.type === 'MULTIPLE_CHOICE' && (
        <MultipleChoiceQuestion
          question={{
            question: currentQuestion.text,
            options: currentQuestion.options || [],
          }}
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
