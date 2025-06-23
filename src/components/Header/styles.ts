import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderContainerProps {
  isProfilePage?: boolean;
}

interface LogoProps {
  isProfilePage?: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  color: ${(props) => (props.isProfilePage ? '#FFEBD9' : '#E66767')};
  padding: ${(props) => (props.isProfilePage ? '24px 0' : '64px 0 0')};
  height: ${(props) => (props.isProfilePage ? 'auto' : '360px')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 10;
  overflow: hidden;

  ${(props) => props.isProfilePage ? `
    background-color: #E66767;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    padding: 24px 170px;
  ` : `
    background-color: #FFEBD9;
    background-image: url('https://raw.githubusercontent.com/thiagoerock/eFood-projeto-e-start/main/src/assets/images/hero_background_pattern.svg');
    background-size: 80px 80px;
    background-repeat: repeat;
  `}
`;

export const Logo = styled(Link)<LogoProps>`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none; 
  color: inherit;
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  z-index: 2;
  margin-top: 0;
  margin-bottom: ${(props) => (props.isProfilePage ? '0' : '80px')};

  h1 {
    margin: 0;
    font-size: 24px;
  }
  span {
    font-size: 24px;
    color: inherit;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  padding: 8px 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartCount = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 2;
`;