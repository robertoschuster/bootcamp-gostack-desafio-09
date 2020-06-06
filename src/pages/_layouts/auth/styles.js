import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: ${colors.panelBackground};
  padding: 50px 20px;
  border-radius: 4px;
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 200px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      font-size: 14px;
      font-weight: bold;
      color: ${colors.textLight};
      text-align: left;
      padding: 6px 0;
    }

    input {
      background: ${colors.inputBackground};
      border: 1px solid ${colors.borderColor};
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${colors.textDark};
      margin: 0 0 10px;

      &::placeholder {
        color: ${colors.inputPlaceholder};
      }
    }

    span {
      color: ${colors.textError};
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${colors.primary};
      font-weight: bold;
      color: ${colors.textLight};
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, colors.primary)};
      }
    }

    a {
      color: ${colors.textLight};
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
