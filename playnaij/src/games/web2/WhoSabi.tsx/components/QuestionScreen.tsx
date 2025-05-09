import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const QuestionScreen: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [coins, setCoins] = useState(0);
  const [timer, setTimer] = useState(10);
  const [energy, setEnergy] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetch(`https://api.example.com/questions?category=${category}`)
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(() => {
        setQuestions([
          {
            question: 'Which of these Food is Enugu popularly known for?',
            options: ['Okpa', 'Suya', 'Chin Chin', 'Kuli Kuli'],
            correctAnswer: 'Okpa',
          },
        ]);
      });
  }, [category]);

  useEffect(() => {
    if (selected || gameOver) return;

    if (timer === 0) {
      handleFail();
      return;
    }

    const countdown = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, selected, gameOver]);

  const handleFail = () => {
    setEnergy(prev => {
      const newEnergy = prev - 1;
      if (newEnergy <= 0) setGameOver(true);
      return newEnergy;
    });

    setTimeout(() => {
      setSelected(null);
      setTimer(10);
      setCurrent(prev => prev + 1);
    }, 1000);
  };

  const handleSelect = (option: string) => {
    setSelected(option);
    const correct = questions[current].correctAnswer;

    if (option === correct) {
      setCoins(prev => prev + 500);
      setTimeout(() => {
        setSelected(null);
        setTimer(10);
        setCurrent(prev => prev + 1);
      }, 1000);
    } else {
      handleFail();
    }
  };

  if (!questions.length) return <p className="text-center mt-5">Loading questions...</p>;
  if (gameOver || current >= questions.length) {
    return (
      <Container className="text-center mt-5">
        <h2 className="mb-3">💀 Game Over</h2>
        <p>Your score: <strong>{coins}</strong></p>
        <Button variant="primary" onClick={() => window.location.reload()}>Restart</Button>
      </Container>
    );
  }

  const q = questions[current];

  return (
    <Container fluid className="py-4">
      {/* Top Bar */}
      <Row className="mb-3 justify-content-between">
        <Col xs="auto">
          <div className="bg-light rounded px-3 py-2 d-flex align-items-center gap-2">
            <img src="/assets/coin.png" alt="coin" width={20} />
            <span>{coins}</span>
          </div>
        </Col>
        <Col xs="auto">
          <div className="bg-light rounded px-3 py-2 d-flex align-items-center gap-2">
            <img src="/assets/flash.png" alt="energy" width={20} />
            <span>{energy}/3</span>
          </div>
        </Col>
      </Row>

      {/* Question Header */}
      <Row className="text-center mb-3">
        <Col>
          <h4 className="fw-bold text-uppercase">{category}</h4>
          <div className="text-muted">Q{current + 1}/{questions.length}</div>
        </Col>
      </Row>

      {/* Question */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={8}>
          <div className="bg-white text-dark p-4 rounded shadow text-center">
            <strong>{q.question}</strong>
          </div>
        </Col>
      </Row>

      {/* Options */}
      <Row className="justify-content-center g-3 mb-4">
        {q.options.map(opt => (
          <Col xs={12} md={5} key={opt}>
            <Button
              variant={
                selected
                  ? opt === q.correctAnswer
                    ? 'success'
                    : opt === selected
                    ? 'danger'
                    : 'outline-secondary'
                  : 'outline-secondary'
              }
              className="w-100 py-3 fw-semibold"
              disabled={!!selected}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Bottom Bar */}
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <Button variant="dark" disabled className="me-2">🔥 50/50</Button>
          <Button variant="dark" disabled>💰 100</Button>
        </Col>
        <Col xs="auto">
          <h3 className="text-warning fw-bold">⏰ 00:{timer < 10 ? `0${timer}` : timer}</h3>
        </Col>
        <Col xs="auto" className="d-none d-md-flex align-items-center gap-2">
          <span className="text-success fw-bold">✔ Correct =</span>
          <img src="/assets/coin.png" alt="coin" width={20} />
          <span>500</span>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionScreen;
