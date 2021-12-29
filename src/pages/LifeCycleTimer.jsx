import Timer from '../components/Timer';
import Modal from '../components/Modal';
import { useState } from 'react';

const LifeCycleTimer = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleTimerToggle = () => setShowTimer(prev => !prev);

  const toggleModal = () => setShowModal(prev => !prev);

  return (
    <div>
      <h2>Timer</h2>
      <button onClick={handleTimerToggle}>{showTimer ? 'Hide' : 'Show'}</button>
      {showTimer && <Timer />}

      <hr />

      <button onClick={toggleModal}>Show Modal</button>

      {showModal && <Modal onClose={toggleModal} />}
    </div>
  );
};

export default LifeCycleTimer;
