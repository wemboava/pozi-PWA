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
            <Link href="/establishment">
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/pousada.png" />
                <span>Pousadas</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/establishment" as={`/establishment/${'restaurante'}`}>
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/posto-gasolina.png" />
                <span>Postos</span>
              </a>
            </Link>
          </li>
          <li>
            <div className="bg-image"></div>
            <img src="/static/images/hospital.png" />
            <span>Hospitais</span>
          </li>
          <li>
            <div className="bg-image"></div>
            <img src="/static/images/restaurante.png" />
            <span>Restaurante</span>
          </li>
          <li>
            <Link href="/establishment/[restaurante]" as={`/establishment/${'restaurante'}`}>
              <a>
                <div className="bg-image"></div>
                <img src="/static/images/mecanico.png" />
                <span>Mecânicos</span>
              </a>
            </Link>
          </li>
        </List>
      </Content>
    </Container>
  );
}

export default Dashboard;