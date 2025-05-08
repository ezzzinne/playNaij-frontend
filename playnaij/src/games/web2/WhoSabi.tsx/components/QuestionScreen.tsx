import React from 'react';

interface Props {
  category: string;
  data: {
    question: string;
    options: string[];
    correct: string;
  };
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionScreen: React.FC<Props> = ({ category, data, onAnswer }) => {
  const handleClick = (option: string) => {
    onAnswer(option === data.correct);
  };

  return (
    <div className="container text-white text-center py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>⚡ 3/3</div>
        <h4>{category}</h4>
        <div>Q1/5</div>
      </div>

      <div className="bg-light text-dark p-3 rounded shadow mb-4">
        <h5>{data.question}</h5>
      </div>

      <div className="row g-3 justify-content-center">
        {data.options.map((option, idx) => (
          <div className="col-5" key={idx}>
            <button onClick={() => handleClick(option)} className="btn btn-outline-light w-100 p-2 rounded shadow">
              {option}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 d-flex justify-content-around">
        <div>🕒 00:10</div>
        <div>✅ Correct Answer: {data.correct}</div>
      </div>
    </div>
  );
};

export default QuestionScreen;
