import React, { useState, useEffect } from 'react';
import { MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import colors from '~/styles/colors';

import { BaseContainer } from '~/components/BaseContainer';
import { Table } from '~/components/Table';
import { Title } from '~/components/Title';
import ProblemModal from './ProblemModal';
import Modal from '~/components/Modal';
import useModal from '~/components/Modal/useModal';

import Actions from '~/components/Actions';
import Pagination from '~/components/Pagination';

function Problems() {
  const [problems, setProblems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const { isShowing, toggle } = useModal();
  const [problem, setProblem] = useState(null);

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

  function handleShow(id) {
    const problemToShow = problems.find((d) => d.id === id);
    if (problemToShow) {
      setProblem(problemToShow);
      toggle();
    }
  }

  return (
    <BaseContainer>
      <Modal isShowing={isShowing} hide={toggle}>
        <ProblemModal problem={problem} />
      </Modal>

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
                <Actions height={90} width={150}>
                  <li>
                    <MdRemoveRedEye color={colors.primary} size={16} />
                    <button type="button" onClick={() => handleShow(item.id)}>
                      Visualizar
                    </button>
                  </li>
                  <li>
                    <MdDeleteForever color="#DE3B3B" size={16} />
                    <button type="button" onClick={() => handleDelete(item.id)}>
                      Cancelar encomenda
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

export default Problems;
