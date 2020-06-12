import React from 'react';
import { useRouter } from 'next/router'

import Header from '../../../components/header';
import Ratings from '../../../components/star-ratings';

import { Container, Content } from './styles';

const Dashboard = () => {
  const router = useRouter()

  return (
    <Container>
      <Header />
      
      <div className="back">
        <button onClick={() => router.back()}>
          <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1L2 7.5M2 7.5L8 14M2 7.5H12.25H22.5" stroke="white" strokeWidth="2"/>
          </svg>
          Voltar
        </button>
      </div>
      <Content>
        <h2>Detalhes do estabelecimento</h2>
        ...
      </Content>
    </Container>
  );
}

export default Dashboard;