import React from 'react';

interface Props {
  isCorrect: boolean;
  onNext: () => void;
  onRestart: () => void;
}

const ResultScreen: React.FC<Props> = ({ isCorrect, onNext, onRestart }) => {
  return (
    <div className="text-center text-white p-5">
      <h2>{isCorrect ? '✅ Correct!' : '❌ Wrong!'}</h2>
      <div className="mt-4">
        <button onClick={onNext} className="btn btn-success me-2">Next</button>
        <button onClick={onRestart} className="btn btn-secondary">Restart</button>
      </div>
    </div>
  );
};

export default ResultScreen;
