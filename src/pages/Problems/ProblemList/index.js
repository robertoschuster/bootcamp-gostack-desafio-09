import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { BaseContainer } from '~/components/BaseContainer';
import { Table } from '~/components/Table';
import { Title } from '~/components/Title';

import Actions from '~/components/Actions';
import Pagination from '~/components/Pagination';

function Problems() {
  const [problems, setProblems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('delivery/problems', {
        params: { page },
      });

      setTotalPages(Number(response.headers['x-api-totalpages']));
      setProblems(response.data);
    }

    loadProblems();
  }, [page]);

  async function handleDelete(id) {
    if (!window.confirm('Deseja mesmo cancelar a encomenda?')) {
      return;
    }

    try {
      await api.delete(`problem/${id}/cancel-delivery`);
      setProblems(problems.filter((d) => d.id !== id));

      toast.success('Encomenda cancelada com sucesso!');
    } catch (error) {
      toast.error('Falha ao cancelar a encomenda!.');
    }
  }

  return (
    <BaseContainer>
      <Title>Problemas na entrega</Title>

      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((item) => (
            <tr key={item.id}>
              <td>#{item.delivery_id}</td>
              <td>{item.description}</td>
              <td>
                <Actions onClickDelete={() => handleDelete(item.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </BaseContainer>
  );
}

export default Problems;
