import React from 'react';

import { Container } from './styles';

function DeliveryStatus({ delivery }) {
  function getStatus(delivery) {
    if (delivery.canceled_at) {
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

  const status = getStatus(delivery);

  return (
    <Container status={status}>
      <span />
      {status}
    </Container>
  );
}

export default DeliveryStatus;
