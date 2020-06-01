import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';
import { Container, ActionsButton, ActionsList, Action } from './styles';

function Actions({ id, onShowAction, visibleActionId, onClick }) {
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
          <button type="button" onClick={onClick}>
            <MdRemoveRedEye size={18} color="#fff" />
            <span>Visualizar</span>
          </button>
        </Action>
        <Action>
          <button type="button">
            <MdEdit size={18} color="#fff" />
            <span>Editar</span>
          </button>
        </Action>
        <Action>
          <button type="button">
            <MdDeleteForever size={18} color="#fff" />
            <span>Excluir</span>
          </button>
        </Action>
      </ActionsList>
    </Container>
  );
}

Actions.propTypes = {
  id: PropTypes.number.isRequired,
  visibleActionId: PropTypes.number.isRequired,
  onShowAction: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  onClick: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default Actions;
