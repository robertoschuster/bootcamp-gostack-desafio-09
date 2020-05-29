import styled from 'styled-components';

export const Container = styled.div`
  /* background: lightcyan; */
  max-width: 80%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    input {
      border: 1px solid #ccc;
      outline: 0ch;
      border-radius: 4px;
      padding: 14px 5px;
      width: 300px;
      color: #666;
    }

    button {
      background: #7d40e7;
      border: 0;
      padding: 10px 10px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      margin-left: 5px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
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

  tr th:last-child {
    text-align: right;
  }
  tr td:last-child {
    text-align: right;
  }

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
