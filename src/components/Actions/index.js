import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';
import { Container, ActionsButton, ActionsList, Action } from './styles';

function Actions({
  id,
  onShowAction,
  visibleActionId,
  onClickShow,
  onClickDelete,
}) {
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
          <button type="button" onClick={onClickShow}>
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
          <button type="button" onClick={onClickDelete}>
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
  visibleActionId: PropTypes.number,
  onShowAction: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  onClickShow: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  onClickDelete: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

Actions.defaultProps = {
  visibleActionId: null,
};

export default Actions;
