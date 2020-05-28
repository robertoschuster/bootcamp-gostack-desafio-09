import React, { useState, useEffect } from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';
import { Container, Title, Header, List } from './styles';
import api from '~/services/api';

function Deliveries() {
  const [filter, setFilter] = useState('');
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries', {
        params: { q: filter },
      });

      setDeliveries(response.data);
    }

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
      <List>
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
            <tr>
              <td>{delivery.id}</td>
              <td>{delivery.recipient.name}</td>
              <td>{delivery.deliveryman.name}</td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>Entregue</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}

export default Deliveries;
