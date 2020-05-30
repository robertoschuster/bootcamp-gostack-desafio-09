import styled, { css } from 'styled-components';
import { lighten } from 'polished';

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
  color: #999;
`;

export const ActionsList = styled.div`
  position: absolute;
  width: 160px;
  left: calc(50% - 80px); /** sempre centralizado no badge */
  top: calc(100% + 20px);
  background: #7d40e7;
  border-radius: 4px;
  padding: 15px 5px;
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
    border-bottom: 10px solid #7d40e7;
  }
`;

export const Action = styled.div`
  padding: 0 30px;
  color: #fff;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;

  a {
    margin-left: 6px;
    text-decoration: none;
    color: #fff;
  }

  /* Toda notificação seguida por uma notificação anterior (2ª, 3ª, etc) */
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
