import { createUseStyles } from 'react-jss';
import { useEffect } from 'react';

const useStyles = createUseStyles({
  backDrop: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: '',
    backgroundColor: 'rgba(0,0,0,.4)',
    transition: '0.5s all',
    zIndex: 999,
  },

  modal: {
    width: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    pointerEvents: 'all',
  },

  modalBtn: {
    cursor: 'pointer',
  },
});

const Modal = ({ onClose }) => {
  const classes = useStyles();

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  // const handleBtnClick = e => {
  //   if (e.target.tagName === 'BUTTON') {
  //     console.log(e.target.tagName);
  //     onClose();
  //   }
  // };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.backDrop} onClick={onClose}>
      <div className={classes.modal}>
        <h3>My awesome Modal Window</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          perferendis inventore sapiente quam reiciendis asperiores doloribus
          mollitia vitae suscipit qui unde, repellat soluta, reprehenderit
          doloremque, quas pariatur sed rerum impedit?
        </p>

        <button type="button" onAuxClick={onClose} className={classes.modalBtn}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
