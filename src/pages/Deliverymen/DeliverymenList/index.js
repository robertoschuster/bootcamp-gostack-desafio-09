import React, { useState, useEffect, useRef } from 'react';
import { MdAdd, MdEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import colors from '~/styles/colors';

import { BaseContainer } from '~/components/BaseContainer';
import { Table } from '~/components/Table';
import { Title } from '~/components/Title';
import { Header } from './styles';

import Avatar from '~/components/Avatar';
import Actions from '~/components/Actions';
import Pagination from '~/components/Pagination';
import { Button } from '~/components/Button';
import SearchInput from '~/components/SearchInput';

function Deliverymen() {
  const [filter, setFilter] = useState('');
  const [deliverymen, setDeliverymen] = useState([]);
  const time = useRef(null);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadDeliverymen(f) {
      const response = await api.get('deliverymen', {
        params: { q: f, page },
      });

      setTotalPages(Number(response.headers['x-api-totalpages']));
      setDeliverymen(response.data);
    }

    clearTimeout(time.current);
    time.current = setTimeout(() => {
      loadDeliverymen(filter);
    }, 600);
  }, [filter, page]);

  function handleFilterChange(value) {
    setFilter(value);
  }

  function handleCreate() {
    history.push('/deliverymen/create');
  }

  function handleEdit(id) {
    const deliverymenToEdit = deliverymen.find((d) => d.id === id);
    if (deliverymenToEdit) {
      history.push({
        pathname: '/deliverymen/create',
        deliveryman: deliverymenToEdit,
      });
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Deseja mesmo excluir?')) {
      return;
    }

    try {
      // Delete on backand
      await api.delete(`deliverymen/${id}`);
      setDeliverymen(deliverymen.filter((d) => d.id !== id));

      toast.success('Entregador excluído com sucesso!');
    } catch (error) {
      toast.error('Falha ao excluir entregador!.');
    }
  }

  return (
    <BaseContainer>
      <Title>Gerenciando Entregadores</Title>

      <Header>
        <SearchInput
          placeholder="Buscar por Entregadores"
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        />

        <Button primary type="button" onClick={handleCreate}>
          <span>
            <MdAdd size={24} color={colors.iconLight} />
          </span>
          <span>Cadastrar</span>
        </Button>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>E-Mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map((d) => (
            <tr key={d.id}>
              <td>#{d.id}</td>
              <td>
                <Avatar url={d.avatar && d.avatar.url} name={d.name} />
              </td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Actions height={90} width={150}>
                  <li>
                    <MdEdit color="#4D85EE" size={16} />
                    <button type="button" onClick={() => handleEdit(d.id)}>
                      Editar
                    </button>
                  </li>
                  <li>
                    <MdDeleteForever color="#DE3B3B" size={16} />
                    <button type="button" onClick={() => handleDelete(d.id)}>
                      Excluir
                    </button>
                  </li>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </BaseContainer>
  );
}

export default Deliverymen;
