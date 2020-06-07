import React, { useState, useEffect, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import colors from '~/styles/colors';

import { BaseContainer } from '~/components/BaseContainer';
import { Table } from '~/components/Table';
import { Title } from '~/components/Title';
import { Header } from './styles';

import Actions from '~/components/Actions';
import Pagination from '~/components/Pagination';
import { Button } from '~/components/Button';
import SearchInput from '~/components/SearchInput';

import getAddress from '~/lib/address';

function Recipients() {
  const [filter, setFilter] = useState('');
  const [recipients, setRecipients] = useState([]);
  const time = useRef(null);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadRecipients(f) {
      const response = await api.get('recipients', {
        params: { q: f, page },
      });

      setTotalPages(Number(response.headers['x-api-totalpages']));
      setRecipients(response.data);
    }

    clearTimeout(time.current);
    time.current = setTimeout(() => {
      loadRecipients(filter);
    }, 600);
  }, [filter, page]);

  function handleFilterChange(value) {
    setFilter(value);
  }

  function handleCreate() {
    history.push('/recipients/create');
  }

  function handleEdit(id) {
    const recipientToEdit = recipients.find((d) => d.id === id);
    if (recipientToEdit) {
      history.push({
        pathname: '/recipients/create',
        recipient: recipientToEdit,
      });
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Deseja mesmo excluir?')) {
      return;
    }

    try {
      // Delete on backand
      await api.delete(`recipients/${id}`);
      setRecipients(recipients.filter((d) => d.id !== id));

      toast.success('Destinatário excluído com sucesso!');
    } catch (error) {
      toast.error('Falha ao excluir destinatário!.');
    }
  }

  return (
    <BaseContainer>
      <Title>Gerenciando Destinatários</Title>

      <Header>
        <SearchInput
          placeholder="Buscar por Destinatários"
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
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((item) => (
            <tr key={item.id}>
              <td>#{item.id}</td>
              <td>{item.name}</td>
              <td>
                {getAddress(
                  item.street,
                  item.number,
                  item.compl,
                  item.city,
                  item.state
                )}
              </td>
              <td>
                <Actions
                  onClickEdit={() => handleEdit(item.id)}
                  onClickDelete={() => handleDelete(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </BaseContainer>
  );
}

export default Recipients;
