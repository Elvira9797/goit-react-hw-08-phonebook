import { createPortal } from 'react-dom';
import { Overlay, StyledModal } from './Modal.styled';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(toggleModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(toggleModal());
    }
  };

  const modalRoot = document.querySelector('#modal-root');
  return createPortal(
    <AnimatePresence>
      <Overlay
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <StyledModal
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </StyledModal>
      </Overlay>
    </AnimatePresence>,
    modalRoot
  );
};

export default Modal;
