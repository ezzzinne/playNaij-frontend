interface Props {
    onClose: () => void;
    onQuit: () => void;
  }
  const SettingsModal: React.FC<Props> = ({ onClose, onQuit }) => (
    <div className="modal d-block" onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
        <div className="modal-content p-4 text-center">
          <button className="btn btn-success my-2">🔊 Sound On</button>
          <button className="btn btn-success my-2">🎵 Music On</button>
          <button className="btn btn-danger my-2" onClick={onQuit}>❌ Quit Game</button>
        </div>
      </div>
    </div>
  );
  export default SettingsModal;
  