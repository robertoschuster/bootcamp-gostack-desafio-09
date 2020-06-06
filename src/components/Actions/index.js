import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';

import colors from '~/styles/colors';
import { Container, ActionsButton, ActionsList, Action } from './styles';

function Actions({ onClickShow, onClickEdit, onClickDelete }) {
  const [visible, setVisible] = useState(false);

  function handleAction(action) {
    switch (action) {
      case 'show': {
        onClickShow();
        break;
      }
      case 'edit': {
        onClickEdit();
        break;
      }
      case 'delete': {
        onClickDelete();
        break;
      }
      default:
        break;
    }
  }

  return (
    <Container>
      <ActionsButton onClick={() => setVisible(!visible)}>...</ActionsButton>
      <ActionsList visible={visible}>
        <Action visible={onClickShow}>
          <button type="button" onClick={() => handleAction('show')}>
            <MdRemoveRedEye size={18} color={colors.textLight} />
            <span>Visualizar</span>
          </button>
        </Action>

        <Action visible={onClickEdit}>
          <button type="button" onClick={() => handleAction('edit')}>
            <MdEdit size={18} color={colors.textLight} />
            <span>Editar</span>
          </button>
        </Action>

        <Action visible={onClickDelete}>
          <button type="button" onClick={() => handleAction('delete')}>
            <MdDeleteForever size={18} color={colors.textLight} />
            <span>Excluir</span>
          </button>
        </Action>
      </ActionsList>
    </Container>
  );
}

Actions.propTypes = {
  onClickShow: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  onClickEdit: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  onClickDelete: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

Actions.defaultProps = {
  onClickShow: undefined,
  onClickEdit: undefined,
  onClickDelete: undefined,
};

export default Actions;
