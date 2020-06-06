import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  border: 2px dashed #ccc;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    color: ${colors.textDisabled};
  }

  label {
    /* background: lightcoral; */
    width: 150px;
    height: 150px;
    border-radius: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      /* border: 3px solid rgba(255, 255, 255, 0.3); */
      background: ${colors.textDisabled};
    }

    input {
      display: none;
    }
  }
`;
