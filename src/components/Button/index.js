import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.primary ? '#7d40e7' : '#999')};
  /* background: lightseagreen; */
  border: 0;
  padding: 10px 30px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-left: 10px;

  svg {
    margin-right: 6px;
  }
`;
