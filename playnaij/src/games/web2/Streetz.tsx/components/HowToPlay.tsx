import React from 'react';
import Image from '../assets/STREETZ img.svg'
import LowerSection from './LowerSection';

const HowToPlay: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <>
        <div className="container-fluid text-white p-3" style={{ minHeight: '100vh' }}>
            <img src={Image} alt="" className="img-fluid mb-3 mx-auto d-block" style={{ maxHeight: '120px' }} />
            <div className='container py-3 rounded-3 bg-black my-4'>
                <h1 className='text-center' style={{ fontFamily: 'Ruslan Display', color: '#F59E0B'}}>HOW TO PLAY</h1>
                <p style={{ fontFamily: 'Rubik' }}>STEP 1: Type in your answer into the input field, this automatically fills in what you typed and you get a reward for inputting the correct answer.</p>
                <p>STEP 2: Claim Reward</p>
            </div>
            <button className="btn mt-3 text-center w-100" style={{ backgroundColor: '#10B981', color: '#F5F5F5'}} onClick={onBack}>
                Go Back to Game
            </button>
        </div>

        <LowerSection />
    </>
  );
};

export default HowToPlay;
