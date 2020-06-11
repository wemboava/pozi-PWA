import React from 'react';

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
            <div>
              <img src="/static/images/pousada.png" />
              <span>Pousadas</span>
            </div>
          </li>
          <li>
            <div>
              <img src="/static/images/posto-gasolina.png" />
              <span>Postos</span>
            </div>
          </li>
          <li>
            <div>
              <img src="/static/images/hospital.png" />
              <span>Hospitais</span>
            </div>
          </li>
          <li>
            <div>
              <img src="/static/images/restaurante.png" />
              <span>Restaurante</span>
            </div>
          </li>
          <li>
            <div>
              <img src="/static/images/mecanico.png" />
              <span>Mecânicos</span>
            </div>
          </li>
        </List>
      </Content>
    </Container>
  );
}

export default Dashboard;