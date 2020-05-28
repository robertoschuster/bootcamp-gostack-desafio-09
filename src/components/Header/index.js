import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo.png';

import { signOut } from '~/store/modules/auth/actions';

function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to="/deliveries">ENCOMENDAS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/" onClick={handleSignOut}>
                Sair
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
