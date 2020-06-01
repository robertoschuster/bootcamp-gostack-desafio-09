import React, { useState } from 'react';

import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';
import { Container, ActionsButton, ActionsList, Action } from './styles';

function Actions({ id, onShowAction, visibleActionId, show, onBlur }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
    onShowAction(id);
  }

  return (
    <Container>
      <ActionsButton onClick={handleToggleVisible} onBlur={onBlur}>
        ...
      </ActionsButton>
      <ActionsList visible={visible && visibleActionId === id}>
        <Action>
          <button type="button" onClick={show}>
            <MdRemoveRedEye size={18} color="#fff" />
            <span>Visualizar</span>
          </button>
        </Action>
        <Action>
          <button type="button" onClick={show}>
            <MdEdit size={18} color="#fff" />
            <span>Editar</span>
          </button>
        </Action>
        <Action>
          <button type="button" onClick={show}>
            <MdDeleteForever size={18} color="#fff" />
            <span>Excluir</span>
          </button>
        </Action>
      </ActionsList>
    </Container>
  );
}

export default Actions;
