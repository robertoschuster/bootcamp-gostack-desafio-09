import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  /* background: lightpink; */
  /* padding: 0 30px; */

  img {
    background: lightgreen;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  div {
    background: ${(props) => props.color};
    width: 36px;
    height: 36px;
    border-radius: 50%;
    /* border-width: 1px;
    border-style: solid;
    border-color: ${(props) => darken(0.1, props.color)}; */
    color: ${(props) => darken(0.3, props.color)};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
