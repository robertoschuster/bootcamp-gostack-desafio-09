import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  padding: 10px;
  color: ${colors.textDark};
  line-height: 1.8;
  font-size: 13px;
  min-width: 400px;

  strong {
    color: ${colors.textDark};
    font-size: 12px;
    font-weight: bold;
  }
`;
