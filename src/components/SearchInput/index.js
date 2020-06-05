import React from 'react';
import { MdSearch } from 'react-icons/md';
import colors from '~/styles/colors';
import { Container } from './styles';

function SearchInput(props) {
  return (
    <Container>
      <MdSearch size={24} color={colors.inputPlaceholder} />
      <input type="text" {...props} />
    </Container>
  );
}

export default SearchInput;
