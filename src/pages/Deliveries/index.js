import React, { useState, useEffect } from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';
import { Container, Title, Header, DeliveriesTable } from './styles';
import DeliveryStatus from './DeliveryStatus';
import api from '~/services/api';

function Deliveries() {
  const [filter, setFilter] = useState('');
  const [deliveries, setDeliveries] = useState([]);

  async function loadDeliveries() {
    const response = await api.get('deliveries', {
      // params: {},
    });

    setDeliveries(response.data);
  }

  useEffect(() => {}, []);

  useEffect(() => {
    loadDeliveries();
  }, [filter]);

  return (
    <Container>
      <Title>Gerenciando encomendas</Title>
      <Header>
        <div>
          <input type="text" placeholder="Buscar por encomendas" />
          <button type="button">
            <MdSearch size={24} color="#FFF" />
          </button>
        </div>

        <button type="button">
          <MdAdd size={24} color="#FFF" />
          <span>Cadastrar</span>
        </button>
      </Header>
      <DeliveriesTable>
        <thead>
          <tr>
            <th>Id</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.id}</td>
              <td>{delivery.recipient.name}</td>
              <td>{delivery.deliveryman.name}</td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>
                <DeliveryStatus delivery={delivery} />
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </DeliveriesTable>
    </Container>
  );
}

export default Deliveries;
