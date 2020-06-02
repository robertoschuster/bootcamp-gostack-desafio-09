import React, { useState, useEffect, useRef } from 'react';

import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import history from '~/services/history';
import { BaseContainer } from '~/components/BaseContainer';
import { Table } from '~/components/Table';
import { Title } from '~/components/Title';
import { Header } from './styles';
import DeliveryStatus from './DeliveryStatus';
import DeliveryModal from './DeliveryModal';
import Actions from '~/components/Actions';
import api from '~/services/api';

import Modal from '~/components/Modal';
import useModal from '~/components/Modal/useModal';

import { Button } from '~/components/Button';
import SearchInput from '~/components/SearchInput';

function Deliveries() {
  const [filter, setFilter] = useState('');
  const [deliveries, setDeliveries] = useState([]);
  const time = useRef(null);
  const [visibleActionId, setVisibleActionId] = useState(null);
  const { isShowing, toggle } = useModal();
  const [delivery, setDelivery] = useState(null);

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

  function showDelivery(id) {
    const deliv = deliveries.find((d) => d.id === id);
    if (deliv) {
      setDelivery(deliv);
      toggle();
    }
  }

  function editDelivery(id) {
    const deliv = deliveries.find((d) => d.id === id);
    if (deliv) {
      history.push({
        pathname: '/deliveries/create',
        delivery: deliv,
      });
    }
  }

  async function deleteDelivery(id) {
    try {
      // Delete on backand
      await api.delete(`deliveries/${id}`);

      // Update status on state
      const newDeliveries = deliveries.map((d) => {
        if (d.id === id) {
          d.cancel_date = new Date();
        }
        return d;
      });

      setDeliveries(newDeliveries);

      return toast.success('Encomenda excluída com sucesso!');
    } catch (error) {
      return toast.error('Falha ao excluir encomenda!.');
    }
  }

  return (
    <BaseContainer>
      <Modal isShowing={isShowing} hide={toggle}>
        <DeliveryModal delivery={delivery} />
      </Modal>

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
      <Table>
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
          {deliveries.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.recipient.name}</td>
              <td>{d.product}</td>
              <td>{d.deliveryman.name}</td>
              <td>{d.recipient.city}</td>
              <td>{d.recipient.state}</td>
              <td>
                <DeliveryStatus delivery={d} />
              </td>
              <td>
                <Actions
                  id={d.id}
                  onShowAction={handleShowAction}
                  visibleActionId={visibleActionId}
                  onBlur={() => setVisibleActionId(null)}
                  onClickShow={() => showDelivery(d.id)}
                  onClickEdit={() => editDelivery(d.id)}
                  onClickDelete={() => deleteDelivery(d.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </BaseContainer>
  );
}

export default Deliveries;
