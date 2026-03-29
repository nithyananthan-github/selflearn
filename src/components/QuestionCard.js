import { useState } from "react";

function QuestionCard({ question, onAnswerSubmit }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");

  const checkAnswer = () => {
    const isCorrect = parseInt(userAnswer) === question.answer;

    if (isCorrect) {
      setResult("✅ Correct!");
    } else {
      setResult("❌ Try again");
    }

    onAnswerSubmit(isCorrect);
    setUserAnswer("");
  };

  return (
    <div>
      <h3>Question</h3>
      <p>{question.question}</p>

      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />

      <button onClick={checkAnswer}>Submit</button>

      <p>{result}</p>
    </div>
  );
}

export default QuestionCard;