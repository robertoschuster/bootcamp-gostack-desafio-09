import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${colors.panelBackground};
  padding: 0 30px;
  border-bottom: 1px solid ${colors.panelBorder};
`;

export const Content = styled.div`
  /* background: lightsalmon; */
  height: 64px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 200px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid ${colors.panelBorder};
    }

    a {
      font-weight: bold;
      color: ${colors.primary};
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid ${colors.panelBorder};

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${colors.textDarker};
    }

    a {
      /* background: lightgrey; */
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: ${colors.textDark};
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
