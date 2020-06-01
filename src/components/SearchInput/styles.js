import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;

  &:hover {
    box-shadow: 0 0 1px #ccc;
    border: 1px solid #bbb;
  }

  input {
    border: 0;
    outline: 0;
    color: #666;
    padding: 10px;

    &::placeholder {
      color: #ccc;
    }

    /* &:focus {
      box-shadow: 0 0 3px #7d40e7;
      border: 1px solid #7d40e7;
    } */
  }
`;
