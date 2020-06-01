import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  background: ${(props) => (props.primary ? '#7d40e7' : '#999')};
  border: 0;
  padding: 10px 30px;
  border-radius: 4px;
  color: #fff;
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
      props.primary ? darken(0.06, '#7d40e7') : darken(0.06, '#999')};
  }
  &:active {
    background: ${(props) =>
      props.primary ? darken(0.2, '#7d40e7') : darken(0.2, '#999')};
  }
`;
