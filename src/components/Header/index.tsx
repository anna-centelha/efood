import React from 'react';
import { HeaderContainer, Logo, NavMenu, NavItem, CartCount } from './styles';

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
  isProfilePage?: boolean;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartItemCount, isProfilePage, children }) => {
  return (
    <HeaderContainer isProfilePage={isProfilePage}>
      {isProfilePage ? (
        <>
          <NavMenu>
            <NavItem to="/">Restaurantes</NavItem>
          </NavMenu>
          <Logo to="/" isProfilePage={true}>
            <h1>efood!</h1>
            <span>!</span>
          </Logo>
          <CartCount onClick={onCartClick}>{cartItemCount} produto(s) no carrinho</CartCount>
        </>
      ) : (
        <>
          <Logo to="/" isProfilePage={false}>
            <h1>efood!</h1>
            <span>!</span>
          </Logo>
          {children}
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;