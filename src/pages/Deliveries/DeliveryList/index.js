import React, { useState, useEffect, useRef } from 'react';

import { MdAdd } from 'react-icons/md';
import history from '~/services/history';
import { BaseContainer } from '~/components/BaseContainer';
import { Title } from '~/components/Title';
import { Header, DeliveriesTable } from './styles';
import DeliveryStatus from './DeliveryStatus';
import Actions from '~/components/Actions';
import api from '~/services/api';

import { Button } from '~/components/Button';
import SearchInput from '~/components/SearchInput';

function Deliveries() {
  const [filter, setFilter] = useState('');
  const [deliveries, setDeliveries] = useState([]);
  const time = useRef(null);
  const [visibleActionId, setVisibleActionId] = useState(null);

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

  function handleShowAction(id) {
    setVisibleActionId(id);
  }

  function handleCreate() {
    history.push('/deliveries/create');
  }

  return (
    <BaseContainer>
      <Title>Gerenciando encomendas</Title>

      <Header>
        <SearchInput
          placeholder="Buscar por encomendas"
          value={filter}
          onChange={(e) => handleChange(e.target.value)}
        />

        <Button primary type="button" onClick={handleCreate}>
          <span>
            <MdAdd size={24} color="#FFF" />
          </span>
          <span>Cadastrar</span>
        </Button>
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
                <Actions
                  id={delivery.id}
                  onShowAction={handleShowAction}
                  visibleActionId={visibleActionId}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </DeliveriesTable>
    </BaseContainer>
  );
}

export default Deliveries;
