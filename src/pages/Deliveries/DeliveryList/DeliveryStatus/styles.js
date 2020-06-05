import styled from 'styled-components';
import status from './status';

export const Container = styled.div`
  background: ${(props) => {
    switch (props.status) {
      case status.entregue:
        return '#DFF0DF';
      case status.pendente:
        return '#F0F0DF';
      case status.cancelada:
        return '#FAB0B0';
      case status.retirada:
        return '#BAD2FF';
      default:
        break;
    }
  }};

  color: ${(props) => {
    switch (props.status) {
      case status.entregue:
        return '#2CA42B';
      case status.pendente:
        return '#C1BC35';
      case status.cancelada:
        return '#DE3B3B';
      case status.retirada:
        return '#4D85EE';
      default:
        break;
    }
  }};

  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;

    background: ${(props) => {
      switch (props.status) {
        case status.entregue:
          return '#2CA42B';
        case status.pendente:
          return '#C1BC35';
        case status.cancelada:
          return '#DE3B3B';
        case status.retirada:
          return '#4D85EE';
        default:
          break;
      }
    }};
  }
`;
