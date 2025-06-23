
import styled from 'styled-components';

export const Hero = styled.div`
  height: 280px; 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  padding: ${(props) => props.theme.spacing.doubleExtraLarge} 0; 
  color: ${(props) => props.theme.colors.white};
  box-sizing: border-box; 


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.large}; 
    font-weight: 100; 
    z-index: 1; 
    margin-left: 170px; 
    margin-top: 15px;
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.doubleExtraLarge};
    z-index: 1;
    position: relative;
    margin-left: 170px; 
    margin-bottom: 25px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 200px;
    padding: ${(props) => props.theme.spacing.medium} 0;
    justify-content: center; 

    h2, h3 {
      text-align: center;
      margin-left: 0; 
      margin-right: 0;
      font-size: ${(props) => props.theme.fontSizes.large};
    }

    h3 {
      font-size: ${(props) => props.theme.fontSizes.extraLarge};
    }
  }
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  max-width: 1024px;
  width: 100%;
  margin: 80px auto; 

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 40px auto;
    padding: 0 16px; 
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 32px auto;
    padding: 0 16px;
  }
`;