import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${colors.inputBackground};
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid ${colors.inputBorder};
  border-radius: 4px;
  padding: 0 10px;

  &:hover {
    box-shadow: 0 0 1px ${colors.inputBorderHover};
    border: 1px solid ${colors.inputBorderHover};
  }

  input {
    border: 0;
    outline: 0;
    color: ${colors.textDark};
    padding: 10px;

    &::placeholder {
      color: ${colors.inputPlaceholder};
    }
  }
`;
