import styled from 'styled-components';
import colors from '~/styles/colors';

export const FormWrapper = styled.div`
  border: 1px solid ${colors.panelBorder};
  border-radius: 4px;

  input {
    border: 1px solid ${colors.inputBorder};
    padding: 10px;
    border-radius: 4px;
  }

  label {
    padding: 5px 0;
    color: ${colors.textDark};
  }

  form {
    background: ${colors.panelBackground};
    border-radius: 4px;
    padding: 10px;
  }
`;

export const FieldRowWrapper = styled.div`
  /* background: lightyellow; */
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FieldWrapper = styled.div`
  /* background: lightsalmon; */
  display: flex;
  flex-direction: column;
  /* padding: 5px; */
  margin: 5px;
  flex: ${(props) => (props.flex ? props.flex : '1')};

  > input:focus {
    box-shadow: 0 0 3px ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`;
