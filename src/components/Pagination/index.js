import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Pagination({ totalPages, page, setPage }) {
  // const [page, setPage] = useState(1);

  async function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  return (
    <Container>
      <div>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => handlePage('back')}>
          <MdChevronLeft size={36} color="#7159c1" />
        </button>
        <span>
          Página {page} de {totalPages}
        </span>
        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => handlePage('next')}>
          <MdChevronRight size={36} color="#7159c1" />
        </button>
      </div>
    </Container>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
