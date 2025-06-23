
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary}; 
  padding: ${(props) => props.theme.spacing.extraLarge} 0;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.medium};

  h1 {
    font-size: ${(props) => props.theme.fontSizes.extraLarge};
    font-weight: 900;
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.extraLarge};
    font-weight: 900;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.small};
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

export const SocialIcon = styled.a`
  display: inline-block;
  img {
    width: 24px; 
    height: 24px;
    object-fit: contain;
  }
`;

export const CopyrightText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 1.5;
  color: ${(props) => props.theme.colors.primary};
`;