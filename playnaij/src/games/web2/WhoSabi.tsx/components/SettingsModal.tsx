import React from 'react';
import './SettingsModal.css';

interface SettingsModalProps {
  onClose: () => void;
  onQuit: () => void;
  soundOn: boolean;
  musicOn: boolean;
  toggleSound: () => void;
  toggleMusic: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose, onQuit, soundOn, musicOn, toggleSound, toggleMusic }) => {
  return (
    <div className="settings-overlay">
      <div className="settings-box">
        <button className="close-button" onClick={onClose}>✕</button>

        <button className="settings-button green" onClick={toggleSound}>
          🔊 {soundOn ? 'Sound On' : 'Sound Off'}
        </button>

        <button className="settings-button green" onClick={toggleMusic}>
          🎵 {musicOn ? 'Music On' : 'Music Off'}
        </button>

        <button className="settings-button red" onClick={onQuit}>
          ❌ Quit Game
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
