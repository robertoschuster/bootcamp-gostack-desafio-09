import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container } from './styles';

function SearchInput(props) {
  return (
    <Container>
      <MdSearch size={24} color="#ccc" />
      <input type="text" {...props} />
    </Container>
  );
}

export default SearchInput;
