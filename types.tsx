export type Option = {
  id: string;
  image: string;
  text: string;
  correct?: boolean;
};

export type QuizQuestion = {
  id: string;
  type: 'OPEN_ENDED' | 'MULTIPLE_CHOICE';
  text: string; // ✅ Keep using 'text' for the question text
  answer?: string;
  options?: Option[];
};

export type QuestionProp = {
  question: QuizQuestion; // ✅ Match the structure you already use
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
};

export type EndedQuestionProps = {
  question: QuizQuestion;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
};

export type ProgressProps = {
  progress: number;
};
