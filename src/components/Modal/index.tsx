
import React, { ReactNode } from 'react';
import { Overlay, Content, CloseButton } from './styles'; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  return (
    <Overlay onClick={onClose}> {}
      <Content onClick={(e) => e.stopPropagation()}> {}
        <CloseButton onClick={onClose}>&times;</CloseButton> {}
        {children}
      </Content>
    </Overlay>
  );
};

export default Modal;