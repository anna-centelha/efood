import styled from 'styled-components';

export const Hero = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;

  h2 {
    color: #E66767;
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    line-height: 1.2;
    max-width: 960px;
    position: relative;
    z-index: 2;
    padding: 0 16px;
  }
`;

export const RestaurantsList = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 40px;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`;