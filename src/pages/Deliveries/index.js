import React, { useState, useEffect, useRef } from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';
import { Container, Title, Header, DeliveriesTable } from './styles';
import DeliveryStatus from './DeliveryStatus';
import api from '~/services/api';

function Deliveries() {
  const [filter, setFilter] = useState('');
  const [deliveries, setDeliveries] = useState([]);
  const time = useRef(null);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries', {
        params: { q: filter },
      });

      setDeliveries(response.data);
    }

    clearTimeout(time.current);
    time.current = setTimeout(() => {
      loadDeliveries();
    }, 600);
  }, [filter]);

  function handleChange(value) {
    setFilter(value);
  }

  return (
    <Container>
      <Title>Gerenciando encomendas</Title>

      <Header>
        <div>
          <MdSearch size={24} color="#ccc" />
          <input
            type="text"
            id="filtro"
            placeholder="Buscar por encomendas"
            value={filter}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <button type="button">
          <span>
            <MdAdd size={24} color="#FFF" />
          </span>
          <span>Cadastrar</span>
        </button>
      </Header>

      <DeliveriesTable>
        <thead>
          <tr>
            <th>Id</th>
            <th>Destinatário</th>
            <th>Encomenda</th>
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
              <td>{delivery.product}</td>
              <td>{delivery.deliveryman.name}</td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>
                <DeliveryStatus delivery={delivery} />
              </td>
              <td>
                <button type="button">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </DeliveriesTable>
    </Container>
  );
}

export default Deliveries;
