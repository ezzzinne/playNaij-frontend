import React, { useEffect, useState } from 'react';
import ResultModal from './ResultModal';
import LowerSection from './LowerSection';
import Image from '../assets/STREETZ img.svg';
import Time from '../assets/fast time.svg';
import Cup from '../assets/Cup gold.svg';
import Timer from '../assets/Timer empty.svg';
import Coin from '../assets/Coin gold.svg'
import { useNavigate } from 'react-router-dom';
import HowToPlay from './HowToPlay';

interface WordData {
  word: string;
  hint: string;
}

type ModalType = 'correct' | 'wrong' | 'timeout' | null;

const fetchWordFromAPI = async (): Promise<WordData> => {
  // Mock API response (replace with real fetch in production)
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ word: 'DANFO', hint: 'A Yellow Vehicle , regularly used for transportation' });
    }, 500)
  );
};

// what the above code should look like
// const fetchWordFromAPI = async (): Promise<WordData> => {
//   const response = await fetch('/api/word'); // replace with actual URL
//   const data = await response.json();
//   return {
//     word: data.word,
//     hint: data.hint,
//   };
// };

const GameScreen: React.FC = () => {
  const [input, setInput] = useState('');
  const [correctWord, setCorrectWord] = useState('');
  const [hint, setHint] = useState('');
  const [scrambledWord, setScrambledWord] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [currentWordIndex] = useState(0);
  const [wordList] = useState<{ word: string; hint: string }[]>([]);
  const [userXP, setUserXP] = useState(0);
  const [isLoggedIn] = useState(true);
  const [showHowToPlay, setShowHowToPlay] = useState(false);


  const handleShuffle = () => {
    setScrambledWord(prev => [...prev].sort(() => 0.5 - Math.random()));
  };

  const navigate = useNavigate();
  
  const handleExit = () => {
    if (confirm('Are you sure you want to exit the game?')) {
      navigate('/game1'); 
    }
  };
  
  const handleMore = () => {
    setShowMoreOptions(prev => !prev);
  };

  useEffect(() => {
    const startGame = async () => {
      const data = await fetchWordFromAPI();
      setCorrectWord(data.word.toUpperCase());
      setHint(data.hint);
      setScrambledWord(data.word.split('').sort(() => 0.5 - Math.random()));
      setInput('');
      setTimeLeft(30);
    };
    startGame();
  }, []);

  const loadNextWord = async () => {
    const data = await fetchWordFromAPI();
    setCorrectWord(data.word.toUpperCase());
    setHint(data.hint);
    setScrambledWord(data.word.split('').sort(() => 0.5 - Math.random()));
    setInput('');
    setTimeLeft(30);
    setModalType(null);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setModalType('timeout');
      return;
    }
    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmit = () => {
    if (input.toUpperCase() === correctWord.toUpperCase()) {
      setUserXP((prevXP) => prevXP + 12);
      setModalType('correct');
    } else {
      setModalType('wrong');
    }
  };
  
  function closeModal(): void {
    loadNextWord();
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [input, handleSubmit]);
  
  if (showHowToPlay) {
    return <HowToPlay onBack={() => setShowHowToPlay(false)} />;
  }
  
  return (
    <>
      <div className="container-fluid text-white text-center p-3" style={{ minHeight: '100%' }}>
        <img src={Image} alt="" className="img-fluid mb-3 mx-auto d-block" style={{ maxHeight: '120px' }} />
        <div className='container py-3 rounded-3 bg-black my-4'>
          <h4>LEVEL 1</h4>
          <div className="progress my-4">
            <div className="progress-bar" style={{ width: `${((currentWordIndex + 1) / wordList.length) * 100}%`, backgroundColor: '#F59E0B' }}>{currentWordIndex + 1}/{wordList.length || 1}</div>
          </div>

          <div className="py-2 my-4 text-white" style={{ backgroundColor: '#B4080B' }}>{hint}</div>

          <div className="my-4 d-flex justify-content-center gap-2 flex-wrap">
            {Array.from(correctWord).map((_, i) => (
              <div key={i} className="border rounded-1 p-2 px-3" style={{ backgroundColor: '#414652', color: '#F5F5F5' }}>{input[i]?.toUpperCase() || '_'}</div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-2 flex-wrap" style={{ backgroundColor: '#4F4F4F'}}>
            {scrambledWord.map((char, idx) => (
              <button key={idx} className="btn btn-light" onClick={() => setInput(prev => prev + char)}>
                {char}
              </button>
            ))}
          </div>

          <div className="row g-2 align-items-center my-4">
            <div className='col-12 col-md-9'>
              <input className="form-control" value={input} onChange={(e) => setInput(e.target.value.toUpperCase())} maxLength={correctWord.length} placeholder='Type In Your Answer' />
            </div>
            <div className='col-12 col-md-3'>
              <button className="btn w-100" style={{ backgroundColor: '#10B981', color: '#111827' }} onClick={handleSubmit}>Enter</button>
            </div>
          </div>

          <div className="text-warning fs-5 fw-bold my-4"><img src={Time} alt='Timer icon' style={{ width: '30px'}} />{'00:'} {timeLeft < 10 ? `0${timeLeft}` : timeLeft}</div>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
            <button onClick={handleShuffle} className="btn" style={{ color: '#111827', background: 'linear-gradient(180deg, #ECEBEB -32.81%, #10B981 56.44%, #ECEBEB 135.94%)'}}>Shuffle <i className='bi bi-shuffle'></i></button>
            <button onClick={() => setShowHowToPlay(true)} className="btn" style={{ background: 'linear-gradient(180deg, #ECEBEB -32.81%, #F59E0B 56.44%, #ECEBEB 135.94%)', color: '#111827'}}>How To Play <i className='bi bi-shuffle'></i></button>
            <button onClick={handleExit} className="btn" style={{ background: 'linear-gradient(180deg, #DBDBDB -23.44%, #E90D0D 65.81%, #DBDBDB 145.31%)', color: '#F5F5F5' }}>Exit <i className="bi bi-x-circle-fill"></i></button>
            <button onClick={handleMore} className="btn border-light" style={{ color: '#F5F5F5' }}>Menu <i className="bi bi-list"></i></button>

            {isLoggedIn && (
              <button className='btn text-white fw-bold fs-4' style={{ backgroundColor: '#2F80ED' }}> XP: <span><img src={Coin} style={{ width: '25px', marginBottom: '5px'}}/></span>{userXP}</button>
              
            )}
          </div>
        </div>
        
        {modalType && (
          <ResultModal type={modalType} icon={modalType === 'correct' || modalType === 'wrong' ? <img src={Cup} /> : <img src={Timer} /> } xp={modalType === 'correct' ? 12 : 0} onNext={closeModal} correctAnswer={modalType === 'wrong' ? correctWord : undefined} onClose={closeModal} />
        )}
      </div>

      <LowerSection />
    </>
  );
};

export default GameScreen;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setShowMoreOptions(_arg0: (prev: unknown) => boolean) {
  throw new Error('Function not implemented.');
}

