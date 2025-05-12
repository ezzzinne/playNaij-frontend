import Oversabi from '../assets/oversabi.svg';
import Repeat from '../assets/repeat.svg';
import SabiSmall from '../assets/sabi-small.svg';
import NoSabi from '../assets/no-sabi.svg';
import '../styles.css';
import { useNavigate } from 'react-router-dom';
import TimeUp from '../assets/time-up.svg';

interface GameResultProps {
  correctAnswers: number;
  questionsAnswered: number;
  onPlayAgain: () => void;
}

const GameResult: React.FC<GameResultProps> = ({ correctAnswers, questionsAnswered, onPlayAgain }) => {
  const navigate = useNavigate();

  const handleExit = () => {
    if (confirm('Are you sure you want to exit the game?')) {
      navigate('/categories'); // Navigate to the categories page
    }
  };

  const getMessage = () => {
    if (correctAnswers === questionsAnswered && questionsAnswered > 0) {
      return (
        <>
          <div className='d-flex flex-column justify-content-center align-items-center gap-3 text-white'>
            <h2 className='fw-bold mb-3'>Over Sabi!</h2>
            <p className='text-white mb-0'>You answered all the questions correctly.</p>
            <p className='text-white'>Your Points will not be saved. <span style={{ color: '#F59E0B' }}>Login to save progress</span></p>
            <img src={Oversabi} alt="" />
            <div className='d-flex gap-3 mt-4'>
              <button onClick={onPlayAgain} className='btn rounded-3 d-flex align-items-center gap-2 fw-semibold text-white fs-3' style={{ backgroundColor: '#10B981' }}>
                <img src={Repeat} />
                Play Again
              </button>
              <button onClick={handleExit} className='btn rounded-3 fw-semibold text-white fs-3' style={{ backgroundColor: '#10B981'}}>No, Thanks</button>
            </div>
          </div>
        </>
      );
    } else if (correctAnswers > 0 && correctAnswers < questionsAnswered) {
      return (
        <>
          <div className='d-flex flex-column justify-content-center align-items-center gap-3 text-white'>
            <h2 className='fw-bold mb-3'>You Sabi Small Sha!</h2>
            <p className='text-white mb-0'>You answered some of the questions correctly. </p>
            <p className='text-white'>Your Points will not be saved. <span style={{ color: '#F59E0B' }}>Login to save progress</span></p>
            <img src={SabiSmall} alt="" />
            <div className='d-flex gap-3 mt-4'>
              <button onClick={onPlayAgain} className='btn rounded-3 d-flex align-items-center gap-2 fw-semibold text-white fs-3' style={{ backgroundColor: '#10B981' }}>
                <img src={Repeat} />
                Play Again
              </button>
              <button onClick={handleExit} className='btn rounded-3 fw-semibold text-white fs-3' style={{ backgroundColor: '#10B981'}}>No, Thanks</button>
            </div>
          </div>
        </>
      )
    } else if (correctAnswers === 0 && questionsAnswered > 0) {
      return (
        <>
          <div className='d-flex flex-column justify-content-center align-items-center gap-3 text-white'>
            <h2 className='fw-bold mb-3'>Omo, You no Sabi oh!</h2>
            <p className='text-white mb-0'>You answered none of the questions correctly. </p>
            <p className='text-white'>Your Points will not be saved. <span style={{ color: '#F59E0B' }}>Login to save progress</span></p>
            <img src={NoSabi} alt="" />
            <div className='d-flex gap-3 mt-4'>
              <button onClick={onPlayAgain} className='btn rounded-3 d-flex align-items-center gap-2 fw-semibold text-white fs-3' style={{ backgroundColor: '#10B981' }}>
                <img src={Repeat} />
                Play Again
              </button>
              <button onClick={handleExit} className='btn rounded-3 fw-semibold text-white fs-3' style={{ backgroundColor: '#10B981'}}>No, Thanks</button>
            </div>
          </div>
        </>
      )
    } else {
      return (
      <div className='d-flex flex-column justify-content-center align-items-center gap-3 text-white'>
        <h2 className='fw-bold mb-3'>Time's up!</h2>
        <p className='text-white mb-0'>You didn't answer any questions. Try again and see if you sabi</p>
        <p className='text-white'>Your Points will not be saved. <span style={{ color: '#F59E0B' }}>Login to save progress</span></p>
        <img src={TimeUp} alt="" />
        <div className='d-flex gap-3 mt-4'>
          <button onClick={onPlayAgain} className='btn rounded-3 d-flex align-items-center gap-2 fw-semibold text-white fs-3' style={{ backgroundColor: '#10B981' }}>
            <img src={Repeat} />
            Play Again
          </button>
          <button onClick={handleExit} className='btn rounded-3 fw-semibold text-white fs-3' style={{ backgroundColor: '#10B981' }}>No, Thanks</button>
        </div>
      </div>
    );
    }
  };

  return (
      <div className='game-result-overlay'>
        {getMessage()}
      </div>
  );
};

export default GameResult;