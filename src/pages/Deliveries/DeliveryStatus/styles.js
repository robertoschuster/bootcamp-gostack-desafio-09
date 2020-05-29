import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => {
    switch (props.status) {
      case 'ENTREGUE':
        return '#DFF0DF';
      case 'PENDENTE':
        return '#F0F0DF';
      case 'CANCELADA':
        return '#FAB0B0';
      case 'RETIRADA':
        return '#BAD2FF';
      default:
        break;
    }
  }};

  color: ${(props) => {
    switch (props.status) {
      case 'ENTREGUE':
        return '#2CA42B';
      case 'PENDENTE':
        return '#C1BC35';
      case 'CANCELADA':
        return '#DE3B3B';
      case 'RETIRADA':
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
        case 'ENTREGUE':
          return '#2CA42B';
        case 'PENDENTE':
          return '#C1BC35';
        case 'CANCELADA':
          return '#DE3B3B';
        case 'RETIRADA':
          return '#4D85EE';
        default:
          break;
      }
    }};
  }
`;
