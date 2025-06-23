
import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.small};
  margin-bottom: ${(props) => props.theme.spacing.medium};

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: ${(props) => props.theme.borderRadius.small};
    margin-bottom: ${(props) => props.theme.spacing.small};
  }

  h3 {
    font-size: 18px;
    color: ${(props) => props.theme.colors.darkGray};
    margin-bottom: ${(props) => props.theme.spacing.small};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.darkGray};
    margin-bottom: ${(props) => props.theme.spacing.medium};
  }

  button {
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
  }
`;