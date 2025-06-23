
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

export const CartContainer = styled.aside`
  background-color: ${(props) => props.theme.colors.primary};
  z-index: 1000;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 28px;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 16px;
  z-index: 10;
`;

export const CartItem = styled.li`
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 8px;
  margin-bottom: 16px;
  border-radius: ${(props) => props.theme.borderRadius.small};
  position: relative;
  align-items: flex-start;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    flex-grow: 1;
    color: ${(props) => props.theme.colors.primary};

    h3 {
      font-size: ${(props) => props.theme.fontSizes.medium};
      margin-bottom: 8px;
    }

    span {
      display: block;
      font-size: ${(props) => props.theme.fontSizes.small};
    }
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.primary};
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    padding: 0;

    &:hover {
        text-decoration: underline;
    }
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  padding: 8px 16px;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  margin-top: 8px;
  &:hover {
    opacity: 0.9;
  }
`;

export const FormContainer = styled.form`
  padding: 16px 0;
  color: ${(props) => props.theme.colors.white};

  h3 {
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-bottom: 16px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    font-size: ${(props) => props.theme.fontSizes.small};
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid ${(props) => props.theme.colors.darkGray};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.darkGray};
    border-radius: ${(props) => props.theme.borderRadius.small};
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const ConfirmationMessage = styled.div`
  color: ${(props) => props.theme.colors.white};
  padding: 16px 0;
  text-align: left;

  h3 {
    font-size: ${(props) => props.theme.fontSizes.extraLarge};
    margin-bottom: 24px;
    color: ${(props) => props.theme.colors.white};
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.small};
    line-height: 1.5;
    margin-bottom: 16px;
  }

  ${Button} {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    margin-top: 24px;
    width: 100%;
  }
`;