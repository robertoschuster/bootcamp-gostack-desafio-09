import styled from 'styled-components';

export const FormWrapper = styled.div`
  input {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
  }

  input:focus {
    box-shadow: 0 0 3px #7d40e7;
    border: 1px solid #7d40e7;
  }

  label {
    padding: 5px 0;
    color: #666;
  }

  form {
    background: #fff;
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
`;
