import React, { useState} from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard'
// Types
import { QuestionState, Difficulty, Type } from './API'

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 5;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [socore, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const startQuiz = async () => {
    console.log(1)
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      Type.SINGLE
    )
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>
        REACT QUIZ
      </h1>
      <button
        className="start"
        onClick={startQuiz}
      >
        Start
      </button>
      <p className="score">
        Score:
      </p>
      <p>
        Loading Questions ...
      </p>
      <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number]?.question}
        answers={questions[number]?.answers || []}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button
        className="next"
        onClick={nextQuestion}
      >
        Next Question
      </button>
    </div>
  );
}

export default App;
