import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function DeliveryStatus({ delivery }) {
  function getStatus() {
    if (delivery.cancel_date) {
      return 'CANCELADA';
    }
    if (delivery.end_date) {
      return 'ENTREGUE';
    }
    if (delivery.start_date) {
      return 'RETIRADA';
    }

    return 'PENDENTE';
  }

  const status = getStatus();

  return (
    <Container status={status}>
      <span />
      {status}
    </Container>
  );
}

DeliveryStatus.propTypes = {
  delivery: PropTypes.shape().isRequired,
};

export default DeliveryStatus;
