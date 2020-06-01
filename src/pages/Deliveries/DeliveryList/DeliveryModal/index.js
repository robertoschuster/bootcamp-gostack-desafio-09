import React from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import { Container } from './styles';

function DeliveryModal({ delivery }) {
  return (
    <Container>
      <strong>Informações da Encomenda</strong>
      <p>
        {delivery &&
          `${delivery.recipient.street}, ${delivery.recipient.number}`}
      </p>
      <p>{delivery && delivery.recipient.compl}</p>
      <p>
        {delivery && `${delivery.recipient.city} - ${delivery.recipient.state}`}
      </p>
      <p>{delivery && delivery.recipient.zip_code}</p>
      <hr />
      <strong>Datas</strong>
      <p>
        <b>Retirada:</b>{' '}
        {delivery.start_date &&
          format(parseISO(delivery.start_date), 'dd/MM/yyyy')}
      </p>
      <p>
        <b>Entrega:</b>{' '}
        {delivery.end_date && format(parseISO(delivery.end_date), 'dd/MM/yyyy')}
      </p>
      <hr />
      <strong>Assinatura do destinatário</strong>
      <div>
        {delivery && delivery.signature && (
          <img src={delivery.signature} alt="Assinatura" />
        )}
      </div>
    </Container>
  );
}

DeliveryModal.propTypes = {
  delivery: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

// DeliveryModal.defaultProps = {};

export default DeliveryModal;
