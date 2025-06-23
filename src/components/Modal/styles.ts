// src/components/Modal/styles.ts
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
  z-index: 1000;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.extraLarge};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  width: 80%;
  max-width: 960px;
  color: ${(props) => props.theme.colors.white};
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 90%;
    padding: ${(props) => props.theme.spacing.large};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${(props) => props.theme.spacing.medium};
  right: ${(props) => props.theme.spacing.medium};
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
`;