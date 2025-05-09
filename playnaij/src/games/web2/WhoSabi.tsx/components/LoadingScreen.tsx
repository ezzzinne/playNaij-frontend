import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo1 from '../assets/Who Sabi TM 1.svg';
import Logo from '../assets/Logo.svg'
import LowerSection1 from '../../Streetz.tsx/components/LowerSection1';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate('/play');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <>
      <div className="text-center text-white d-flex flex-column justify-content-evenly align-items-center " style={{ minHeight: '100vh', backgroundColor: '#4C1111' }}>
        <img src={Logo1} alt="WhoSabi" style={{ height: '100px' }} />
        <div className="progress mt-5 mx-auto" style={{ width: '50%' }}>
          <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: '#F7B13C' }}></div>
        </div>
        <div>
          <h4 className='me-2'>By <span><img src={Logo} /></span></h4>
          <p className='text-white mt-2' style={{ fontFamily: 'Rubik' }}>© 2025 PlayNaij Limited. ALL RIGHTS RESERVED</p>
        </div>
      </div>
      
      <div className="bg-black p-4 rounded text-start w-100 mx-auto my-0">
          <p>
            <strong style={{ display: 'inline-block', width: '120px' }}>Rating:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
              ⭐ 4.3
            </span>
          </p>
          <p>
            <strong style={{ display: 'inline-block', width: '120px' }}>Category:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
              Trivia Games
            </span>
          </p>
          <p>
            <strong style={{ display: 'inline-block', width: '120px' }}>Description:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
              <b>Who Sabi</b> is a culturally-rich trivia game that tests players’ knowledge of Nigerian pop culture, slangs, food, music, history, and lifestyle.
            </span>
          </p>
          <p>
            <strong style={{ display: 'inline-block', width: '120px' }}>How To Play:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
              Select the correct option to answer the question presented to you. Answer all questions before the time runs out.
            </span>
          </p>
        </div>
        
        <LowerSection1 />
    </>
  );
}
