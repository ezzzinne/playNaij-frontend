import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css'
import Coin from '../assets/Coin gold.svg';
import Energy from '../assets/Flash gold.svg'
import MusicIcon from '../assets/Music.svg';
import Settings from '../assets/setting.svg'
import LowerSection1 from '../../Streetz.tsx/components/LowerSection1';
import Bomb from '../assets/Bomb.svg';
import Timer from '../assets/fast time.svg';
import Check from '../assets/Check.svg';
import GameResult from './ResultScreen';
import SettingsModal from './SettingsModal';
import FoodIcon from '../assets/Food.svg';
import SportsIcon from '../assets/Sports.svg';
import HistoryIcon from '../assets/9ja.svg';
// import clickSoundFile from '../assets/click.mp3';
import bgMusicFile from '../assets/Game Music.mp3';

interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
  category: string;
}

const exitFullscreenAndPortrait = async () => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {
    try {

      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      } else {
        // Fallback: rotate back to portrait if supported
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await (screen.orientation as any).lock('portrait').catch(() => {});
      }
    } catch (err) {
      console.warn('Orientation unlock or revert failed:', err);
    }

    // Exit fullscreen
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } else if ((document as any).webkitExitFullscreen) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).webkitExitFullscreen();
    }
  }
};

const QuestionScreen: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [coins, setCoins] = useState(0);
  const [timer, setTimer] = useState(20);
  const [energy, setEnergy] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<string[]>([]);
  const [revealUsed, setRevealUsed] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [musicOn, setMusicOn] = useState(true);
  const [, setMissedQuestions] = useState(0);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const wrongSoundRef = useRef<HTMLAudioElement | null>(null);


  const q = questions[current];

  const categoryColors: { [key: string]: string } = {
    Food: '#875432',
    Music: '#8D9196',
    Sports: '#3753DD',
    '9ja History': '#0BD33D',
  };
  const topBarColor = categoryColors[category || ''];

  const categoryIcons: { [key: string]: string } = {
    Food: FoodIcon,
    Music: MusicIcon,
    Sports: SportsIcon,
    '9ja History': HistoryIcon,
  };
  const categoryIcon = categoryIcons[category || ''];
  
  const handleFiftyFifty = () => {
    if (coins < 100 || selected || hiddenOptions.length > 0) return;
    const incorrectOptions = q.options.filter(o => o !== q.answer);
    const twoToHide = incorrectOptions.sort(() => 0.5 - Math.random()).slice(0, 2);
    setCoins(prev => prev - 100);
    setHiddenOptions(twoToHide);
    setEnergy(prev => Math.max(prev - 1, 0));
  };

  const handleReveal = () => {
    if (coins < 500 || selected || revealUsed) return;
    setCoins(prev => prev - 500);
    setRevealUsed(true);
    setSelected(q.answer);
    setEnergy(prev => Math.max(prev - 1, 0));
    setCorrectAnswers(prev => prev + 1);
    setQuestionsAnswered(prev => prev + 1);
    setTimeout(() => {
      setSelected(null);
      setRevealUsed(false);

      if (current + 1 >= questions.length) {
        setGameOver(true);
      } else {  
      setCurrent(prev => prev + 1);
      }
    }, 300);
  };

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const nextQuestionOrEnd = () => {
  if (current + 1 >= questions.length) {
    setGameOver(true);
  } else {
    setSelected(null);
    setCurrent(prev => prev + 1);
  }
};

  const handleSelect = (option: string) => {
    setSelected(option);
    setQuestionsAnswered(prev => prev + 1);
    const correct = questions[current].answer;
    if (option === correct) {
      correctSoundRef.current?.play();
      setCoins(prev => prev + 200);
      setCorrectAnswers(prev => prev + 1);
      setTimeout(() => {
        nextQuestionOrEnd();
      }, 300);
    } else {
      wrongSoundRef.current?.play();
      setTimeout(() => {
        // handleFail();
        setEnergy(prev => {
        const updated = prev - 1;
        if (updated <= 0) setGameOver(true);
        return updated;
      });
      nextQuestionOrEnd();
      }, 300);
    }
  };

  const handleFail = useCallback(() => {
    setEnergy(prev => {
      const newEnergy = prev - 1;
      if (newEnergy <= 0) {
        setGameOver(true);
      }
      return newEnergy;
    });
    setSelected(null);
    setCurrent(prev => {
      const next = prev + 1;
    if (next >= questions.length) {
      setGameOver(true);
      return prev;
    }
    return next;
    });
  }, [questions.length]);
  
  const resetGame = () => {
    setCurrent(0);
    setSelected(null);
    setCoins(0);
    setTimer(20);
    setEnergy(3);
    setGameOver(false);
    setHiddenOptions([]);
    setRevealUsed(false);
    setCorrectAnswers(0);
    setQuestionsAnswered(0);
    setMissedQuestions(0);
    loadQuestions();
  };

  const navigate = useNavigate();

  const handleExit = () => {
    if (confirm('Are you sure you want to exit the game?')) {
      exitFullscreenAndPortrait();
      navigate('/game2'); 
    }
  };
  
  const loadQuestions = useCallback(() => {
    fetch(`https://casual-web-game-platform.onrender.com/api/trivia/questions?category=${category}`)
      .then(res => res.json())
      .then(data => {
        const questionsArray = data.questions;

        if (!Array.isArray(questionsArray)) {
          throw new Error("questions is not an array");
        }

        const filteredByCategory = questionsArray.filter(
          (q: Question) => q.category === category
        );
        const shuffledQuestions = shuffleArray(filteredByCategory).slice(0, 5).map((q) => ({
          ...q,
          options: shuffleArray(q.options),
        }));
        setQuestions(shuffledQuestions);
      })
      .catch(err => console.error('Failed to load questions:', err));
  }, [category]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  useEffect(() => {
    setHiddenOptions([]);
  }, [current]);

  useEffect(() => {
    if (selected || gameOver || current >= questions.length || showSettings) return;

    const countdown = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(countdown);
          setMissedQuestions(m => {
          const newMissed = m + 1;

          if (newMissed >= 3) {
            setGameOver(true);
          } else {
            setCurrent(c => {
              if (c + 1 >= questions.length) {
                setGameOver(true);
              }
              return c + 1;
            });
          }
          return newMissed;
        });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, selected, gameOver, current, questions.length, handleFail, showSettings]);

  useEffect(() => {
    if (energy === 0) {
      setGameOver(true);
    }
  }, [energy]);

  useEffect(() => {
    bgMusicRef.current = new Audio(bgMusicFile);
    bgMusicRef.current.loop = true;

    if (musicOn) {
      bgMusicRef.current.play().catch(() => {});
    }

    return () => {
      bgMusicRef.current?.pause();
    };
  }, [musicOn]);

  useEffect(() => {
    if (bgMusicRef.current) {
      if (musicOn) {
        bgMusicRef.current.play().catch(() => {});
      } else {
        bgMusicRef.current.pause();
      }
    }
  }, [musicOn]);

  useEffect(() => {
    if (soundOn) {
      correctSoundRef.current = new Audio('/sounds/correct.mp3');
      wrongSoundRef.current = new Audio('/sounds/wrong.mp3');
    }
  }, [soundOn]);

  useEffect(() => {
    correctSoundRef.current = new Audio('/sounds/correct.mp3');
    wrongSoundRef.current = new Audio('/sounds/wrong.mp3');
    
    correctSoundRef.current.volume = 0.8;
    wrongSoundRef.current.volume = 0.8;
  }, []);

  if (!questions.length) {
    return <p className="text-center mt-5">Loading questions...</p>;
  } 

  if (gameOver) {
    return (
      <div className="position-relative w-100" style={{ minHeight: '100vh' }}>
        <Container fluid className="questions-bg m-0 p-0 d-flex flex-column justify-content-between">
          <div className="game-result-wrapper">
            <GameResult correctAnswers={correctAnswers} questionsAnswered={questionsAnswered} onPlayAgain={resetGame} />
          </div>
        </Container>
        <LowerSection1 />
      </div>
    );
  }

  return (
        <div className="container-fluid position-relative w-100" style={{ minHeight: '100%' }}>
          <div className="container-fluid questions-bg m-0 p-0 position-relative w-100 d-flex flex-column justify-content-between" style={{ minHeight: '100%', flex: 1 }}>
          {/* Top Bar */}
          <div className='d-flex flex-column flex-lg-row justify-content-around align-items-center gap-3 gap-md-0 rounded-bottom-5 py-3 position-relative top-bar w-100' style={{ backgroundColor: topBarColor }}>
            <div className='d-flex gap-3'>
              <div className="rounded-3 py-2 ps-1 pe-5 d-flex align-items-center gap-1" style={{ backgroundColor: '#00000033' }}>
                <img src={Coin} alt="coin" width={30} />
                <span className='fw-bold'>{coins}</span>
              </div>
              <div className="rounded-3 py-2 ps-1 pe-5 d-flex align-items-center gap-1" style={{ backgroundColor: '#00000033' }}>
                <img src={Energy} alt="energy" width={30} />
                <span className='fw-bold'>{energy}/3</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 justify-content-center">
              <img src={categoryIcon} alt="music" />
              <h4 className="fw-bold">{category}</h4>
            </div>
            <div className='rounded-3 py-2 px-5' style={{ backgroundColor: '#00000033', color: '#F7B13C' }}>
              <div className="fw-bold fs-5">Q{current + 1}/{questions.length}</div>
            </div>
            <div onClick={() => setShowSettings(true)} className="rounded-3 py-2 px-2 settings-btn" style={{ backgroundColor: '#5FD0AB' }}>
              <img src={Settings} alt="settings" width={30} />
            </div>
          </div>

          {/* Question */}
          <Row className="justify-content-center align-items-center mt-5 mb-5">
            <Col xs={12} md={8}>
              <div className="text-dark p-4 rounded shadow text-center" style={{ backgroundColor: '#FAFAFA' }}>
                <p>{q.question}</p>
              </div>
            </Col>
          </Row>

          {/* Options */}
          <Row className="justify-content-center g-3 mb-4">
            {q.options.map(opt => (
              <Col xs={12} md={5} key={opt}>
                <button
                  className="w-100 py-3 fw-bold shadow border-0 rounded-3"
                  style={{ 
                    backgroundColor: selected
                    ? opt === q.answer
                      ? '#40C79A'
                      : opt === selected
                      ? '#EC0E11'
                      : '#FAFAFA'
                    : '#FAFAFA',
                   color:
                    selected && opt === q.answer
                      ? 'white'
                      : selected && opt === selected
                      ? 'white'
                      : hiddenOptions.includes(opt) ? '#ccc' : 'black',
                    pointerEvents: hiddenOptions.includes(opt) ? 'none' : 'auto', }}
                  disabled={!!selected}
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </button>
              </Col>
            ))}
          </Row>

          {/* Bottom Bar */}
          <div className="d-flex justify-content-around align-items-center mb-2">
            <button onClick={handleFiftyFifty} className="btn px-3 py-2 d-flex align-items-center fw-bold shadow rounded-3" style={{ backgroundColor: coins >= 100 ? '#60646E' : '#aaa', color: 'white'}}><img src={Bomb} alt="" /><span className='ms-1'>50/50</span> <span className='ms-5'><img src={Coin} className='ms-1' />100</span></button>
            <h3 className="fw-bold" style={{ color: '#B4080B', fontFamily: 'Rubik'}}><img src={Timer} /> 00:{timer < 10 ? `0${timer}` : timer}</h3>
            <button onClick={handleReveal} className="btn px-3 py-2 d-flex align-items-center fw-semibold fs-6 rounded-3 shadow" style={{ backgroundColor: coins >= 500 ? '#60646E' : '#aaa', color: 'white'}}><img src={Check} alt="" /><span className='ms-1'>Reveal <br /> Answer</span> <span className='ms-5'><img src={Coin} className='ms-1' />500</span></button>
          </div>
          {showSettings && (
            <SettingsModal onClose={() => setShowSettings(false)} onQuit={handleExit} soundOn={soundOn} musicOn={musicOn} toggleSound={() => setSoundOn(prev => !prev)} toggleMusic={() => setMusicOn(prev => !prev)} />
          )}
        </div>
        <LowerSection1 />
        </div>
  );
};

export default QuestionScreen;
