// src/components/RestaurantCard/styles.ts
import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.small};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  position: relative;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: ${(props) => props.theme.borderRadius.small};
    margin-bottom: ${(props) => props.theme.spacing.small};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.small};

  h3 {
    font-size: 18px;
    color: ${(props) => props.theme.colors.darkGray}; 
    margin: 0;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    margin-right: 4px;
    color: ${(props) => props.theme.colors.darkGray};
  }
  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.darkGray}; 
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.medium};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: block;
  width: 100%;
`;