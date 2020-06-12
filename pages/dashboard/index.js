import React from 'react';
import Link from 'next/link'

import Header from '../../components/header';

import { Container, Content, List } from './styles';

const Dashboard = () => {

  return (
    <Container>
      <Header />

      <Content>
        <h2>Procure por estabelecimentos feitos para você!</h2>
        <List>
          <li>
            <Link href="/estabelecimentos/[restaurante]" as={`/estabelecimentos/${'restaurante'}`}>
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/pousada.png" />
                <span>Pousadas</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/estabelecimentos/[restaurante]" as={`/estabelecimentos/${'restaurante'}`}>
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/posto-gasolina.png" />
                <span>Postos</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/estabelecimentos/[restaurante]" as={`/estabelecimentos/${'restaurante'}`}>
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/hospital.png" />
                <span>Hospitais</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/estabelecimentos/restaurante">
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/restaurante.png" />
                <span>Restaurante</span>
              </a>
            </Link>
          </li>
          <li>
            <a href="/estabelecimentos/restaurante">
              <div className="bg-image"></div>
              <img src="/static/images/mecanico.png" />
              <span>Mecânicos</span>
            </a>
          </li>
        </List>
      </Content>
    </Container>
  );
}

export default Dashboard;