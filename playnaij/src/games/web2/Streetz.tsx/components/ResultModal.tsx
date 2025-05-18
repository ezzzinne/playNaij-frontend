import React, { JSX } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {
  xp: number;
  onClose: () => void;
  onNext: () => void;
  type: 'correct' | 'wrong' | 'timeout';
  icon?: JSX.Element | string;
  correctAnswer?: string;
}

const ResultModal: React.FC<Props> = ({ xp, onNext, type, icon, correctAnswer }) => {
  const title = {
    correct: 'Correct Answer!',
    wrong: 'Incorrect Answer!',
    timeout: 'Time ran out!'
  }[type];

  const extra = {
    correct: '',
    wrong: `(${correctAnswer})`,
    timeout: `(${correctAnswer})`
  }[type];

  const message = {
    correct: `${xp} XP Earned`,
    wrong: `${xp} XP Earned`,
    timeout: 'Better luck next time!'
  }[type];

  return (
    <Modal show centered backdrop="static" contentClassName='rounded-4' dialogClassName='modal-dialog-centered'>
      <Modal.Body className="text-center p-3 p-sm-4" style={{ backgroundColor: '#E7F8F2', borderRadius: '1rem', maxWidth: '100%', width: '100%',}}>
        <h3 className='mb-3 fs-5 fs-sm-4' style={{ fontSize: '1.5rem' }}>{title}</h3>
        <p className='fw-bold fs-6 fs-sm-5 mb-2' style={{ color: '#EC0E11'}}>{extra}</p>
        {icon && (typeof icon === 'string' ? (
          <img src={icon} alt="icon" className='my-3 img-fluid'style={{ maxWidth: '100px', height: 'auto' }} />
        ) : (
          icon
        ))}
        <p className='my-3 fw-bold fs-6 fs-sm-5'><strong>{message}</strong></p>
        <Button className='my-2 px-4 py-2 fs-6' variant="success" onClick={onNext} >OK</Button>
      </Modal.Body>
    </Modal>
  );
};

export default ResultModal;
