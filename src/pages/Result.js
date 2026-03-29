function Result({ score, total, onRestart }) {
    return (
      <div>
        <h1>Quiz Complete!</h1>
        <h2>
          Your Score: {score} / {total}
        </h2>
  
        <button onClick={onRestart}>Restart Quiz</button>
      </div>
    );
  }
  
  export default Result;