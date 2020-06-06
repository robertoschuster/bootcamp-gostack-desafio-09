import styled from 'styled-components';
import colors from '~/styles/colors';

export const Table = styled.table`
  /* background: lightyellow; */
  margin-top: 10px;
  border-collapse: separate;
  border-spacing: 0px 15px;
  font-size: 14px;

  th {
    color: ${colors.textDarker};
    text-align: left;
    padding: 16px 10px;
  }

  tbody td {
    color: ${colors.textDark};
    padding: 10px;
    vertical-align: middle;
    background: ${colors.panelBackground};
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
