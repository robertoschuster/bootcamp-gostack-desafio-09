import styled from 'styled-components';

export const Title = styled.h1`
  /* background: lightcoral; */
  font-size: 20px;
  color: #333;
`;

export const Header = styled.header`
  /* background: lightgreen; */
  margin-top: 30px;
  padding: 10px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    /* padding: 10px; */
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;

    input {
      border: 0;
      outline: 0;
      color: #666;
      padding: 10px;

      &::placeholder {
        color: #ccc;
      }
    }
  }

  button {
    background: #7d40e7;
    border: 0;
    padding: 10px 30px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;

    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }
`;

export const DeliveriesTable = styled.table`
  /* background: lightyellow; */
  margin-top: 10px;
  border-collapse: separate;
  border-spacing: 0px 15px;
  font-size: 14px;

  thead th {
    color: #333;
    text-align: left;
    padding: 16px 10px;
  }

  tbody td {
    color: #666;
    padding: 14px 10px;
    vertical-align: middle;
    background: #fff;
  }

  /* Alinha última coluna à direita */
  tr th:last-child {
    text-align: right;
  }
  tr td:last-child {
    text-align: right;
  }

  /* Padding somente na primeira e última colunas */
  tr th:first-child {
    padding-left: 30px;
  }
  tr td:first-child {
    padding-left: 30px;
  }
  tr th:last-child {
    padding-right: 30px;
  }
  tr td:last-child {
    padding-right: 30px;
  }

  /* Borda arredondada na 1ª linha da tabela */
  tr th:first-child {
    border-top-left-radius: 4px;
  }
  tr th:first-child {
    border-bottom-left-radius: 4px;
  }
  tr th:last-child {
    border-top-right-radius: 4px;
  }
  tr th:last-child {
    border-bottom-right-radius: 4px;
  }

  /* Borda arredondada nas linhas da tabela */
  tr td:first-child {
    border-top-left-radius: 4px;
  }
  tr td:first-child {
    border-bottom-left-radius: 4px;
  }
  tr td:last-child {
    border-top-right-radius: 4px;
  }
  tr td:last-child {
    border-bottom-right-radius: 4px;
  }
`;
