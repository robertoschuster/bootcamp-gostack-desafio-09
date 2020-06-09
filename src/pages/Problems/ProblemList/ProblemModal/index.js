import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ProblemModal({ problem }) {
  return (
    <Container>
      <strong>VISUALIZAR PROBLEMA</strong>
      <p>{problem && problem.description}</p>
    </Container>
  );
}

ProblemModal.propTypes = {
  problem: PropTypes.shape(),
};

ProblemModal.defaultProps = {
  problem: null,
};

export default ProblemModal;
