import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import coinIcon from '../assets/Coin gold.svg'; // replace with your actual asset paths
import energyIcon from '../assets/Flash gold.svg';
import settingsIcon from '../assets/setting.svg';
import logo from '../assets/Who Sabi TM 1.svg';
import './HomeScreen.css';
import LowerSection1 from '../../Streetz.tsx/components/LowerSection1';
import CategorySelection from './CategorySelection';

const WhoSabiStartScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);

  const handleCategorySelect = (category: string) => {
    navigate(`/questions/${category}`);
  };

  return (
    <>
      <Container fluid className="whosabi-bg position-relative d-flex flex-column justify-content-between min-vh-100 p-3">

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
              <button className="settings-btn rounded-2">
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
              onClick={() => setShowCategories(true)}
            >
              Play Game
            </Button>
          </div>
        </div>

        {showCategories && (
          <div className="category-overlay-inside d-flex justify-content-center align-items-center text-white">
            <div className="category-box">
              <CategorySelection onSelect={handleCategorySelect} />
            </div>
          </div>
        )}
      </Container>
  
        {/* Lower Section */}
      <LowerSection1 />

      
    </>
  );
};

export default WhoSabiStartScreen;
