import React from 'react';
import { useRouter } from 'next/router'

import Header from '../../components/header';
import { Container, Content, List, Card } from './styles';

const Dashboard = () => {
  const router = useRouter()


  const { category } = router.query;
  return (
    <Container>
      <Header />
      
      <Content>
        <h2>{ category }s</h2>
        <List>
          <li>
            <Card isOpen>
              <img src="/static/images/frango-assado.jpg" />
              <div className="info">
                <div className="info__row-one">
                  <h4>Frango Assado</h4>
                  <div>
                    estrelas
                  </div>
                </div>
                <div className="info__row-two">
                  <span>
                    <span className="is-open">Aberto</span> - Fecha às 22:00 - 4km
                  </span>
                </div>
                <div className="info__row-three">
                  <span>
                    Av. Standard - nº 833 - Tres Portos, Esteio - RS, 93270-000
                  </span>
                </div>
                <div className="info__row-four">
                  <button>Detalhes das avaliações</button>
                </div>
              </div>
            </Card>
            <Card isOpen={false}>
              <img src="/static/images/frango-assado.jpg" />
              <div className="info">
                <div className="info__row-one">
                  <h4>Frango Assado</h4>
                  <div>
                    estrelas
                  </div>
                </div>
                <div className="info__row-two">
                  <span>
                    <span className="is-open">Fechado</span> - Abre às 08:00 - 10km
                  </span>
                </div>
                <div className="info__row-three">
                  <span>
                    Av. Standard - nº 833 - Tres Portos, Esteio - RS, 93270-000
                  </span>
                </div>
                <div className="info__row-four">
                  <button>Detalhes das avaliações</button>
                </div>
              </div>
            </Card>
          </li>
        </List>
      </Content>
    </Container>
  );
}

export default Dashboard;