import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(-45deg, #7D40E7, #ab59c1); */
  background: #7D40E7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
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
      color: #666;
      text-align: left;
      padding: 6px 0;
    }

    input {
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7D40E7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
