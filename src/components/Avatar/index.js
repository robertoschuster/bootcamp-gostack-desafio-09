import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const colors = [
  '#f0f8ff',
  '#a6e7ff',
  '#d8e8e6',
  '#d5ffff',
  '#e5e8f2',
  '#a1d7c9',
  '#f4e8d1',
  '#ebe1ce',
  '#e3d3bf',
  '#d2bfc4',
  '#f8f5e9',
  '#aaffaa',
  '#deeadc',
  '#d7eee4',
  '#98d98e',
  '#98f6b0',
  '#ddedbd',
  '#c8f3cd',
  '#b7d24b',
  '#c3ddd6',
  '#bee7a5',
  '#9ab8c2',
  '#eaeeec',
  '#f7cee0',
  '#efc0fe',
  '#ffcfdc',
  '#fdd7e4',
  '#eeaaff',
  '#dba39a',
  '#dfb1b6',
  '#ffe8e5',
  '#f5cee6',
  '#fad6e5',
  '#ddd6e1',
  '#ffddee',
  '#ccccff',
  '#c4adc9',
  '#c2b2f0',
  '#cec8ef',
  '#d8d3e6',
  '#f4f3e0',
  '#fffe7a',
  '#fae199',
  '#f1e788',
];

function Avatar({ url, name }) {
  function getInitials() {
    const str = name;
    const [first = '', second = ''] = str ? str.split(' ') : '';
    return `${first !== '' ? first[0] : ''}${second !== '' ? second[0] : ''}`;
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const [color] = useState(getRandomColor);
  const [initials] = useState(getInitials);

  return (
    <Container color={url ? '#999' : color}>
      {url ? <img src={url} alt={name} /> : <div>{initials}</div>}
    </Container>
  );
}

Avatar.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  url: null,
};

export default Avatar;
