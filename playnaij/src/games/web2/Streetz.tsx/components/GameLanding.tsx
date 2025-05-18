import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'
import Player from '../assets/Vector.svg';
import Leaderboard from '../assets/sports-medal.svg';
import Timer from '../assets/Timer empty.svg';
import Play from '../assets/play.svg'
import Info from '../assets/information.svg'
import LowerSection from './LowerSection';
import HowToPlay from './HowToPlay';


const GameLanding: React.FC = () => {
  const navigate = useNavigate();
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  if (showHowToPlay) {
    return <HowToPlay onBack={() => setShowHowToPlay(false)} />;
  }

  return (
    <>
      <div className="text-white text-center py-2" style={{ minHeight: '100vh' }}>
        <div className='bg2'>
          <h1 className="display-1 m-auto fw-bold">STREETZ</h1>
          <div className="row row-cols-1 row-cols-md-2 g-3 mb-4 w-100 justify-content-center pb-3" style={{ backgroundColor: '#BCB7B766'}}>
            <div className=' col d-flex justify-content-center'>
              <button className="btn w-100 px-4 fs-6" onClick={() => navigate('/game')} style={{ color: 'black', width:'350px', background: 'linear-gradient(180deg, #ECEBEB -32.81%, #10B981 56.44%, #ECEBEB 135.94%)'}}>Start <span className='ms-2'><img src={Play} /></span></button>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
              <button onClick={() => setShowHowToPlay(true)} className="btn w-100 px-4 fs-6" style={{ color: 'white', width: '350px', background: 'linear-gradient(180deg, #DBDBDB -23.44%, #E90D0D 65.81%, #DBDBDB 145.31%)'}}>How To Play <span className='ms-2'><img src={Info} /></span></button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around my-4">
          <div className='p-2 rounded-3' style={{ backgroundColor: '#DCF9EF'}}>
            <img src={Player} alt="" className='mb-2 p-1' style={{ width: '40px'}} />
            <p style={{ color: '#2F80ED'}} className='fw-medium'>50 Players</p>
          </div>
          <div className='p-2 rounded-3' style={{ backgroundColor: 'white'}}>
            <img src={Leaderboard} alt="" className='mb-2 p-1' style={{ width: '40px'}} />
            <p style={{ color: '#2F80ED'}} className='fw-medium'>Leaderboard</p>
          </div>
          <div className='p-2 rounded-3' style={{ backgroundColor: '#96BAEB'}}>
            <img src={Timer} alt="" className='mb-2 p-1' style={{ width: '40px'}} />
            <p style={{ color: '#2F80ED'}} className='fw-medium'>15 Seconds</p>
          </div>
        </div>
        <div className="bg-black p-4 rounded text-start w-100 mx-auto my-0">
          <p className='d-flex align-items-center'>
            <strong style={{ display: 'inline-block', width: '120px' }}>Rating:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
              ⭐ 4.5
            </span>
          </p>
          <p className='d-flex align-items-center'>
            <strong style={{ display: 'inline-block', width: '120px' }}>Category:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
              Word Games
            </span>
          </p>
          <p className='d-flex align-items-center'>
            <strong style={{ display: 'inline-block', width: '120px' }}>Description:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
              Streetz is a word game that helps you build your vocabulary in the Nigerian Pigin English. It is a mix of modern and ruggedity.
            </span>
          </p>
          <p className='d-flex align-items-center'>
            <strong style={{ display: 'inline-block', width: '120px' }}>How To Play:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
              Type in your answer into the input field, this automatically fills in what you typed and you get a reward for inputting the correct answer.
            </span>
          </p>
        </div>
      </div>

      <LowerSection />
    </>
    
  );
};

export default GameLanding;
