import { darken } from 'polished';

const colors = {
  primary: '#7d40e7',
  neutral: '#999',

  textDark: '#666',
  textDarker: '#333',
  textLight: '#fff',
  textDisabled: '#ccc',
  textError: '#fb6f91',

  iconLight: '#fff',

  inputBorder: '#ccc',
  inputBorderHover: darken(0.06, '#ccc'),
  panelBorder: '#ddd',

  background: '#f5f5f5',

  panelBackground: '#fff',
  inputBackground: '#fff',
  inputPlaceholder: '#ccc',
};

export default colors;
