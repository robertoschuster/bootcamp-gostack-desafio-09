import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Content, Profile, HeaderLink } from './styles';
import logo from '~/assets/logo.png';

import { signOut } from '~/store/modules/auth/actions';

function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [currentRoute, setCurrentRoute] = useState('deliveries');

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="FastFeet" />
          </Link>
          <HeaderLink active={currentRoute === 'deliveries'}>
            <Link
              to="/deliveries"
              onClick={() => setCurrentRoute('deliveries')}>
              ENCOMENDAS
            </Link>
          </HeaderLink>
          <HeaderLink active={currentRoute === 'deliverymen'}>
            <Link
              to="/deliverymen"
              active="true"
              onClick={() => setCurrentRoute('deliverymen')}>
              ENTREGADORES
            </Link>
          </HeaderLink>
          <HeaderLink active={currentRoute === 'recipients'}>
            <Link
              to="/recipients"
              onClick={() => setCurrentRoute('recipients')}>
              DESTINATÁRIOS
            </Link>
          </HeaderLink>
          <HeaderLink active={currentRoute === 'problems'}>
            <Link
              to="/delivery/problems"
              onClick={() => setCurrentRoute('problems')}>
              PROBLEMAS
            </Link>
          </HeaderLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/" onClick={handleSignOut}>
                sair do sistema
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
