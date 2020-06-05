import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  /* background: lightcoral; */
  padding: 5px 20px;
  /* text-align: right; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    /* background: lightgreen; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    span {
      padding: 0 10px;
      color: ${colors.textDarker};
    }

    button {
      background: none;
      border: 0;
    }
  }
`;
