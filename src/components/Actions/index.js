import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';
import { Container, ActionsButton, ActionsList, Action } from './styles';

function Actions({ id, onShowAction, visibleActionId }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
    onShowAction(id);
  }

  return (
    <Container>
      <ActionsButton onClick={handleToggleVisible}>...</ActionsButton>
      <ActionsList visible={visible && visibleActionId === id}>
        <Action>
          <MdRemoveRedEye size={18} color="#fff" />
          <Link to="/">Visualizar</Link>
        </Action>
        <Action>
          <MdEdit size={18} color="#fff" />
          <Link to="/">Editar</Link>
        </Action>
        <Action>
          <MdDeleteForever size={18} color="#fff" />
          <Link to="/">Excluir</Link>
        </Action>
      </ActionsList>
    </Container>
  );
}

export default Actions;
