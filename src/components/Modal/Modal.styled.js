import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Modal = styled.div`
  max-width: 1000px;
  max-height: 600px;
  overflow: hidden;
`;

export const ModalImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
