
import React from 'react';
import { FooterContainer, Logo, SocialLinks, SocialIcon, CopyrightText } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo to="/"> {}
        <h1>efood!</h1>
        <span>!</span>
      </Logo>
      <SocialLinks>
        {}
        <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="URL_DO_INSTAGRAM_ICON" alt="Instagram" />
        </SocialIcon>
        <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="URL_DO_FACEBOOK_ICON" alt="Facebook" />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="URL_DO_TWITTER_ICON" alt="Twitter" />
        </SocialIcon>
      </SocialLinks>
      <CopyrightText>
        Avenida da Liberdade, 255 | Centro - São Paulo
        <br />
        Todos os direitos reservados
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;