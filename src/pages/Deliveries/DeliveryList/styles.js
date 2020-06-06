import styled from 'styled-components';
import colors from '~/styles/colors';

export const Header = styled.header`
  /* background: lightgreen; */
  margin-top: 30px;
  padding: 10px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    background: ${colors.primary};
    border: 0;
    padding: 10px 30px;
    border-radius: 4px;
    color: ${colors.textLight};
    font-weight: bold;

    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }
`;

export const AvatarWrapper = styled.div`
  /* background: lightcoral; */
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;

  > div {
    margin-right: 8px;
  }
`;
