import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  /* background: lightgreen; */
  position: relative;
  text-align: center;
`;

export const ActionsButton = styled.button`
  /* background: lightcyan; */
  border: 0;
  position: relative;
  padding: 3px 10px;
  background: none;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.textDark};
`;

export const ActionsList = styled.div`
  position: absolute;
  width: 160px;
  left: calc(50% - 80px); /** sempre centralizado no badge */
  top: calc(100% + 20px);
  background: ${colors.primary};
  border-radius: 4px;
  padding: 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: ${(props) => (props.visible ? '10' : 'auto')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${colors.primary};
  }
`;

export const Action = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};

  button {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;

    padding: 10px 34px;
    font-size: 14px;
    background: none;
    border: 0;
    color: ${colors.textLight};
    flex: 1;

    transition: background 0.2s;
    &:hover {
      background: ${darken(0.06, colors.primary)};
    }
    &:active {
      background: ${darken(0.2, colors.primary)};
    }

    svg {
      margin-right: 6px;
    }
  }

  /* Toda action seguida por uma action anterior (2ª, 3ª, etc) */
  & + div {
    /* margin-top: 15px; */
    /* padding-top: 15px; */
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
