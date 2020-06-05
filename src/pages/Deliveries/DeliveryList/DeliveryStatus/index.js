import React from 'react';
import PropTypes from 'prop-types';
import status from './status';

import { Container } from './styles';

function DeliveryStatus({ delivery }) {
  function getStatus() {
    if (delivery.canceled_at) {
      return status.cancelada;
    }
    if (delivery.end_date) {
      return status.entregue;
    }
    if (delivery.start_date) {
      return status.retirada;
    }

    return status.pendente;
  }

  const deliveryStatus = getStatus();

  return (
    <Container status={deliveryStatus}>
      <span />
      {deliveryStatus}
    </Container>
  );
}

DeliveryStatus.propTypes = {
  delivery: PropTypes.shape().isRequired,
};

export default DeliveryStatus;
