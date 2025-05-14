import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import coinIcon from '../assets/Coin gold.svg'; 
import energyIcon from '../assets/Flash gold.svg';
import settingsIcon from '../assets/setting.svg';
import logo from '../assets/Who Sabi TM 1.svg';
import './HomeScreen.css';
import LowerSection1 from '../../Streetz.tsx/components/LowerSection1';
import CategorySelection from './CategorySelection';
import SettingsModal from './SettingsModal';

const enterFullscreenAndLandscape = async () => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const docElm = document.documentElement;

  if (isMobile) {
    // Check if the device is mobile and in portrait mode
    if (window.innerHeight > window.innerWidth) {
      // Request fullscreen
      if (docElm.requestFullscreen) {
        await docElm.requestFullscreen();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } else if ((docElm as any).webkitRequestFullscreen) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (docElm as any).webkitRequestFullscreen();
      }
    }

    try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (screen.orientation && (screen.orientation as any).lock) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (screen.orientation as any).lock('landscape');
    }
  } catch (err) {
    console.warn('Orientation lock not supported:', err);
  }
  }
};

const WhoSabiStartScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [musicOn, setMusicOn] = useState(true);

  useEffect(() => {
    if (showSettings) {
      return;
    }
  })

  const handleCategorySelect = (category: string) => {
    navigate(`/questions/${category}`);
  };

  function handleExit(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <Container fluid className="whosabi-bg position-relative d-flex flex-column justify-content-between p-3" style={{ minHeight: '100vh'}}>

        <div className={`main-content ${showCategories ? 'blurred' : ''}`}>
          {/* Top Bar */}
          <Row className="justify-content-between align-items-center mb-3">
            <Col xs="auto" className="d-flex align-items-center gap-3">
              <div className="top-box d-flex align-items-center gap-2">
                <img src={coinIcon} alt="coins" className="top-icon" />
                <span className="top-text">0</span>
              </div>
              <div className="top-box d-flex align-items-center gap-2">
                <img src={energyIcon} alt="energy" className="top-icon" />
                <span className="top-text">3/3</span>
              </div>
            </Col>
            <Col xs="auto">
              <button onClick={() => setShowSettings(true)} className="settings-btn rounded-2">
                <img src={settingsIcon} alt="settings" className="top-icon" />
              </button>
            </Col>
          </Row>

          {/* Logo and Play Button */}
          <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
            <img src={logo} alt="WhoSabi Logo" className="whosabi-logo mb-4" />
            <Button
              className="play-btn rounded-3 fw-bold fs-3 text-white-emphasis"
              style={{ backgroundColor: '#F59E0B', width:'300px', maxWidth: '90%' }}
              onClick={async () => {
                await enterFullscreenAndLandscape();
                setShowCategories(true);
              }}
            >
              Play Game
            </Button>
          </div>
          <div className="rotate-warning">
            <p>Please rotate your device to landscape mode for the best experience.</p>
          </div>
        </div>

        {showCategories && (
          <div className="category-overlay-inside d-flex justify-content-center align-items-center text-white">
            <div className="category-box">
              <CategorySelection onSelect={handleCategorySelect} />
            </div>
          </div>
        )}
        {showSettings && (
            <SettingsModal onClose={() => setShowSettings(false)} onQuit={handleExit} soundOn={soundOn} musicOn={musicOn} toggleSound={() => setSoundOn(prev => !prev)} toggleMusic={() => setMusicOn(prev => !prev)} />
          )}
      </Container>
  
        {/* Lower Section */}
      <LowerSection1 />

      
    </>
  );
};

export default WhoSabiStartScreen;
