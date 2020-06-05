import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Button = styled.button`
  background: ${(props) => (props.primary ? colors.primary : colors.neutral)};
  border: 0;
  padding: 10px 30px;
  border-radius: 4px;
  color: ${colors.textLight};
  font-weight: bold;
  margin-left: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 6px;
  }

  transition: background 0.2s;
  &:hover {
    background: ${(props) =>
      props.primary
        ? darken(0.06, colors.primary)
        : darken(0.06, colors.neutral)};
  }
  &:active {
    background: ${(props) =>
      props.primary
        ? darken(0.2, colors.primary)
        : darken(0.2, colors.neutral)};
  }
`;
