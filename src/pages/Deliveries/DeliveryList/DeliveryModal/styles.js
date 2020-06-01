import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  color: #666;
  line-height: 1.8;
  font-size: 13px;
  min-width: 400px;

  strong {
    color: #333;
    font-size: 12px;
    font-weight: bold;
  }

  hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #eee;
    outline: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`;
