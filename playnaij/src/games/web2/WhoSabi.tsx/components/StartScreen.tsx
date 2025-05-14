import { useNavigate } from 'react-router-dom';
import LowerSection1 from '../../Streetz.tsx/components/LowerSection1';
import Play from '../assets/play.svg';
import Logo from '../assets/Who Sabi TM 1.svg'

  const StartScreen = () => {
    const navigate = useNavigate();
    const handleStart = () => {
      navigate('/loading');
    }

    return (
      <>
        <div className="text-center d-flex flex-column justify-content-evenly align-items-center my-4 rounded-2" style={{ minHeight: '100vh', backgroundColor: '#4C1111'}}>
          <p>Your progress won't be saved. <a href="/login" className="text-warning" style={{ textDecoration: 'none'}}>Login to save progress</a></p>
          <img src={Logo} alt="WhoSabi Logo" style={{ width: 250 }} />
          <button className="btn mt-4 fs-6" onClick={handleStart} style={{ color: 'black', width:'300px', maxWidth: '90%', background: 'linear-gradient(180deg, #ECEBEB -32.81%, #10B981 56.44%, #ECEBEB 135.94%)'}}>Start <span className='ms-2'><img src={Play} /></span></button>
        </div>

        <div className="bg-black p-4 rounded text-start w-100 mx-auto my-0">
          <p className='d-flex align-items-center'>
            <strong style={{ display: 'inline-block', width: '120px' }}>Rating:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
              ⭐ 4.3
            </span>
          </p>
          <p className='d-flex align-items-center'>
            <strong style={{ display: 'inline-block', width: '120px' }}>Category:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
              Trivia Games
            </span>
          </p>
          <p className='d-flex align-items-center'>
            <strong style={{ display: 'inline-block', width: '120px' }}>Description:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
            <b>Who Sabi</b> is a culturally-rich trivia game that tests players’ knowledge of Nigerian pop culture, slangs, food, music, history, and lifestyle.
            </span>
          </p>
          <p className='d-flex align-items-center'>
            <strong style={{ display: 'inline-block', width: '120px' }}>How To Play:</strong>
            <span style={{ display: 'inline-block', maxWidth: 'calc(100% - 120px)' }}>
            Select the correct option to answer the question presented to you. Answer all questions before the time runs out.
            </span>
          </p>
        </div>

        <LowerSection1 />
      </>
    )
  }
  export default StartScreen;
  