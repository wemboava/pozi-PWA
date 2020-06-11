import React from 'react';

import { Container, Content } from './styles';

const Register = () => {
  return (
    <Container>
      <div onClick={() => router('/')} className="logo">
        <img src="/static/images/logo.png" />
        <span>POZI</span>
      </div>
      <Content>
        <h2>Registre-se</h2>
      </Content>
    </Container>
  );
}

export default Register;