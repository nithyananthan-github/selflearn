import { useState } from "react";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import Result from "./Result";

function Practice() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <Result
        score={score}
        total={questions.length}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <div>
      <h1>Practice Page</h1>
      <p>
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>

      <QuestionCard
        question={questions[currentQuestionIndex]}
        onAnswerSubmit={handleAnswerSubmit}
      />
    </div>
  );
}

export default Practice;