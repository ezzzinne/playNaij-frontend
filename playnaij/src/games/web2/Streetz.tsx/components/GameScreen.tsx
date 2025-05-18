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

const GameScreen: React.FC = () => {
  const [input, setInput] = useState('');
  const [correctWord, setCorrectWord] = useState('');
  const [hint, setHint] = useState('');
  const [scrambledWord, setScrambledWord] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [wordList, setWordList] = useState<WordData[]>([]);
  const [userXP, setUserXP] = useState(0);
  const [isLoggedIn] = useState(true);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [level, setLevel] = useState(1);
  const [levelIndex, setLevelIndex] = useState(0);

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
    fetch(`${import.meta.env.BASE_URL}words.json`)
      .then(res => res.json())
      .then((data: WordData[]) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setWordList(shuffled);

        const firstWord = shuffled[0];
        setCorrectWord(firstWord.word.toUpperCase());
        setHint(firstWord.hint);
        setScrambledWord(firstWord.word.toUpperCase().split('').sort(() => 0.5 - Math.random()));
        setTimeLeft(15);
      })
      .catch(err => console.error('Failed to load words', err));
  }, []);

  // useEffect(() => {
  //   fetch(`${import.meta.env.BASE_URL}words.json`)
  //     .then(res => res.json())
  //     .then((data: WordData[]) => {
  //       const shuffled = data.sort(() => 0.5 - Math.random());
  //       setWordList(shuffled);
  //       setCurrentWordIndex(0);
  //       setCorrectWord(shuffled[0].word.toUpperCase());
  //       setHint(shuffled[0].hint);
  //       setScrambledWord(shuffled[0].word.split('').sort(() => 0.5 - Math.random()));
  //       setTimeLeft(10);
  //     })
  //     .catch(err => console.error('Failed to load words', err));
  // }, []);

  // const loadNextWord = async () => {
  //   try {
  //     const res = await fetch(`${import.meta.env.BASE_URL}words.json`);
  //     const data: WordData[] = await res.json();

  //     // Shuffle words and pick one that hasn't been shown yet
  //     const remainingWords = data.filter(w => w.word.toUpperCase() !== correctWord.toUpperCase());
  //     const randomWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];

  //     setCorrectWord(randomWord.word.toUpperCase());
  //     setHint(randomWord.hint);

  //     // Shuffle letters
  //     const shuffledLetters = randomWord.word.toUpperCase().split('').sort(() => 0.5 - Math.random());
  //     setScrambledWord(shuffledLetters);

  //     setInput('');
  //     setTimeLeft(30);
  //     setModalType(null);
  //   } catch (err) {
  //     console.error('Failed to load word:', err);
  //   }
  //    if (levelIndex + 1 < 5) {
  //   setLevelIndex(prev => prev + 1);
  // } else {
  //   setLevel(prev => prev + 1);
  //   setLevelIndex(0);
  // }
  // };

  const loadNextWord = () => {
  if (levelIndex + 1 < 5) {
    setLevelIndex(prev => prev + 1);
  } else {
    setLevel(prev => prev + 1);
    setLevelIndex(0);
  }

  const nextWord = wordList[(level - 1) * 5 + (levelIndex + 1) % 5];
    if (nextWord) {
      setCorrectWord(nextWord.word.toUpperCase());
      setHint(nextWord.hint);
      setScrambledWord(nextWord.word.toUpperCase().split('').sort(() => 0.5 - Math.random()));
      setInput('');
      setTimeLeft(15);
      setModalType(null);
    } else {
      console.warn('No more words available.');
    }
  };

  const getLetterUsage = (input: string) => {
    const usage = new Map<string, number>();
    for (const char of input) {
      usage.set(char, (usage.get(char) || 0) + 1);
    }
    return usage;
  };

  const inputUsage = getLetterUsage(input);

  useEffect(() => {
    if (modalType || timeLeft === 0) return;
    
    const timer = setTimeout(() => {
      setTimeLeft(prev => {
        if (prev <= 1 && !modalType) {
          setModalType('timeout'); // only set timeout if user hasn’t answered
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [modalType, timeLeft]);

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
          <h4>LEVEL {level}</h4>
          <div className="progress my-4">
            <div className="progress-bar" style={{ width: `${((levelIndex + 1) / 5) * 100}%`, backgroundColor: '#F59E0B' }}>{levelIndex + 1}/5</div>
          </div>

          <div className="py-2 my-4 text-white" style={{ backgroundColor: '#B4080B' }}>{hint}</div>

          <div className="my-4 d-flex justify-content-center gap-2 flex-wrap">
            {Array.from(correctWord).map((_, i) => (
              <div key={i} className="border rounded-1 p-2 px-3" style={{ backgroundColor: '#414652', color: '#F5F5F5' }}>{input[i]?.toUpperCase() || '_'}</div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-2 flex-wrap" style={{ backgroundColor: '#4F4F4F'}}>
            {scrambledWord.map((char, idx) => {
              const usedCount = inputUsage.get(char) || 0;
              const totalCount = scrambledWord.filter(c => c === char).length;
              const alreadyUsed = input.slice(0).split('').filter(c => c === char).length >= totalCount;

              if (alreadyUsed || usedCount >= totalCount) return null;

              return (
                <button
                  key={`${char}-${idx}`}
                  className="btn btn-light"
                  onClick={() => setInput(prev => prev + char)}
                >
                  {char}
                </button>
              );
            })}
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
          <ResultModal type={modalType} icon={modalType === 'correct' || modalType === 'wrong' ? <img src={Cup} /> : <img src={Timer} /> } xp={modalType === 'correct' ? 12 : 0} onNext={closeModal} correctAnswer={modalType === 'wrong' || modalType === 'timeout' ? correctWord : undefined} onClose={closeModal} />
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


