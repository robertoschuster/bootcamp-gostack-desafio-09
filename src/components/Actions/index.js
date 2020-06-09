import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';

import colors from '~/styles/colors';
import {
  Container,
  ActionsButton,
  ActionsContainer,
  ActionsList,
} from './styles';

function Actions({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <ActionsButton onClick={() => setVisible(!visible)}>
        <MdMoreHoriz color={colors.textDark} size={25} />
      </ActionsButton>

      <ActionsContainer visible={visible}>
        <ActionsList>{children}</ActionsList>
      </ActionsContainer>
    </Container>
  );
}

Actions.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Actions;
